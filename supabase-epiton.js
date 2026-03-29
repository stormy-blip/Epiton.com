// ===== EPITON SUPABASE INTEGRATION =====
// Waits for both DOM and Supabase CDN to be ready before doing anything

window._sbReady = false;
window._sbUser  = null;
window._sbProfile = null;
window._onlineUsers = [];

function _waitForSupabase(cb) {
  if (window.supabase && window._SUPABASE_URL) {
    cb(window.supabase.createClient(window._SUPABASE_URL, window._SUPABASE_ANON, {
      auth: {
        persistSession: true,
        storageKey: "epiton_sb_session",
        storage: window.localStorage,
        autoRefreshToken: true,
        detectSessionInUrl: false
      }
    }));
  } else {
    setTimeout(() => _waitForSupabase(cb), 50);
  }
}

// Start after DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => _waitForSupabase(_start));
} else {
  _waitForSupabase(_start);
}

function _start(sb) {
  window._sb = sb;
  const $ = id => document.getElementById(id);

  // ── Auth UI helpers ──────────────────────────────────────────────
  function showAuth(panel) {
    const overlay = $("authOverlay");
    const login   = $("authLoginPanel");
    const create  = $("authCreatePanel");
    [login, create].forEach(p => { if (p) p.hidden = true; });
    if (panel) panel.hidden = false;
    if (overlay) { overlay.hidden = false; overlay.removeAttribute("aria-hidden"); }
  }
  function hideAuth() {
    const overlay = $("authOverlay");
    if (overlay) { overlay.hidden = true; overlay.setAttribute("aria-hidden", "true"); }
  }
  function setErr(id, msg) {
    const el = $(id);
    if (!el) return;
    el.textContent = msg || "";
    el.hidden = !msg;
  }

  // ── Login form ───────────────────────────────────────────────────
  const loginForm = $("authLoginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", async e => {
      e.preventDefault();
      setErr("authError", "");
      const btn = loginForm.querySelector("button[type=submit]");
      if (btn) btn.disabled = true;
      const { error } = await sb.auth.signInWithPassword({
        email:    $("authEmailInput")?.value.trim(),
        password: $("authPasswordInput")?.value
      });
      if (error) setErr("authError", "Incorrect email or password.");
      if (btn) btn.disabled = false;
    });
  }

  // ── Register form ────────────────────────────────────────────────
  const createForm = $("authCreateForm");
  const pwdEl = $("authCreatePassword");
  const hintEl = $("authPasswordHint");
  if (pwdEl && hintEl) {
    pwdEl.addEventListener("input", () => {
      const l = pwdEl.value.length;
      hintEl.style.display = (l > 0 && (l < 8 || l > 16)) ? "block" : "none";
    });
  }
  if (createForm) {
    createForm.addEventListener("submit", async e => {
      e.preventDefault();
      setErr("authCreateError", "");
      const btn = createForm.querySelector("button[type=submit]");
      if (btn) btn.disabled = true;
      const name     = $("authCreateName")?.value.trim() || "";
      const username = ($("authCreateUsername")?.value.trim() || "").toLowerCase();
      const email    = $("authCreateEmail")?.value.trim() || "";
      const password = $("authCreatePassword")?.value || "";
      if (!name || !username || !email || !password) {
        setErr("authCreateError", "Please fill in all fields.");
        if (btn) btn.disabled = false; return;
      }
      if (password.length < 8 || password.length > 16) {
        setErr("authCreateError", "Password must be 8–16 characters.");
        if (btn) btn.disabled = false; return;
      }
      const { data, error } = await sb.auth.signUp({ email, password });
      if (error) { setErr("authCreateError", error.message); if (btn) btn.disabled = false; return; }
      if (data.user?.id) {
        await sb.from("profiles").insert({
          id: data.user.id, username, display_name: name,
          email, bio: "", avatar_url: "", location: ""
        });
      }
      if (btn) btn.disabled = false;
    });
  }
  $("authCreateAccountBtn")?.addEventListener("click", () => showAuth($("authCreatePanel")));
  $("authBackToLoginBtn")?.addEventListener("click",   () => showAuth($("authLoginPanel")));

  // ── Override all profile page buttons ────────────────────────────
  // These must run AFTER script.js wires its own handlers (capture: true)

  // Close button
  document.addEventListener("click", async e => {
    if (e.target?.id === "myProfileCloseBtn") {
      e.stopImmediatePropagation();
      const pg = $("myProfilePage");
      if (pg) { pg.hidden = true; pg.setAttribute("aria-hidden", "true"); }
      try { if (typeof closeOverlay === "function") closeOverlay("myProfilePage"); } catch(err) {}
    }
  }, true);

  // Edit profile button — open profile editor overlay
  document.addEventListener("click", e => {
    if (e.target?.id === "myProfileEditBtn") {
      e.stopImmediatePropagation();
      const pg = $("myProfilePage");
      if (pg) { pg.hidden = true; pg.setAttribute("aria-hidden", "true"); }
      const editor = $("profileEditor");
      if (editor) { editor.hidden = false; editor.removeAttribute("aria-hidden"); }
      try { if (typeof openOverlay === "function") openOverlay("profileEditor"); } catch(err) {}
    }
  }, true);

  // Logout button — use Supabase signOut
  document.addEventListener("click", async e => {
    if (e.target?.id === "myProfileLogoutBtn") {
      e.stopImmediatePropagation();
      await sb.auth.signOut();
      window._sbUser = null;
      const pg = $("myProfilePage");
      if (pg) { pg.hidden = true; pg.setAttribute("aria-hidden", "true"); }
      showAuth($("authLoginPanel"));
    }
  }, true);

  // Switch account button — just show login for now
  document.addEventListener("click", e => {
    if (e.target?.id === "myProfileSwitchBtn") {
      e.stopImmediatePropagation();
      const pg = $("myProfilePage");
      if (pg) { pg.hidden = true; pg.setAttribute("aria-hidden", "true"); }
      showAuth($("authLoginPanel"));
    }
  }, true);

  // ── Logout ───────────────────────────────────────────────────────
  document.addEventListener("click", async e => {
    if (e.target?.id === "logoutBtn") {
      e.stopImmediatePropagation();
      await sb.auth.signOut();
      window._sbUser = null;
      showAuth($("authLoginPanel"));
    }
  }, true);

  // ── Auth state listener ──────────────────────────────────────────
  let _sessionChecked = false;
  sb.auth.onAuthStateChange(async (event, session) => {
    // Ignore SIGNED_OUT events that fire before initial session check completes
    if (!_sessionChecked && !session) return;
    if (session?.user) {
      window._sbUser = session.user;
      hideAuth();
      setTimeout(() => _onLogin(session.user), 300);
    } else if (event === "SIGNED_OUT") {
      window._sbUser = null;
      showAuth($("authLoginPanel"));
    }
  });

  // Check existing session
  setTimeout(async () => {
    const { data: { session } } = await sb.auth.getSession();
    _sessionChecked = true;
    if (session?.user) {
      window._sbUser = session.user;
      hideAuth();
      setTimeout(() => _onLogin(session.user), 300);
    } else {
      showAuth($("authLoginPanel"));
    }
  }, 300);

  // ── On login ─────────────────────────────────────────────────────
  async function _onLogin(user) {
    // Re-render app
    try { if (typeof renderPosts === "function") renderPosts(); } catch(e) {}
    try { if (typeof renderReels === "function") renderReels(); } catch(e) {}
    try { if (typeof renderNotifications === "function") renderNotifications(); } catch(e) {}
    try { if (typeof renderConversationList === "function") renderConversationList(); } catch(e) {}
    try { if (typeof initReelsFromDB === "function") initReelsFromDB(); } catch(e) {}

    // Load profile
    const { data: p } = await sb.from("profiles").select("*").eq("id", user.id).maybeSingle();
    if (p) {
      window._sbProfile = p;
      _applyProfile(p);
      if (window.profileData) {
        window.profileData.name   = p.display_name || "";
        window.profileData.handle = p.username || "";
        window.profileData.email  = p.email || "";
        window.profileData.bio    = p.bio || "";
        if (p.avatar_url) window.profileData.image = p.avatar_url;
      }
      try { if (typeof renderProfileCard === "function") renderProfileCard(); } catch(e) {}
      try { if (typeof fillProfileForm === "function") fillProfileForm(); } catch(e) {}
    }
    _loadConversations(user.id);
    _joinPresence(user.id);
  }

  // ── Apply profile to all UI elements ─────────────────────────────
  function _applyProfile(p) {
    const av = p.avatar_url || "https://randomuser.me/api/portraits/men/85.jpg";
    const s = (id, val, prop) => { const e = $(id); if (e) e[prop || "textContent"] = val; };
    s("homeProfileImage",  av,                     "src");
    s("homeProfileHandle", "@" + (p.username||"user"));
    s("homeProfileName",   p.display_name || "User");
    s("homeProfileBio",    p.bio || "");
    s("myProfileAvatar",   av,                     "src");
    s("myProfileName",     p.display_name || "User");
    s("myProfileHandle",   "@" + (p.username||"user"));
    s("myProfileBio",      p.bio || "");
    document.querySelectorAll(".mob-nav-avatar").forEach(i => i.src = av);
    const fields = { profileNameInput: p.display_name, profileHandleInput: p.username,
      profileEmailInput: p.email, profileBioInput: p.bio, profileLocationInput: p.location };
    Object.entries(fields).forEach(([id, val]) => { const e = $(id); if (e) e.value = val || ""; });
  }

  // ── Profile save ─────────────────────────────────────────────────
  const profileForm = $("profileForm");
  if (profileForm) {
    profileForm.addEventListener("submit", async e => {
      e.preventDefault();
      e.stopImmediatePropagation();
      const user = window._sbUser;
      if (!user) return;
      const fields = {
        display_name: $("profileNameInput")?.value.trim() || "",
        username:     ($("profileHandleInput")?.value.trim() || "").toLowerCase(),
        bio:          $("profileBioInput")?.value.trim() || "",
        location:     $("profileLocationInput")?.value.trim() || ""
      };
      const { error } = await sb.from("profiles").update(fields).eq("id", user.id);
      if (!error) {
        if (window.profileData) {
          window.profileData.name   = fields.display_name;
          window.profileData.handle = fields.username;
          window.profileData.bio    = fields.bio;
        }
        try { if (typeof renderProfileCard === "function") renderProfileCard(); } catch(e) {}
        const msg = $("profileSavedMsg");
        if (msg) { msg.style.display = "block"; setTimeout(() => msg.style.display = "none", 2000); }
      }
    }, true);
  }

  // ── Avatar upload ─────────────────────────────────────────────────
  const profileImageInput = $("profileImageInput");
  if (profileImageInput) {
    profileImageInput.addEventListener("change", async e => {
      e.stopImmediatePropagation();
      const file = e.target.files?.[0];
      const user = window._sbUser;
      if (!file || !user) return;
      if (file.size > 5 * 1024 * 1024) { alert("Avatar must be under 5 MB."); return; }
      const allowed = ["image/jpeg","image/png","image/gif","image/webp"];
      if (!allowed.includes(file.type)) { alert("Unsupported image format."); return; }
      const ext  = file.name.split(".").pop();
      const path = `${user.id}/avatar.${ext}`;
      const { error } = await sb.storage.from("avatars").upload(path, file, { upsert: true });
      if (error) { alert("Upload failed: " + error.message); return; }
      const { data: { publicUrl } } = sb.storage.from("avatars").getPublicUrl(path);
      await sb.from("profiles").update({ avatar_url: publicUrl }).eq("id", user.id);
      document.querySelectorAll(".mob-nav-avatar,#homeProfileImage,#myProfileAvatar").forEach(i => i.src = publicUrl);
      if (window.profileData) window.profileData.image = publicUrl;
      try { if (typeof renderProfileCard === "function") renderProfileCard(); } catch(e) {}
    }, true);
  }

  // ── People page ───────────────────────────────────────────────────
  const peoplePage   = $("peoplePage");
  const peopleList   = $("peopleList");
  const peopleSearch = $("peopleSearchInput");
  let _allPeople = [];

  async function _loadPeople(q) {
    const user = window._sbUser;
    if (!peopleList) return;
    if (!user) { peopleList.innerHTML = '<div class="people-loading">Sign in to see people</div>'; return; }
    peopleList.innerHTML = '<div class="people-loading">Loading…</div>';
    let query = sb.from("profiles").select("*").neq("id", user.id);
    if (q) query = query.or(`username.ilike.%${q}%,display_name.ilike.%${q}%`);
    const { data: profiles } = await query;
    _allPeople = profiles || [];
    if (!_allPeople.length) {
      peopleList.innerHTML = `<div class="people-empty"><span style="font-size:40px">👥</span>
        <p style="font-weight:700;margin:10px 0 4px">No one here yet</p>
        <small>Share the link so others can join!</small></div>`;
      return;
    }
    const followChecks = await Promise.all(_allPeople.map(async p => {
      const { data } = await sb.from("follows").select("follower_id").eq("follower_id", user.id).eq("followed_id", p.id).maybeSingle();
      return !!data;
    }));
    const onlineIds = window._onlineUsers || [];
    peopleList.innerHTML = _allPeople.map((p, i) => {
      const av = p.avatar_url || `https://randomuser.me/api/portraits/lego/${i%8}.jpg`;
      const fol = followChecks[i];
      return `<div class="people-card" data-uid="${p.id}">
        <div class="people-avatar-wrap"><img src="${av}" class="people-avatar" />
          ${onlineIds.includes(p.id) ? '<span class="people-online-dot"></span>' : ''}</div>
        <div class="people-info"><strong class="people-name">${p.display_name}</strong>
          <span class="people-handle">@${p.username}</span>
          ${p.bio ? `<p class="people-bio">${p.bio}</p>` : ''}</div>
        <div class="people-actions">
          <button class="people-follow-btn ${fol?'following':''}" data-uid="${p.id}" data-following="${fol}">${fol?'Following':'Follow'}</button>
          <button class="people-msg-btn" data-uid="${p.id}" data-name="${p.display_name}" data-avatar="${av}">💬</button>
        </div></div>`;
    }).join("");
  }

  peopleList?.addEventListener("click", async e => {
    const user = window._sbUser; if (!user) return;
    const fBtn = e.target.closest(".people-follow-btn");
    if (fBtn) {
      const uid = fBtn.dataset.uid, was = fBtn.dataset.following === "true";
      fBtn.disabled = true;
      if (was) await sb.from("follows").delete().eq("follower_id", user.id).eq("followed_id", uid);
      else await sb.from("follows").insert({ follower_id: user.id, followed_id: uid });
      fBtn.textContent = was ? "Follow" : "Following";
      fBtn.dataset.following = String(!was);
      fBtn.classList.toggle("following", !was);
      fBtn.disabled = false; return;
    }
    const mBtn = e.target.closest(".people-msg-btn");
    if (mBtn) { if (peoplePage) peoplePage.hidden = true; _openChat(mBtn.dataset.uid, mBtn.dataset.name, mBtn.dataset.avatar); }
  });

  let _searchTimer;
  peopleSearch?.addEventListener("input", () => {
    clearTimeout(_searchTimer);
    _searchTimer = setTimeout(() => _loadPeople(peopleSearch.value.trim()), 300);
  });

  window._loadPeoplePage = () => _loadPeople();
  window._openPeoplePage = () => {
    if (!peoplePage) return;
    peoplePage.hidden = false; peoplePage.removeAttribute("aria-hidden");
    try { if (typeof openOverlay === "function") openOverlay("peoplePage"); } catch(e) {}
    _loadPeople();
  };

  // ── Real-time chat ────────────────────────────────────────────────
  let _chatUid = null, _chatConvId = null, _chatSub = null, _msgIds = new Set();

  async function _openChat(uid, name, avatar) {
    const user = window._sbUser; if (!user) return;
    _chatUid = uid; _chatConvId = [user.id, uid].sort().join("_"); _msgIds = new Set();
    const chatAvatar = $("chatAvatar"), chatName = $("chatName"), chatStatus = $("chatStatus");
    if (chatAvatar) chatAvatar.src = avatar;
    if (chatName)   chatName.textContent = name;
    if (chatStatus) chatStatus.textContent = (window._onlineUsers||[]).includes(uid) ? "Online" : "Offline";
    const inbox = $("messageInbox"); if (inbox) inbox.classList.add("open");
    document.querySelector(".chat-panel")?.classList.add("show-chat");
    const chatMsgs = $("chatMessages"); if (chatMsgs) chatMsgs.innerHTML = "";
    const { data: msgs } = await sb.from("messages").select("*").eq("conversation_id", _chatConvId).order("created_at", { ascending: true }).limit(50);
    (msgs||[]).forEach(m => _renderMsg(m, user.id));
    if (chatMsgs) chatMsgs.scrollTop = chatMsgs.scrollHeight;
    if (_chatSub) { try { sb.removeChannel(_chatSub); } catch(e) {} _chatSub = null; }
    _chatSub = sb.channel(`chat_${_chatConvId}`)
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "messages", filter: `conversation_id=eq.${_chatConvId}` }, payload => {
        _renderMsg(payload.new, user.id);
        if (chatMsgs) chatMsgs.scrollTop = chatMsgs.scrollHeight;
      }).subscribe();
  }

  function _renderMsg(msg, myUid) {
    const el = $("chatMessages");
    if (!el || !msg?.content || _msgIds.has(msg.id)) return;
    _msgIds.add(msg.id);
    const b = document.createElement("div");
    b.className = `chat-bubble ${msg.sender_id === myUid ? "from-you" : "from-them"}`;
    b.textContent = msg.content;
    el.appendChild(b);
  }

  const chatForm = $("chatForm");
  if (chatForm) {
    chatForm.addEventListener("submit", async e => {
      e.preventDefault(); e.stopImmediatePropagation();
      const user = window._sbUser; if (!user || !_chatUid || !_chatConvId) return;
      const input = $("chatInput"); const content = input?.value.trim(); if (!content) return;
      input.value = "";
      await sb.from("messages").insert({ conversation_id: _chatConvId, sender_id: user.id, recipient_id: _chatUid, content });
      await sb.from("conversations").upsert({ id: _chatConvId, participants: [user.id, _chatUid].sort(), last_message: content, last_sender_id: user.id, updated_at: new Date().toISOString() });
    }, true);
  }

  // ── Load conversations ────────────────────────────────────────────
  async function _loadConversations(uid) {
    const listEl = $("conversationList"); if (!listEl) return;
    const { data: convs } = await sb.from("conversations").select("*").contains("participants", [uid]).order("updated_at", { ascending: false });
    if (!convs?.length) return;
    listEl.innerHTML = "";
    for (const conv of convs) {
      const otherUid = conv.participants?.find(id => id !== uid); if (!otherUid) continue;
      const { data: p } = await sb.from("profiles").select("*").eq("id", otherUid).maybeSingle(); if (!p) continue;
      const av = p.avatar_url || "https://randomuser.me/api/portraits/lego/1.jpg";
      const item = document.createElement("div");
      item.className = "conversation-item"; item.dataset.uid = otherUid;
      item.innerHTML = `<div class="conv-avatar-wrap"><img src="${av}" style="width:48px;height:48px;border-radius:50%;object-fit:cover" />
        ${(window._onlineUsers||[]).includes(otherUid) ? '<span class="conv-online-dot"></span>' : ''}</div>
        <div style="flex:1;min-width:0"><strong style="display:block">${p.display_name}</strong>
        <span style="font-size:12px;color:var(--text-secondary)">${conv.last_message||""}</span></div>`;
      item.addEventListener("click", () => _openChat(otherUid, p.display_name, av));
      listEl.appendChild(item);
    }
  }

  // ── Presence ──────────────────────────────────────────────────────
  let _presenceCh = null;
  function _joinPresence(uid) {
    _presenceCh = sb.channel("epiton_presence", { config: { presence: { key: uid } } });
    _presenceCh.on("presence", { event: "sync" }, () => {
      window._onlineUsers = Object.keys(_presenceCh.presenceState());
    }).subscribe(async status => {
      if (status === "SUBSCRIBED") await _presenceCh.track({ uid, online_at: new Date().toISOString() });
    });
  }

  // ── DM People button ──────────────────────────────────────────────
  $("dmPeopleBtn")?.addEventListener("click", () => {
    const inbox = $("messageInbox"); if (inbox) inbox.classList.remove("open");
    try { if (typeof closeOverlay === "function") closeOverlay("messageInbox"); } catch(e) {}
    if (window._openPeoplePage) window._openPeoplePage();
  });

  // ── Profile page with real data ───────────────────────────────────
  async function _loadProfilePage() {
    const user = window._sbUser; if (!user) return;
    const [{ count: fc }, { count: ing }] = await Promise.all([
      sb.from("follows").select("*", { count: "exact", head: true }).eq("followed_id", user.id),
      sb.from("follows").select("*", { count: "exact", head: true }).eq("follower_id", user.id)
    ]);
    const sv = (id, v) => { const e = $(id); if (e) e.textContent = v || 0; };
    sv("myStatFollowers", fc || 0); sv("myStatFollowing", ing || 0);
    const activeTab = document.querySelector(".my-profile-tab.active")?.dataset.tab || "posts";
    _loadProfileTab(activeTab);
  }

  async function _loadProfileTab(tab) {
    const user = window._sbUser;
    const content = $("myProfileTabContent"); if (!content || !user) return;
    content.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">Loading…</div>';

    if (tab === "posts") {
      const uname = window._sbProfile?.username || "";
      const userPosts = (window.posts||[]).filter(p => p.user === uname);
      content.innerHTML = userPosts.length
        ? `<div class="my-profile-grid">${userPosts.map(p => `<div class="my-profile-grid-item"><img src="${p.photo}" style="width:100%;height:100%;object-fit:cover" /></div>`).join("")}</div>`
        : '<div style="text-align:center;padding:40px;color:var(--text-secondary)">No posts yet</div>';

    } else if (tab === "reels") {
      const { data: files } = await sb.storage.from("reels").list(user.id + "/");
      if (!files?.length) { content.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">No reels yet</div>'; return; }
      content.innerHTML = `<div class="my-profile-grid">${files.map(f => {
        const { data: { publicUrl } } = sb.storage.from("reels").getPublicUrl(`${user.id}/${f.name}`);
        return `<div class="my-profile-grid-item"><video src="${publicUrl}" style="width:100%;height:100%;object-fit:cover" muted playsinline></video></div>`;
      }).join("")}</div>`;

    } else if (tab === "liked-posts") {
      const liked = window.likedPosts ? [...window.likedPosts] : [];
      const likedData = (window.posts||[]).filter((_,i) => liked.includes(String(i)));
      content.innerHTML = likedData.length
        ? `<div class="my-profile-grid">${likedData.map(p => `<div class="my-profile-grid-item"><img src="${p.photo}" style="width:100%;height:100%;object-fit:cover" /></div>`).join("")}</div>`
        : '<div style="text-align:center;padding:40px;color:var(--text-secondary)">No liked posts yet</div>';

    } else if (tab === "followers") {
      const { data: rows } = await sb.from("follows").select("follower_id").eq("followed_id", user.id);
      if (!rows?.length) { content.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">No followers yet</div>'; return; }
      const profiles = (await Promise.all(rows.map(r => sb.from("profiles").select("*").eq("id", r.follower_id).maybeSingle().then(d => d.data)))).filter(Boolean);
      content.innerHTML = _userListHTML(profiles);

    } else if (tab === "following") {
      const { data: rows } = await sb.from("follows").select("followed_id").eq("follower_id", user.id);
      if (!rows?.length) { content.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">Not following anyone yet</div>'; return; }
      const profiles = (await Promise.all(rows.map(r => sb.from("profiles").select("*").eq("id", r.followed_id).maybeSingle().then(d => d.data)))).filter(Boolean);
      content.innerHTML = _userListHTML(profiles);

    } else if (tab === "friends") {
      const [{ data: fing }, { data: fers }] = await Promise.all([
        sb.from("follows").select("followed_id").eq("follower_id", user.id),
        sb.from("follows").select("follower_id").eq("followed_id", user.id)
      ]);
      const fingIds = new Set((fing||[]).map(r => r.followed_id));
      const mutualIds = (fers||[]).map(r => r.follower_id).filter(id => fingIds.has(id));
      if (!mutualIds.length) { content.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-secondary)">No mutual friends yet</div>'; return; }
      const profiles = (await Promise.all(mutualIds.map(id => sb.from("profiles").select("*").eq("id", id).maybeSingle().then(d => d.data)))).filter(Boolean);
      content.innerHTML = _userListHTML(profiles);
    }
  }

  function _userListHTML(profiles) {
    return `<div style="display:flex;flex-direction:column;gap:10px;padding:12px">` +
      profiles.map(p => {
        const av = p.avatar_url || "https://randomuser.me/api/portraits/lego/1.jpg";
        return `<div style="display:flex;align-items:center;gap:12px;padding:10px;background:var(--surface);border:1px solid var(--border);border-radius:12px">
          <img src="${av}" style="width:44px;height:44px;border-radius:50%;object-fit:cover" />
          <div><strong style="display:block">${p.display_name}</strong>
          <span style="font-size:12px;color:var(--text-secondary)">@${p.username}</span></div></div>`;
      }).join("") + `</div>`;
  }

  // Wire profile tabs
  document.addEventListener("click", e => {
    const tab = e.target.closest(".my-profile-tab"); if (!tab) return;
    document.querySelectorAll(".my-profile-tab").forEach(t => t.classList.remove("active"));
    tab.classList.add("active");
    _loadProfileTab(tab.dataset.tab);
  });

  // Wire profile nav to load real data
  $("profileNavBtn")?.addEventListener("click", async e => {
    e.preventDefault(); e.stopImmediatePropagation();
    try { if (typeof openMyProfilePage === "function") openMyProfilePage(); } catch(err) {
      const pg = $("myProfilePage"); if (pg) { pg.hidden = false; pg.removeAttribute("aria-hidden"); }
    }
    setTimeout(() => _loadProfilePage(), 100);
  }, true);

  document.addEventListener("click", e => {
    if (e.target.closest("[data-nav='profile']")) setTimeout(() => _loadProfilePage(), 200);
  });

  // ── Reels — save to Supabase Storage ─────────────────────────────
  const reelVideoInput = $("reelVideoInput");
  if (reelVideoInput) {
    reelVideoInput.addEventListener("change", async e => {
      const file = e.target.files?.[0]; const user = window._sbUser;
      if (!file || !user) return;
      if (file.size > 50 * 1024 * 1024) { alert("Reel must be under 50 MB."); return; }
      const statusEl = $("reelUploadStatus");
      if (statusEl) statusEl.textContent = "Uploading reel…";
      const fname = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9._-]/g, "_")}`;
      const { error } = await sb.storage.from("reels").upload(`${user.id}/${fname}`, file, { upsert: false });
      if (error) { if (statusEl) statusEl.textContent = "Upload failed: " + error.message; return; }
      const { data: { publicUrl } } = sb.storage.from("reels").getPublicUrl(`${user.id}/${fname}`);
      const caption = $("reelCaptionInput")?.value.trim() || "";
      const p = window._sbProfile;
      const newReel = { id: "sb_" + Date.now(), user: p?.username || "you",
        avatar: p?.avatar_url || "https://randomuser.me/api/portraits/men/85.jpg",
        video: publicUrl, caption, likes: 0 };
      if (window.reels) window.reels.unshift(newReel);
      try { if (typeof renderReels === "function") renderReels(); } catch(err) {}
      if (statusEl) { statusEl.textContent = "Reel uploaded!"; setTimeout(() => statusEl.textContent = "", 3000); }
      const uploadPanel = $("reelsUploadPanel"); if (uploadPanel) uploadPanel.hidden = true;
    }, true);
  }

  console.log("✅ Epiton Supabase ready");
}
