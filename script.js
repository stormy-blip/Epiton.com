const stories = [
  { name: "jane.s",    avatar: "https://randomuser.me/api/portraits/women/44.jpg",  video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",    caption: "Golden hour vibes 🌸" },
  { name: "oceanvid",  avatar: "https://randomuser.me/api/portraits/men/32.jpg",    video: "https://www.w3schools.com/html/mov_bbb.mp4",                                   caption: "Big Buck Bunny 🐰" },
  { name: "pixelnate", avatar: "https://randomuser.me/api/portraits/men/75.jpg",    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", caption: "Elephants Dream 🎬" },
  { name: "nina.run",  avatar: "https://randomuser.me/api/portraits/women/68.jpg",  video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4", caption: "City lights 🔥" },
  { name: "travelmax", avatar: "https://randomuser.me/api/portraits/men/52.jpg",    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4", caption: "Adventure awaits 🏔️" },
  { name: "martin.f",  avatar: "https://randomuser.me/api/portraits/men/11.jpg",    video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",     caption: "Weekend mood 🎉" },
  { name: "daily.fit", avatar: "https://randomuser.me/api/portraits/women/26.jpg",  video: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", caption: "Morning run done 💪" }
];

const posts = [
  {
    user: "jane.s",
    location: "Los Angeles",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    photo: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
    likes: "32,410",
    caption: "Weekend light and ocean air."
  },
  {
    user: "nina.run",
    location: "Tokyo",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
    likes: "18,903",
    caption: "Small moments, strong coffee, city glow."
  },
  {
    user: "travelmax",
    location: "Swiss Alps",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    photo: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=80",
    likes: "54,117",
    caption: "Every climb is worth the sunrise."
  }
];

const defaultReels = [
  {
    id: "r1",
    user: "travelmax",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    video: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
    caption: "Morning colors and mountain air.",
    likes: 2093
  },
  {
    id: "r2",
    user: "nina.run",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    video: "https://www.w3schools.com/html/mov_bbb.mp4",
    caption: "Quick street reel from today.",
    likes: 1487
  }
];

const suggested = [
  { user: "studio.vera", info: "Followed by jane.s",    avatar: "https://randomuser.me/api/portraits/women/55.jpg" },
  { user: "mealcrumbs", info: "Popular",                avatar: "https://randomuser.me/api/portraits/men/23.jpg" },
  { user: "dan.k",       info: "New to Epiton",          avatar: "https://randomuser.me/api/portraits/men/47.jpg" },
  { user: "lensloop",   info: "Followed by travelmax",  avatar: "https://randomuser.me/api/portraits/women/33.jpg" },
  { user: "rio.draws",  info: "Suggested for you",      avatar: "https://randomuser.me/api/portraits/women/17.jpg" }
];

// Real conversations loaded from Firebase — no mock data
const defaultConversations = [];

// Real contacts loaded from Firebase — no mock data
const contactDirectory = [];

// expose data globals for search
window.stories = stories;
window.posts = posts;
window.suggested = suggested;
window.defaultReels = defaultReels;
window.contactDirectory = contactDirectory;

const autoReplyTemplates = [
  "Nice one. I am on it.",
  "Love that idea.",
  "Let me get back to you in a bit.",
  "Yes, that works for me.",
  "Sounds good. Want to plan details?",
  "Great. I will send updates soon."
];

const usLocations = [
  "New York, New York",
  "Los Angeles, California",
  "Chicago, Illinois",
  "Houston, Texas",
  "Phoenix, Arizona",
  "Miami, Florida",
  "Seattle, Washington",
  "Denver, Colorado",
  "Boston, Massachusetts",
  "Atlanta, Georgia"
];

const generativeReplyBank = {
  acknowledgements: [
    "Thanks for sharing that.",
    "I hear you.",
    "I get what you mean.",
    "That makes sense.",
    "I am with you."
  ],
  empathy: {
    positive: [
      "That sounds like a really good moment.",
      "I like that energy.",
      "That is genuinely nice to hear."
    ],
    negative: [
      "That sounds tough, honestly.",
      "I can see why that felt heavy.",
      "Sorry you had to deal with that."
    ],
    neutral: [
      "That is interesting.",
      "That gives good context.",
      "I understand."
    ]
  },
  topicSupport: {
    work: [
      "Work can be a lot some days, but you are handling it.",
      "Hope the next work session feels smoother."
    ],
    school: [
      "You are doing your best, and that matters.",
      "I hope your next class or study block goes better."
    ],
    tech: [
      "We can solve it step by step if you want.",
      "If you share the exact issue, I can help break it down."
    ],
    travel: [
      "That sounds like a solid travel story already.",
      "Hope the next part of your trip is even better."
    ],
    food: [
      "That sounds tasty, not going to lie.",
      "Now I am curious what you will try next."
    ],
    fitness: [
      "That is good momentum, keep it up.",
      "Consistency is the hard part, and you are doing it."
    ],
    relationship: [
      "Communication can make a big difference there.",
      "I hope things feel easier after your next conversation."
    ],
    general: [
      "I appreciate you telling me.",
      "Thanks for the update."
    ]
  },
  followUpQuestions: {
    general: [
      "What happened next?",
      "How are you feeling about it now?",
      "Want to tell me a bit more?"
    ],
    work: [
      "Was the hardest part the deadline or the workload?",
      "Do you want to plan tomorrow so it feels lighter?"
    ],
    tech: [
      "What error are you seeing exactly?",
      "Do you want to troubleshoot it one step at a time?"
    ],
    planning: [
      "What is your next move?",
      "Do you want to plan it together quickly?"
    ]
  },
  directIntentReplies: {
    thanks: [
      "Anytime. I am glad it helped.",
      "You are welcome. Happy to help."
    ],
    apology: [
      "No worries at all, you are good.",
      "It is all good, no stress."
    ],
    shortAck: [
      "Nice, sounds good.",
      "Perfect, we move.",
      "Alright, got you."
    ]
  }
};

const THEME_KEY = "instagram_theme_mode";
const THEME_MODES = [
  { id: "light", label: "Light", hint: "Balanced daylight view" },
  { id: "dark",  label: "Dark",  hint: "Classic low-light mode" }
];
const standardProfilePresets = {
  "nina.run": {
    name: "Nina Run",
    role: "Street Photographer",
    location: "Tokyo, Japan",
    bio: "Capturing fast city moments and quiet stories between lights."
  },
  travelmax: {
    name: "Max Traveler",
    role: "Adventure Creator",
    location: "Zermatt, Switzerland",
    bio: "Chasing summits, glaciers, and sunrise trails around the world."
  },
  "studio.vera": {
    name: "Vera Studio",
    role: "Brand Designer",
    location: "Lagos, Nigeria",
    bio: "Designing clean digital brands with bold identity and motion."
  },
  mealcrumbs: {
    name: "Meal Crumbs",
    role: "Food Creator",
    location: "Austin, Texas",
    bio: "Simple recipes, sharp flavors, and quick kitchen ideas."
  },
  lensloop: {
    name: "Lens Loop",
    role: "Visual Storyteller",
    location: "Cape Town, South Africa",
    bio: "Short cinematic edits and color-rich travel reels."
  }
};
const profileLocationPool = [
  "New York, USA",
  "Los Angeles, USA",
  "Toronto, Canada",
  "London, UK",
  "Berlin, Germany",
  "Paris, France",
  "Lagos, Nigeria",
  "Cape Town, South Africa",
  "Sydney, Australia",
  "Tokyo, Japan"
];
const profileRolePool = [
  "Creator",
  "Photographer",
  "Designer",
  "Developer",
  "Writer",
  "Producer",
  "Athlete",
  "Artist"
];
const profileTagPool = [
  "Photography",
  "Design",
  "Travel",
  "Fitness",
  "Tech",
  "Food",
  "Lifestyle",
  "Music",
  "Art",
  "Culture"
];
const standardProfilesByUser = {};
const PROFILE_KEY = "epiton_profile_data";
const CONVERSATIONS_KEY = "epiton_conversations_data";
const FOLLOWED_USERS_KEY = "epiton_followed_users";
const REELS_KEY = "epiton_reels_data";
const POST_LIKES_KEY = "epiton_post_likes_data";
const REEL_LIKES_KEY = "epiton_reel_likes_data";
const POST_COMMENTS_KEY = "epiton_post_comments_data";
const REEL_COMMENTS_KEY = "epiton_reel_comments_data";
const NOTIFICATIONS_KEY = "epiton_notifications_data";
const FRIEND_REQUESTS_KEY = "epiton_friend_requests_data";
const REEL_FRAME_MODE_KEY = "epiton_reel_frame_mode";
const REEL_MAX_UPLOAD_MB = 25;
const REEL_MAX_UPLOAD_BYTES = REEL_MAX_UPLOAD_MB * 1024 * 1024;
const typingStateByConversation = new Map();

const defaultProfile = {
  name: "Your Name",
  handle: "your_handle",
  email: "you@example.com",
  location: "Lagos",
  bio: "Tell your story here ✨",
  image: "https://randomuser.me/api/portraits/men/85.jpg"
};

function createSafeConversation(source, fallbackId) {
  const safeSource = source && typeof source === "object" ? source : {};
  const safeMessages = Array.isArray(safeSource.messages)
    ? safeSource.messages
        .filter((message) => message && typeof message === "object")
        .map((message) => ({
          from: message.from === "you" ? "you" : "them",
          text: String(message.text || "").trim()
        }))
        .filter((message) => message.text.length > 0)
    : [];

  return {
    id: String(safeSource.id || fallbackId),
    user: String(safeSource.user || "new.user"),
    avatar: String(safeSource.avatar || "https://randomuser.me/api/portraits/men/46.jpg"),
    status: String(safeSource.status || "Active now"),
    unread: Number.isFinite(Number(safeSource.unread)) ? Math.max(0, Number(safeSource.unread)) : 0,
    messages: safeMessages
  };
}

let conversations = [...defaultConversations];
let activeConversationId = conversations[0].id;
let profileData = { ...defaultProfile };
window.profileData = profileData;
let followedUsers = new Set();
let activeProfileUser = "";
let contactSearchQuery = "";
let reels = [...defaultReels];
let likedPosts = new Set();
let likedReels = new Set();
let postCommentsByIndex = {};
let reelCommentsById = {};
let notifications = [];
let sentFriendRequests = new Set();
let reelObserver = null;
let reelFrameMode = "portrait";

const storiesEl = document.getElementById("stories");
const postsEl = document.getElementById("posts");
const reelsPageEl = document.getElementById("reelsPage");
const reelsFeedEl = document.getElementById("reelsFeed");
const reelsNavBtnEl = document.getElementById("reelsNavBtn");
const reelUploadFormEl = document.getElementById("reelUploadForm");
const reelVideoInputEl = document.getElementById("reelVideoInput");
const reelUploadStatusEl = document.getElementById("reelUploadStatus");
const reelFrameModeSelectEl = document.getElementById("reelFrameModeSelect");
const notificationsNavBtnEl = document.getElementById("notificationsNavBtn");
const notificationsPanelEl = document.getElementById("notificationsPanel");
const notificationsListEl = document.getElementById("notificationsList");
const clearNotificationsBtnEl = document.getElementById("clearNotificationsBtn");
const toastContainerEl = document.getElementById("toastContainer");
const suggestedEl = document.getElementById("suggestedUsers");
const conversationListEl = document.getElementById("conversationList");
const unreadCountEl = document.getElementById("unreadCount");
const chatAvatarEl = document.getElementById("chatAvatar");
const chatNameEl = document.getElementById("chatName");
const chatStatusEl = document.getElementById("chatStatus");
const chatMessagesEl = document.getElementById("chatMessages");
const chatTypingEl = document.getElementById("chatTyping");
const chatFormEl = document.getElementById("chatForm");
const chatInputEl = document.getElementById("chatInput");
const messageInboxEl = document.getElementById("messageInbox");
const chatBackBtnEl = document.getElementById("chatBackBtn");
const chatProfileBtnEl = document.getElementById("chatProfileBtn");
const themeToggleEl = document.getElementById("themeToggle");
const themeStudioEl = document.querySelector(".theme-studio");
const themeSwitchesEl = document.getElementById("themeSwitches");
const newThreadBtnEl = document.getElementById("newThreadBtn");
const newThreadFormEl = document.getElementById("newThreadForm");
const cancelThreadBtnEl = document.getElementById("cancelThreadBtn");
const threadUserInputEl = document.getElementById("threadUserInput");
const threadStatusInputEl = document.getElementById("threadStatusInput");
const threadMessageInputEl = document.getElementById("threadMessageInput");
const contactsGridEl = document.getElementById("contactsGrid");
const contactSearchInputEl = document.getElementById("contactSearchInput");
const contactSearchClearEl = document.getElementById("contactSearchClear");
const messageNavBtnEl = document.getElementById("messageNavBtn");

const profileNavBtnEl = document.getElementById("profileNavBtn");
const editProfileBtnEl = document.getElementById("editProfileBtn");
const profileEditorEl = document.getElementById("profileEditor");
const myEptProfileBtnEl = document.getElementById("myEptProfileBtn");
const profileFormEl = document.getElementById("profileForm");
const profilePreviewEl = document.getElementById("profilePreview");
const profileImageInputEl = document.getElementById("profileImageInput");
const profileNameInputEl = document.getElementById("profileNameInput");
const profileHandleInputEl = document.getElementById("profileHandleInput");
const profileEmailInputEl = document.getElementById("profileEmailInput");
const profileLocationInputEl = document.getElementById("profileLocationInput");
const profileBioInputEl = document.getElementById("profileBioInput");
const profileSavedMsgEl = document.getElementById("profileSavedMsg");
const homeProfileImageEl = document.getElementById("homeProfileImage");
const homeProfileHandleEl = document.getElementById("homeProfileHandle");
const homeProfileNameEl = document.getElementById("homeProfileName");
const homeProfileBioEl = document.getElementById("homeProfileBio");
const contactProfileModalEl = document.getElementById("contactProfileModal");
const profileModalCloseEl = document.getElementById("profileModalClose");
const profileModalAvatarEl = document.getElementById("profileModalAvatar");
const profileModalNameEl = document.getElementById("profileModalName");
const profileModalHandleEl = document.getElementById("profileModalHandle");
const profileModalMetaEl = document.getElementById("profileModalMeta");
const profileModalBioEl = document.getElementById("profileModalBio");
const profileModalPostsEl = document.getElementById("profileModalPosts");
const profileModalFollowersEl = document.getElementById("profileModalFollowers");
const profileModalFollowingEl = document.getElementById("profileModalFollowing");
const profileModalLikesEl = document.getElementById("profileModalLikes");
const profileModalTagsEl = document.getElementById("profileModalTags");
const profileModalFollowBtnEl = document.getElementById("profileModalFollowBtn");
const profileModalUnfollowBtnEl = document.getElementById("profileModalUnfollowBtn");
const profileModalDoneEl = document.getElementById("profileModalDone");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function parseLikeCount(value) {
  const numeric = Number(String(value || "").replace(/[^\d]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
}

function formatLikeCount(value) {
  const safeValue = Number.isFinite(Number(value)) ? Number(value) : 0;
  return safeValue.toLocaleString();
}

function buildShareUrl(contentType, contentId) {
  const safeType = String(contentType || "").trim().toLowerCase();
  const safeId = String(contentId || "").trim();
  if (!safeType || !safeId) {
    return "";
  }

  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("share", safeType);
  url.searchParams.set("id", safeId);
  return url.toString();
}

async function copyTextToClipboard(value) {
  const text = String(value || "");
  if (!text) {
    return false;
  }

  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  }

  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    return copied;
  } catch {
    return false;
  }
}

async function shareContentLink(contentType, contentId, label) {
  const shareUrl = buildShareUrl(contentType, contentId);
  if (!shareUrl) {
    return;
  }

  const safeLabel = String(label || "content");
  if (navigator.share) {
    try {
      await navigator.share({
        title: "Epiton",
        text: `Check out this ${safeLabel}`,
        url: shareUrl
      });
      createNotification(`Shared link for ${safeLabel}`, "share");
      return;
    } catch {
      // fall through to copy link
    }
  }

  const copied = await copyTextToClipboard(shareUrl);
  if (copied) {
    createNotification(`Share link copied for ${safeLabel}`, "share");
    return;
  }

  window.prompt("Copy share link:", shareUrl);
  createNotification(`Share link ready for ${safeLabel}`, "share");
}

function focusSharedContentFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const shareType = String(params.get("share") || "").trim().toLowerCase();
  const shareId = String(params.get("id") || "").trim();
  if (!shareType || !shareId) {
    return;
  }

  let targetCard = null;
  if (shareType === "post" && postsEl) {
    targetCard = postsEl.querySelector(`[data-post-index="${shareId}"]`);
  } else if (shareType === "reel" && reelsFeedEl) {
    targetCard = reelsFeedEl.querySelector(`[data-reel-id="${shareId}"]`);
  }

  if (!targetCard) {
    return;
  }

  targetCard.classList.add("is-shared-target");
  targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => {
    targetCard.classList.remove("is-shared-target");
  }, 2200);
}

function formatNotificationTime(isoString) {
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) {
    return "Just now";
  }
  return date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
}

function loadNotifications() {
  try {
    const saved = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || "[]");
    if (!Array.isArray(saved)) {
      notifications = [];
      return;
    }
    notifications = saved
      .filter((item) => item && typeof item === "object")
      .map((item, index) => ({
        id: String(item.id || `n_${index}_${Date.now()}`),
        type: String(item.type || "info"),
        message: String(item.message || "").trim(),
        createdAt: String(item.createdAt || new Date().toISOString())
      }))
      .filter((item) => item.message.length > 0)
      .slice(0, 120);
  } catch {
    notifications = [];
  }
}

function saveNotifications() {
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
}

function renderNotifications() {
  if (!notificationsListEl) {
    return;
  }

  const notifIconMap = {
    like:    { icon: "❤️", cls: "notif-icon-like" },
    share:   { icon: "↗️", cls: "notif-icon-share" },
    upload:  { icon: "📤", cls: "notif-icon-upload" },
    follow:  { icon: "👤", cls: "notif-icon-follow" },
    success: { icon: "✅", cls: "notif-icon-upload" },
    error:   { icon: "❌", cls: "notif-icon-info" },
    info:    { icon: "ℹ️", cls: "notif-icon-info" }
  };

  const emptyEl = document.getElementById("notificationsEmpty");

  if (!notifications.length) {
    notificationsListEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "flex";
    updateNotifBadge();
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";

  notificationsListEl.innerHTML = notifications
    .map((item, idx) => {
      const map = notifIconMap[item.type] || notifIconMap.info;
      return `
        <article class="notification-item" data-notif-index="${idx}">
          <div class="notif-icon ${escapeHtml(map.cls)}">${map.icon}</div>
          <div class="notif-body">
            <p>${escapeHtml(item.message)}</p>
            <time>${formatNotificationTime(item.createdAt)}</time>
          </div>
          <div class="notif-unread-dot"></div>
        </article>
      `;
    })
    .join("");

  updateNotifBadge();
}

function updateNotifBadge() {
  const badgeEl = document.getElementById("notifNavBadge");
  if (!badgeEl) return;
  const count = notifications.length;
  if (count > 0) {
    badgeEl.textContent = count > 99 ? "99+" : String(count);
    badgeEl.style.display = "inline-flex";
  } else {
    badgeEl.style.display = "none";
  }
}

function showToast(message, type = "info") {
  if (!toastContainerEl) {
    return;
  }

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = String(message || "").trim();
  if (!toast.textContent) {
    return;
  }

  toastContainerEl.appendChild(toast);
  window.setTimeout(() => {
    toast.classList.add("fade-out");
  }, 2800);
  window.setTimeout(() => {
    toast.remove();
  }, 3500);
}

function createNotification(message, type = "info") {
  const safeMessage = String(message || "").trim();
  if (!safeMessage) {
    return;
  }

  notifications.unshift({
    id: `n_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
    type: String(type || "info"),
    message: safeMessage,
    createdAt: new Date().toISOString()
  });
  notifications = notifications.slice(0, 120);
  saveNotifications();
  renderNotifications();
  showToast(safeMessage, type);
}

function loadSentFriendRequests() {
  try {
    const saved = JSON.parse(localStorage.getItem(FRIEND_REQUESTS_KEY) || "[]");
    if (!Array.isArray(saved)) {
      sentFriendRequests = new Set();
      return;
    }
    sentFriendRequests = new Set(saved.map((user) => normalizeUserKey(user)).filter(Boolean));
  } catch {
    sentFriendRequests = new Set();
  }
}

function saveSentFriendRequests() {
  localStorage.setItem(FRIEND_REQUESTS_KEY, JSON.stringify([...sentFriendRequests]));
}

function isSupportedReelFrameMode(mode) {
  return ["portrait", "fit-screen", "ratio-2-1", "square", "original"].includes(String(mode || ""));
}

function frameModeLabel(mode) {
  const map = {
    portrait: "Portrait 9:16",
    "fit-screen": "Fit Screen 16:9",
    "ratio-2-1": "Wide 2:1",
    square: "Square 1:1",
    original: "Original"
  };
  return map[String(mode || "")] || "Portrait 9:16";
}

function applyReelFrameMode(mode, options = {}) {
  const safeMode = isSupportedReelFrameMode(mode) ? mode : "portrait";
  const { persist = false, notify = false } = options;
  reelFrameMode = safeMode;

  if (reelsPageEl) {
    reelsPageEl.setAttribute("data-reel-frame", safeMode);
  }

  if (reelFrameModeSelectEl) {
    reelFrameModeSelectEl.value = safeMode;
  }

  if (persist) {
    localStorage.setItem(REEL_FRAME_MODE_KEY, safeMode);
  }

  if (notify) {
    createNotification(`Reel frame switched to ${frameModeLabel(safeMode)}`, "info");
  }
}

function loadReelFrameMode() {
  const saved = localStorage.getItem(REEL_FRAME_MODE_KEY);
  applyReelFrameMode(saved, { persist: false, notify: false });
}

function requestFullscreenForElement(element) {
  if (!element) {
    return false;
  }

  const requestFn =
    element.requestFullscreen ||
    element.webkitRequestFullscreen ||
    element.msRequestFullscreen ||
    element.mozRequestFullScreen;

  if (typeof requestFn !== "function") {
    return false;
  }

  try {
    requestFn.call(element);
    return true;
  } catch {
    return false;
  }
}

function openReelFullscreen(reelId) {
  const safeId = String(reelId || "").trim();
  if (!safeId || !reelsFeedEl) {
    return;
  }

  const reelCard = [...reelsFeedEl.querySelectorAll("[data-reel-id]")].find(
    (card) => String(card.dataset.reelId || "") === safeId
  );
  if (!reelCard) {
    return;
  }

  const videoEl = reelCard.querySelector(".reel-video");
  if (!videoEl) {
    return;
  }

  const opened = requestFullscreenForElement(videoEl) || requestFullscreenForElement(reelCard);
  if (!opened) {
    createNotification("Fullscreen is not supported on this browser", "info");
    return;
  }

  videoEl.play().catch(() => {});
  const reel = reels.find((item) => item.id === safeId);
  if (reel) {
    createNotification(`Opened ${reel.user}'s reel in fullscreen`, "info");
  }
}

function initializePostLikeBaseCounts() {
  posts.forEach((post) => {
    if (!Number.isFinite(post.baseLikes)) {
      post.baseLikes = parseLikeCount(post.likes);
    }
  });
}

function createSafeReel(source, fallbackId) {
  const safeSource = source && typeof source === "object" ? source : {};
  return {
    id: String(safeSource.id || fallbackId),
    user: String(safeSource.user || "your_handle"),
    avatar: String(
      safeSource.avatar ||
        profileData.image ||
        "https://randomuser.me/api/portraits/men/46.jpg"
    ),
    video: String(safeSource.video || ""),
    caption: String(safeSource.caption || "Fresh reel upload"),
    likes: Math.max(0, Number.isFinite(Number(safeSource.likes)) ? Number(safeSource.likes) : 0)
  };
}

function loadReels() {
  // Reels are now stored in IndexedDB via window._reelDB
  // Start with default reels; user-uploaded ones are loaded async in initReelsFromDB()
  reels = defaultReels.map((reel, index) => createSafeReel(reel, `default_reel_${index + 1}`));
}

function saveReels() {
  // No-op: uploaded reels are saved directly to IndexedDB in handleReelUpload
  return true;
}

function loadLikedPosts() {
  try {
    const saved = JSON.parse(localStorage.getItem(POST_LIKES_KEY) || "[]");
    if (!Array.isArray(saved)) {
      likedPosts = new Set();
      return;
    }
    likedPosts = new Set(saved.map((index) => Number(index)).filter((index) => Number.isInteger(index)));
  } catch {
    likedPosts = new Set();
  }
}

function saveLikedPosts() {
  localStorage.setItem(POST_LIKES_KEY, JSON.stringify([...likedPosts]));
}

function loadLikedReels() {
  try {
    const saved = JSON.parse(localStorage.getItem(REEL_LIKES_KEY) || "[]");
    if (!Array.isArray(saved)) {
      likedReels = new Set();
      return;
    }
    likedReels = new Set(saved.map((value) => String(value)).filter(Boolean));
  } catch {
    likedReels = new Set();
  }
}

function saveLikedReels() {
  localStorage.setItem(REEL_LIKES_KEY, JSON.stringify([...likedReels]));
}

function normalizeCommentEntry(entry) {
  if (typeof entry === "string") {
    return { user: "you", text: entry.trim() };
  }
  if (!entry || typeof entry !== "object") {
    return null;
  }

  const user = String(entry.user || "you").trim();
  const text = String(entry.text || "").trim();
  if (!text) {
    return null;
  }

  return { user: user || "you", text: text.slice(0, 220) };
}

function normalizeCommentMap(source) {
  const safe = source && typeof source === "object" ? source : {};
  const normalized = {};

  Object.entries(safe).forEach(([key, value]) => {
    if (!Array.isArray(value)) {
      return;
    }
    const comments = value
      .map((entry) => normalizeCommentEntry(entry))
      .filter(Boolean)
      .slice(-40);
    if (comments.length > 0) {
      normalized[String(key)] = comments;
    }
  });

  return normalized;
}

function loadPostComments() {
  try {
    const saved = JSON.parse(localStorage.getItem(POST_COMMENTS_KEY) || "{}");
    postCommentsByIndex = normalizeCommentMap(saved);
  } catch {
    postCommentsByIndex = {};
  }
}

function savePostComments() {
  localStorage.setItem(POST_COMMENTS_KEY, JSON.stringify(postCommentsByIndex));
}

function loadReelComments() {
  try {
    const saved = JSON.parse(localStorage.getItem(REEL_COMMENTS_KEY) || "{}");
    reelCommentsById = normalizeCommentMap(saved);
  } catch {
    reelCommentsById = {};
  }
}

function saveReelComments() {
  localStorage.setItem(REEL_COMMENTS_KEY, JSON.stringify(reelCommentsById));
}

function commentListHtml(comments) {
  const safeComments = Array.isArray(comments) ? comments : [];
  if (safeComments.length === 0) {
    return '<p class="comment-empty">No comments yet.</p>';
  }

  return safeComments
    .slice(-6)
    .map((comment) => `<p class="comment-item"><b>${escapeHtml(comment.user)}</b> ${escapeHtml(comment.text)}</p>`)
    .join("");
}

function addPostComment(postIndex, text) {
  const safeText = String(text || "").trim();
  if (!safeText) {
    return false;
  }
  const key = String(postIndex);
  const nextComment = {
    user: profileData.handle || "you",
    text: safeText.slice(0, 220)
  };
  const current = Array.isArray(postCommentsByIndex[key]) ? postCommentsByIndex[key] : [];
  postCommentsByIndex[key] = [...current, nextComment].slice(-40);
  savePostComments();
  return true;
}

function addReelComment(reelId, text) {
  const safeText = String(text || "").trim();
  if (!safeText) {
    return false;
  }
  const key = String(reelId || "").trim();
  if (!key) {
    return false;
  }
  const nextComment = {
    user: profileData.handle || "you",
    text: safeText.slice(0, 220)
  };
  const current = Array.isArray(reelCommentsById[key]) ? reelCommentsById[key] : [];
  reelCommentsById[key] = [...current, nextComment].slice(-40);
  saveReelComments();
  return true;
}

function pauseAllReelVideos(exceptVideo = null) {
  if (!reelsFeedEl) {
    return;
  }

  reelsFeedEl.querySelectorAll(".reel-video").forEach((video) => {
    if (video === exceptVideo) {
      return;
    }
    video.pause();
  });
}

function setupReelAutoplay() {
  if (!reelsFeedEl) {
    return;
  }

  if (reelObserver) {
    reelObserver.disconnect();
  }

  const videos = [...reelsFeedEl.querySelectorAll(".reel-video")];
  if (videos.length === 0) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    const firstVideo = videos[0];
    if (firstVideo) {
      firstVideo.muted = true;
      firstVideo.play().catch(() => {});
    }
    return;
  }

  reelObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting && entry.intersectionRatio >= 0.65) {
          pauseAllReelVideos(video);
          video.muted = true;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: [0.65]
    }
  );

  videos.forEach((video) => {
    video.muted = true;
    reelObserver.observe(video);
  });
}

function setReelUploadStatus(message, isError = false) {
  if (!reelUploadStatusEl) {
    return;
  }

  reelUploadStatusEl.textContent = message;
  reelUploadStatusEl.classList.toggle("is-error", isError);
}

function fileNameToCaption(fileName) {
  const safeName = String(fileName || "new reel");
  return safeName.replace(/\.[^/.]+$/, "").replace(/[_-]+/g, " ").trim() || "new reel";
}

function toSafeDownloadName(value) {
  const safe = String(value || "reel")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return safe || "reel";
}

async function downloadReelById(reelId) {
  const safeId = String(reelId || "").trim();
  if (!safeId) {
    return;
  }

  const reel = reels.find((item) => item.id === safeId);
  if (!reel || !reel.video) {
    setReelUploadStatus("Reel not found for download.", true);
    return;
  }

  const fileBase = toSafeDownloadName(`${reel.user}-${reel.caption || "reel"}`);
  const fileName = `${fileBase}.mp4`;

  const triggerDownload = (url) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    link.rel = "noopener";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  try {
    if (reel.video.startsWith("data:")) {
      triggerDownload(reel.video);
      setReelUploadStatus("Reel download started.");
      return;
    }

    const response = await fetch(reel.video);
    if (!response.ok) {
      throw new Error("Fetch failed");
    }

    const videoBlob = await response.blob();
    const blobUrl = URL.createObjectURL(videoBlob);
    triggerDownload(blobUrl);
    window.setTimeout(() => URL.revokeObjectURL(blobUrl), 1800);
    setReelUploadStatus("Reel download started.");
  } catch {
    const fallbackLink = document.createElement("a");
    fallbackLink.href = reel.video;
    fallbackLink.target = "_blank";
    fallbackLink.rel = "noopener";
    document.body.appendChild(fallbackLink);
    fallbackLink.click();
    fallbackLink.remove();
    setReelUploadStatus("Opened reel source in a new tab. Use browser save if auto-download is blocked.", true);
  }
}

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("Failed to read video file"));
    reader.readAsDataURL(file);
  });
}

function toDisplayName(handle) {
  return String(handle || "user")
    .replace(/[._-]+/g, " ")
    .split(" ")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function hashString(value) {
  return String(value)
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function seededPick(list, seed) {
  if (!Array.isArray(list) || list.length === 0) {
    return "";
  }
  return list[seed % list.length];
}

function createStandardProfile(user, avatar) {
  const safeUser = String(user || "new.user");
  const preset = standardProfilePresets[safeUser] || {};
  const seed = hashString(safeUser);
  const postsCount = 12 + (seed % 220);
  const followersCount = 120 + ((seed * 43) % 9800);
  const followingCount = 80 + ((seed * 17) % 1900);
  const likesCount = 500 + ((seed * 71) % 48000);
  const firstTag = seededPick(profileTagPool, seed);
  const secondTag = seededPick(profileTagPool, seed + 3);
  const thirdTag = seededPick(profileTagPool, seed + 6);

  return {
    user: safeUser,
    name: preset.name || toDisplayName(safeUser),
    role: preset.role || seededPick(profileRolePool, seed),
    location: preset.location || seededPick(profileLocationPool, seed),
    bio:
      preset.bio ||
      `${toDisplayName(safeUser)} shares daily updates, creative moments, and friendly conversations.`,
    posts: postsCount,
    followers: followersCount,
    following: followingCount,
    likes: likesCount,
    tags: [firstTag, secondTag, thirdTag].filter(Boolean),
    avatar: avatar || `https://randomuser.me/api/portraits/men/${(safeUser.charCodeAt(0) % 50) + 1}.jpg`
  };
}

function registerStandardProfile(user, avatar) {
  const safeUser = String(user || "").trim();
  if (!safeUser) {
    return;
  }

  if (!standardProfilesByUser[safeUser]) {
    standardProfilesByUser[safeUser] = createStandardProfile(safeUser, avatar);
    return;
  }

  if (avatar && !standardProfilesByUser[safeUser].avatar.includes("?u=")) {
    return;
  }

  if (avatar) {
    standardProfilesByUser[safeUser].avatar = avatar;
  }
}

function getStandardProfile(user) {
  const safeUser = String(user || "").trim();
  if (!safeUser) {
    return null;
  }
  if (!standardProfilesByUser[safeUser]) {
    registerStandardProfile(safeUser);
  }
  return standardProfilesByUser[safeUser] || null;
}

function initializeStandardProfiles() {
  stories.forEach((story) => registerStandardProfile(story.name, story.avatar));
  posts.forEach((post) => registerStandardProfile(post.user, post.avatar));
  reels.forEach((reel) => registerStandardProfile(reel.user, reel.avatar));
  suggested.forEach((item) => registerStandardProfile(item.user, item.avatar));
  contactDirectory.forEach((contact) => registerStandardProfile(contact.user, contact.avatar));
  conversations.forEach((conversation) => registerStandardProfile(conversation.user, conversation.avatar));
}

function renderProfileTags(tags) {
  if (!profileModalTagsEl) {
    return;
  }

  const safeTags = Array.isArray(tags) ? tags : [];
  profileModalTagsEl.innerHTML = "";
  safeTags.forEach((tag) => {
    profileModalTagsEl.insertAdjacentHTML("beforeend", `<span>${escapeHtml(tag)}</span>`);
  });
}

function normalizeUserKey(user) {
  return String(user || "")
    .trim()
    .toLowerCase();
}

function loadFollowedUsers() {
  try {
    const saved = JSON.parse(localStorage.getItem(FOLLOWED_USERS_KEY) || "[]");
    if (!Array.isArray(saved)) {
      followedUsers = new Set();
      return;
    }
    followedUsers = new Set(saved.map((user) => normalizeUserKey(user)).filter(Boolean));
  } catch {
    followedUsers = new Set();
  }
}

function saveFollowedUsers() {
  localStorage.setItem(FOLLOWED_USERS_KEY, JSON.stringify([...followedUsers]));
}

function isFollowingUser(user) {
  const safeUser = normalizeUserKey(user);
  return safeUser ? followedUsers.has(safeUser) : false;
}

function syncFollowButtonState(button, user) {
  if (!button) {
    return;
  }

  const isFollowing = isFollowingUser(user);
  button.textContent = isFollowing ? "Following" : "Follow";
  button.classList.toggle("is-following", isFollowing);
  button.setAttribute("aria-pressed", isFollowing ? "true" : "false");
}

function syncFollowButtons(user) {
  const safeUser = normalizeUserKey(user);
  const followButtons = document.querySelectorAll("[data-follow-user]");

  followButtons.forEach((button) => {
    const buttonUser = button.dataset.followUser;
    if (!buttonUser) {
      return;
    }
    if (safeUser && normalizeUserKey(buttonUser) !== safeUser) {
      return;
    }
    syncFollowButtonState(button, buttonUser);
  });
}

function updateProfileModalFollowButton() {
  if (!profileModalFollowBtnEl || !profileModalUnfollowBtnEl) {
    return;
  }

  if (!activeProfileUser) {
    profileModalFollowBtnEl.disabled = true;
    profileModalUnfollowBtnEl.disabled = true;
    return;
  }

  const isFollowing = isFollowingUser(activeProfileUser);
  profileModalFollowBtnEl.disabled = isFollowing;
  profileModalUnfollowBtnEl.disabled = !isFollowing;
  profileModalFollowBtnEl.setAttribute(
    "aria-label",
    `Follow @${activeProfileUser}`
  );
  profileModalUnfollowBtnEl.setAttribute(
    "aria-label",
    `Unfollow @${activeProfileUser}`
  );

  const activeProfile = getStandardProfile(activeProfileUser);
  if (activeProfile && profileModalFollowersEl) {
    const followerCount = Number(activeProfile.followers) + (isFollowing ? 1 : 0);
    profileModalFollowersEl.textContent = followerCount.toLocaleString();
  }
}

function toggleFollowUser(user) {
  const safeUser = normalizeUserKey(user);
  if (!safeUser) {
    return false;
  }

  const shouldFollow = !followedUsers.has(safeUser);
  return setFollowState(safeUser, shouldFollow);
}

function setFollowState(user, shouldFollow) {
  const safeUser = normalizeUserKey(user);
  if (!safeUser) {
    return false;
  }

  const wasFollowing = followedUsers.has(safeUser);
  if (wasFollowing === Boolean(shouldFollow)) {
    return wasFollowing;
  }

  if (shouldFollow) {
    followedUsers.add(safeUser);
  } else {
    followedUsers.delete(safeUser);
  }

  saveFollowedUsers();
  syncFollowButtons(safeUser);

  if (normalizeUserKey(activeProfileUser) === safeUser) {
    updateProfileModalFollowButton();
  }

  createNotification(
    shouldFollow
      ? `You followed @${safeUser}`
      : `You unfollowed @${safeUser}`,
    shouldFollow ? "follow" : "info"
  );

  return followedUsers.has(safeUser);
}

function followUser(user) {
  return setFollowState(user, true);
}

function unfollowUser(user) {
  return setFollowState(user, false);
}

function openStandardProfile(user) {
  if (!contactProfileModalEl) {
    return;
  }
  const profile = getStandardProfile(user);
  if (!profile) {
    return;
  }

  profileModalAvatarEl.src = profile.avatar;
  profileModalAvatarEl.alt = `${profile.user} avatar`;
  profileModalNameEl.textContent = profile.name;
  profileModalHandleEl.textContent = `@${profile.user}`;
  profileModalMetaEl.textContent = `${profile.role} - ${profile.location}`;
  profileModalBioEl.textContent = profile.bio;
  profileModalPostsEl.textContent = profile.posts.toLocaleString();
  profileModalFollowersEl.textContent = profile.followers.toLocaleString();
  profileModalFollowingEl.textContent = profile.following.toLocaleString();
  if (profileModalLikesEl) profileModalLikesEl.textContent = profile.likes.toLocaleString();
  renderProfileTags(profile.tags);
  activeProfileUser = profile.user;
  updateProfileModalFollowButton();

  contactProfileModalEl.hidden = false;
  contactProfileModalEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeStandardProfile() {
  activeProfileUser = "";
  if (contactProfileModalEl) {
    contactProfileModalEl.hidden = true;
    contactProfileModalEl.setAttribute("aria-hidden", "true");
  }
  document.body.classList.remove("modal-open");
}

function isSupportedTheme(theme) {
  return THEME_MODES.some((mode) => mode.id === theme);
}

function getThemeLabel(theme) {
  const matched = THEME_MODES.find((mode) => mode.id === theme);
  return matched ? matched.label : "Light";
}

function getThemeHint(theme) {
  const matched = THEME_MODES.find((mode) => mode.id === theme);
  return matched ? matched.hint : "Balanced daylight view";
}

function getNextTheme(currentTheme) {
  const currentIndex = THEME_MODES.findIndex((mode) => mode.id === currentTheme);
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % THEME_MODES.length : 0;
  return THEME_MODES[nextIndex].id;
}

function renderThemeSwitches(activeTheme) {
  if (!themeSwitchesEl) {
    return;
  }

  themeSwitchesEl.innerHTML = "";
  THEME_MODES.forEach((mode) => {
    const isActive = mode.id === activeTheme;
    themeSwitchesEl.insertAdjacentHTML(
      "beforeend",
      `
        <label class="theme-switch-row ${isActive ? "is-active" : ""}" title="${mode.hint}">
          <span class="theme-switch-copy">
            <strong>${mode.label}</strong>
            <small>${mode.hint}</small>
          </span>
          <span class="toggle-switch">
            <input
              type="radio"
              name="themeMode"
              class="theme-switch-input"
              value="${mode.id}"
              ${isActive ? "checked" : ""}
            />
            <span class="toggle-slider"></span>
          </span>
        </label>
      `
    );
  });
}

function setThemeStudioOpen(isOpen) {
  if (!themeStudioEl) {
    return;
  }
  themeStudioEl.classList.toggle("is-open", isOpen);
  themeStudioEl.setAttribute("aria-hidden", isOpen ? "false" : "true");
  themeToggleEl.setAttribute("aria-expanded", isOpen ? "true" : "false");
}

function applyTheme(theme) {
  const safeTheme = isSupportedTheme(theme) ? theme : "light";
  document.documentElement.setAttribute("data-theme", safeTheme);
  const label = getThemeLabel(safeTheme);
  const hint = getThemeHint(safeTheme);
  themeToggleEl.textContent = "EPT";
  themeToggleEl.setAttribute("aria-label", `Toggle EPT theme settings. Current theme: ${label}`);
  themeToggleEl.setAttribute("title", `EPT Themes - Current: ${label}. ${hint}`);
  renderThemeSwitches(safeTheme);
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const preferredDark =
    window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initialTheme = isSupportedTheme(savedTheme) ? savedTheme : preferredDark ? "dark" : "light";
  applyTheme(initialTheme);
  setThemeStudioOpen(false);
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (!saved || typeof saved !== "object") {
      return;
    }
    profileData = {
      ...defaultProfile,
      ...saved,
      name: String(saved.name || defaultProfile.name),
      handle: String(saved.handle || defaultProfile.handle),
      email: String(saved.email || defaultProfile.email),
      location: String(saved.location || defaultProfile.location),
      bio: String(saved.bio || defaultProfile.bio),
      image: String(saved.image || defaultProfile.image)
    };
  } catch {
    profileData = { ...defaultProfile };
  }
  window.profileData = profileData;
}

function saveProfile() {
  localStorage.setItem(PROFILE_KEY, JSON.stringify(profileData));
  window.profileData = profileData;
  // update story bubble avatar live
  updateMyStoryBubbleAvatar(profileData.image);
}

function loadConversations() {
  try {
    const saved = JSON.parse(localStorage.getItem(CONVERSATIONS_KEY) || "null");
    if (!Array.isArray(saved) || saved.length === 0) {
      return;
    }
    conversations = saved.map((item, index) => createSafeConversation(item, `c_saved_${index + 1}`));
  } catch {
    conversations = [...defaultConversations];
  }

  if (conversations.length === 0) {
    conversations = defaultConversations.map((item, index) =>
      createSafeConversation(item, `c_default_${index + 1}`)
    );
  }
}

function saveConversations() {
  localStorage.setItem(CONVERSATIONS_KEY, JSON.stringify(conversations));
}

function openThreadComposer() {
  newThreadFormEl.hidden = false;
  threadUserInputEl.focus();
}

function closeThreadComposer() {
  newThreadFormEl.hidden = true;
  newThreadFormEl.reset();
}

function isMobileViewport() {
  return window.innerWidth <= 780;
}

function setMobileChatView(showChat) {
  if (!isMobileViewport()) {
    messageInboxEl.classList.remove("show-chat");
    return;
  }
  messageInboxEl.classList.toggle("show-chat", showChat);
}

function syncResponsiveInbox() {
  if (!isMobileViewport()) {
    messageInboxEl.classList.remove("show-chat");
  }
}

function renderProfileCard() {
  homeProfileImageEl.src = profileData.image;
  homeProfileHandleEl.textContent = profileData.handle;
  homeProfileNameEl.textContent = profileData.name;
  homeProfileBioEl.textContent = profileData.bio || "Add your bio from Profile.";
}

function fillProfileForm() {
  profilePreviewEl.src = profileData.image;
  profileNameInputEl.value = profileData.name;
  profileHandleInputEl.value = profileData.handle;
  profileEmailInputEl.value = profileData.email;
  profileLocationInputEl.value = profileData.location;
  profileBioInputEl.value = profileData.bio;
}

function getActiveConversation() {
  return conversations.find((conversation) => conversation.id === activeConversationId);
}

function renderUnreadCount() {
  const totalUnread = conversations.reduce((sum, conversation) => sum + conversation.unread, 0);
  unreadCountEl.textContent = `${totalUnread} unread`;
}

function renderConversationList() {
  conversationListEl.innerHTML = "";

  if (conversations.length === 0) {
    conversationListEl.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:var(--text-secondary);">
        <div style="font-size:36px;margin-bottom:10px;">💬</div>
        <p style="font-weight:700;margin:0 0 6px;">No messages yet</p>
        <small>Tap 👥 to find people and start chatting</small>
      </div>`;
    setMobileChatView(false);
    return;
  }

  conversations.forEach((conversation) => {
    const lastMessage = conversation.messages[conversation.messages.length - 1];
    const preview = lastMessage ? escapeHtml(lastMessage.text) : "No messages yet";
    const isActive = conversation.id === activeConversationId;

    conversationListEl.insertAdjacentHTML(
      "beforeend",
      `
        <button class="conversation-item ${isActive ? "is-active" : ""}" data-conversation-id="${
          conversation.id
        }" type="button">
          <div class="conversation-main">
            <img src="${conversation.avatar}" alt="${conversation.user}" />
            <div>
              <h4>${escapeHtml(conversation.user)}</h4>
              <p>${preview}</p>
            </div>
          </div>
          ${
            conversation.unread > 0
              ? `<span class="conversation-badge">${conversation.unread}</span>`
              : ""
          }
        </button>
      `
    );
  });
}

function openOrCreateConversationFromContact(contact) {
  const existingThread = conversations.find(
    (conversation) => conversation.user.toLowerCase() === contact.user.toLowerCase()
  );
  if (existingThread) {
    setActiveConversation(existingThread.id);
    return;
  }

  const newConversation = {
    id: `c_${Date.now()}`,
    user: contact.user,
    avatar: contact.avatar,
    status: contact.status || "Active now",
    unread: 0,
    messages: contact.firstMessage ? [{ from: "them", text: contact.firstMessage }] : []
  };

  conversations.unshift(newConversation);
  registerStandardProfile(newConversation.user, newConversation.avatar);
  activeConversationId = newConversation.id;
  saveConversations();
  renderConversationList();
  renderUnreadCount();
  renderChatPanel();
  setMobileChatView(true);
}

function getTypingCount(conversationId) {
  return typingStateByConversation.get(conversationId) || 0;
}

function beginTyping(conversationId) {
  typingStateByConversation.set(conversationId, getTypingCount(conversationId) + 1);
  renderTypingIndicator();
}

function endTyping(conversationId) {
  const nextCount = getTypingCount(conversationId) - 1;
  if (nextCount <= 0) {
    typingStateByConversation.delete(conversationId);
  } else {
    typingStateByConversation.set(conversationId, nextCount);
  }
  renderTypingIndicator();
}

function renderTypingIndicator() {
  if (!chatTypingEl) {
    return;
  }

  const activeConversation = getActiveConversation();
  if (!activeConversation || getTypingCount(activeConversation.id) === 0) {
    chatTypingEl.textContent = "";
    chatTypingEl.classList.remove("is-visible");
    return;
  }

  chatTypingEl.textContent = `${activeConversation.user} is typing...`;
  chatTypingEl.classList.add("is-visible");
}

const stopWords = new Set([
  "this",
  "that",
  "with",
  "have",
  "from",
  "your",
  "about",
  "just",
  "like",
  "really",
  "there",
  "what",
  "when",
  "where",
  "would",
  "could",
  "should",
  "them",
  "they",
  "been",
  "were",
  "will",
  "today",
  "tomorrow",
  "yesterday",
  "fine",
  "good",
  "okay"
]);

function chooseRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function normalizeMessage(message) {
  return String(message || "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");
}

function detectTone(normalizedMessage) {
  if (
    /\b(great|awesome|good|fine|nice|amazing|perfect|love|excited|happy|cool|win|better)\b/.test(
      normalizedMessage
    )
  ) {
    return "positive";
  }

  if (
    /\b(bad|tired|sad|stressed|angry|upset|worried|hard|difficult|terrible|annoyed|pain)\b/.test(
      normalizedMessage
    )
  ) {
    return "negative";
  }

  return "neutral";
}

function detectTopic(normalizedMessage) {
  if (/\b(work|office|job|boss|client|meeting|deadline)\b/.test(normalizedMessage)) {
    return "work";
  }
  if (/\b(school|class|exam|assignment|lecture|teacher|study)\b/.test(normalizedMessage)) {
    return "school";
  }
  if (/\b(code|coding|bug|build|deploy|server|api|app|project)\b/.test(normalizedMessage)) {
    return "tech";
  }
  if (/\b(travel|trip|flight|hotel|vacation|journey|beach)\b/.test(normalizedMessage)) {
    return "travel";
  }
  if (/\b(food|meal|lunch|dinner|breakfast|cook|recipe)\b/.test(normalizedMessage)) {
    return "food";
  }
  if (/\b(gym|workout|run|training|football|basketball|fitness)\b/.test(normalizedMessage)) {
    return "fitness";
  }
  if (/\b(relationship|partner|girlfriend|boyfriend|friend|family|mom|dad)\b/.test(normalizedMessage)) {
    return "relationship";
  }
  return "general";
}

function detectIntent(normalizedMessage) {
  if (/\b(thanks|thank you|thx|appreciate)\b/.test(normalizedMessage)) {
    return "thanks";
  }
  if (/\b(sorry|my bad|apologies)\b/.test(normalizedMessage)) {
    return "apology";
  }
  if (
    /\b(help|assist|stuck|confused|problem|issue|dont know|don't know|cant|can't)\b/.test(
      normalizedMessage
    )
  ) {
    return "help_request";
  }
  if (/\b(plan|planning|tomorrow|tonight|later|weekend|next week)\b/.test(normalizedMessage)) {
    return "planning";
  }
  if (
    /\?$/.test(normalizedMessage) ||
    /^(?:who|what|when|where|why|how|can|could|do|did|is|are|will|would|should)\b/.test(
      normalizedMessage
    )
  ) {
    return "question";
  }
  if (/^(?:ok|okay|kk|alright|cool|nice|sure|yep|yeah|nah|nope)[\s!,.?]*$/.test(normalizedMessage)) {
    return "short_ack";
  }
  return "statement";
}

function isStoryContextMessage(normalizedMessage) {
  const safeMessage = String(normalizedMessage || "");
  const hasStoryCue =
    /\b(?:then|after that|afterwards|later|eventually|suddenly|happened|story|i was|we were|today was|yesterday was|my day was)\b/.test(
      safeMessage
    );
  return hasStoryCue || safeMessage.split(" ").length >= 18;
}

function getContextAwareFollowUps(topic, normalizedMessage) {
  const topicPool = generativeReplyBank.followUpQuestions[topic] || generativeReplyBank.followUpQuestions.general;
  if (isStoryContextMessage(normalizedMessage)) {
    return topicPool;
  }

  const filteredPool = topicPool.filter(
    (entry) => normalizeMessage(entry) !== "what happened next?"
  );
  return filteredPool.length ? filteredPool : topicPool;
}

function extractKeyword(normalizedMessage) {
  const words = normalizedMessage.match(/[a-z]{4,}/g) || [];
  const filtered = words.filter((word) => !stopWords.has(word));
  return filtered[0] || "";
}

function getPreviousUserMessage(conversation) {
  if (!conversation || !Array.isArray(conversation.messages)) {
    return "";
  }
  const userMessages = conversation.messages.filter((message) => message.from === "you");
  if (userMessages.length < 2) {
    return "";
  }
  return userMessages[userMessages.length - 2].text || "";
}

function selectNonRepeatingReply(candidates, conversation) {
  if (!candidates.length) {
    return "I am here with you. Tell me more.";
  }
  const lastBotMessage =
    conversation && conversation.messages
      ? [...conversation.messages].reverse().find((message) => message.from === "them")
      : null;
  const lastBotNormalized = lastBotMessage ? normalizeMessage(lastBotMessage.text) : "";
  const filtered = candidates.filter((candidate) => normalizeMessage(candidate) !== lastBotNormalized);
  return chooseRandom(filtered.length ? filtered : candidates);
}

function buildGenerativeReply(userMessage, conversation) {
  const normalizedMessage = normalizeMessage(userMessage);
  const tone = detectTone(normalizedMessage);
  const topic = detectTopic(normalizedMessage);
  const intent = detectIntent(normalizedMessage);
  const previousUserMessage = getPreviousUserMessage(conversation);
  const previousKeyword = extractKeyword(normalizeMessage(previousUserMessage));
  const currentKeyword = extractKeyword(normalizedMessage);
  const topicSupportPool = generativeReplyBank.topicSupport[topic] || generativeReplyBank.topicSupport.general;
  const candidates = [];

  if (intent === "thanks") {
    candidates.push(...generativeReplyBank.directIntentReplies.thanks);
    if (topic === "tech") {
      candidates.push("You are welcome. If you want, send the next issue and we can solve it.");
    }
  } else if (intent === "apology") {
    candidates.push(...generativeReplyBank.directIntentReplies.apology);
  } else if (intent === "short_ack") {
    candidates.push(...generativeReplyBank.directIntentReplies.shortAck);
    candidates.push(chooseRandom(getContextAwareFollowUps("general", normalizedMessage)));
  } else if (intent === "help_request") {
    candidates.push(
      "No stress, we can work through it together. Tell me the exact part that is blocking you.",
      "I have your back. Give me a little detail and we will break it down step by step."
    );
    if (topic === "tech") {
      candidates.push("Send the exact error message and what you already tried, then we can fix it fast.");
    }
  } else if (intent === "planning") {
    candidates.push(
      "That sounds like a good plan. A small next step now can make tomorrow easier.",
      "I like that direction. Want to set one clear next action right now?"
    );
  } else if (intent === "question") {
    candidates.push(
      `${chooseRandom(generativeReplyBank.acknowledgements)} ${chooseRandom(
        generativeReplyBank.empathy[tone]
      )} ${chooseRandom(getContextAwareFollowUps(topic, normalizedMessage))}`,
      `${chooseRandom(generativeReplyBank.acknowledgements)} ${chooseRandom(
        topicSupportPool
      )} ${chooseRandom(getContextAwareFollowUps("general", normalizedMessage))}`
    );
  } else {
    candidates.push(
      `${chooseRandom(generativeReplyBank.acknowledgements)} ${chooseRandom(
        generativeReplyBank.empathy[tone]
      )} ${chooseRandom(topicSupportPool)}`,
      `${chooseRandom(generativeReplyBank.acknowledgements)} ${chooseRandom(topicSupportPool)}`
    );
  }

  if (previousKeyword && previousKeyword !== currentKeyword && Math.random() < 0.45) {
    candidates.push(`Also, about ${previousKeyword}, I hope that part keeps improving too.`);
  }

  if (currentKeyword && Math.random() < 0.35) {
    candidates.push(`About ${currentKeyword}, what part matters most to you right now?`);
  }

  let selected = selectNonRepeatingReply(candidates, conversation);
  if (conversation && Math.random() < 0.28) {
    selected = `${conversation.user.split(".")[0]}, ${selected}`;
  }
  return selected;
}

function maybeCreateFollowUp(userMessage, conversation, primaryReply) {
  const normalizedMessage = normalizeMessage(userMessage);

  // Greeting follow-up
  if (primaryReply === "Hey") {
    return "how are you doing";
  }
  const intent = detectIntent(normalizedMessage);
  const tone = detectTone(normalizedMessage);
  const topic = detectTopic(normalizedMessage);

  let chance = 0.3;
  if (intent === "help_request" || intent === "question") {
    chance = 0.62;
  } else if (tone === "negative") {
    chance = 0.5;
  } else if (intent === "planning") {
    chance = 0.55;
  }

  if (Math.random() > chance) {
    return "";
  }

  const pool = [];
  pool.push(...getContextAwareFollowUps(topic, normalizedMessage));

  if (intent === "help_request") {
    pool.push(
      "If you want, send one detail at a time and I will stay with you through it.",
      "Do not worry, we can solve this together."
    );
  }
  if (tone === "negative") {
    pool.push("You are not alone in this, we can figure out a better next step.");
  }

  const followUp = selectNonRepeatingReply(pool, conversation);
  return normalizeMessage(followUp) === normalizeMessage(primaryReply) ? "" : followUp;
}

function commitBotMessage(conversation, text) {
  conversation.messages.push({ from: "them", text });
  if (activeConversationId !== conversation.id) {
    conversation.unread += 1;
  }
  saveConversations();
  renderConversationList();
  renderUnreadCount();
  if (activeConversationId === conversation.id) {
    renderChatPanel();
  }
}

function pickAutoReply(userMessage, conversation) {
  const normalizedMessage = normalizeMessage(userMessage);

  if (/^your replies are (?:bad|shit|bad\/shit|shit\/bad)[\s!,.?]*$/.test(normalizedMessage)) {
    return "Thanks, but it better than your grandma's vocabulary";
  }
  if (/^i(?:'m|m)? fine[\s!,.?]*$/.test(normalizedMessage)) {
    return "Glad to hear that";
  }
  if (/^(?:so )?how was your day[\s!,.?]*$/.test(normalizedMessage)) {
    return "Fine thank you";
  }
  if (/^good morning[\s!,.?]*$/.test(normalizedMessage)) {
    return "Good morning to you too";
  }
  if (/^good afternoon[\s!,.?]*$/.test(normalizedMessage)) {
    return "Good afternoon too";
  }
  if (/^good evening[\s!,.?]*$/.test(normalizedMessage)) {
    return "Good evening too";
  }

  const asksForLocation =
    /\b(?:where are you|where are you located|where do you live|where are you from|your location|ur location|what is your location|what's your location)\b/.test(
      normalizedMessage
    );
  if (asksForLocation) {
    return chooseRandom(usLocations);
  }

  const soundsLikeDayUpdate =
    /\b(?:my|mine)\s+day\b/.test(normalizedMessage) ||
    /^(?:it|mine)\s+was\b/.test(normalizedMessage) ||
    /\btoday\s+was\b/.test(normalizedMessage);
  if (soundsLikeDayUpdate) {
    return "hope tommorow gets better";
  }

  const isGreeting =
    /^(?:hi+|hello+|hey+|heya|yo+|sup|what'?s up|whats up|howdy|how far|how are you)\b/.test(
      normalizedMessage
    );
  if (isGreeting) {
    return "Hey";
  }

  if (normalizedMessage.length < 4) {
    return chooseRandom(autoReplyTemplates);
  }

  return buildGenerativeReply(userMessage, conversation);
}

function getTypingDurationForText(text, baseDuration) {
  return baseDuration + Math.min(String(text || "").length * 18, 1300) + Math.floor(Math.random() * 280);
}

function scheduleFollowUpReply(conversationId, followUpText) {
  const delayBeforeTyping = 260 + Math.floor(Math.random() * 520);
  window.setTimeout(() => {
    const conversation = conversations.find((item) => item.id === conversationId);
    if (!conversation) {
      return;
    }

    beginTyping(conversation.id);
    const followUpTypingDuration = getTypingDurationForText(followUpText, 360);

    window.setTimeout(() => {
      const currentConversation = conversations.find((item) => item.id === conversationId);
      if (!currentConversation) {
        endTyping(conversationId);
        return;
      }

      commitBotMessage(currentConversation, followUpText);
      endTyping(currentConversation.id);
    }, followUpTypingDuration);
  }, delayBeforeTyping);
}

function scheduleAutoReply(conversationId, userMessage) {
  const startDelay = 140 + Math.floor(Math.random() * 360);
  window.setTimeout(() => {
    const conversation = conversations.find((item) => item.id === conversationId);
    if (!conversation) {
      return;
    }

    const selectedReply = pickAutoReply(userMessage, conversation);
    const typingDuration = getTypingDurationForText(selectedReply, 440);
    beginTyping(conversation.id);

    window.setTimeout(() => {
      const currentConversation = conversations.find((item) => item.id === conversationId);
      if (!currentConversation) {
        endTyping(conversationId);
        return;
      }

      commitBotMessage(currentConversation, selectedReply);
      endTyping(currentConversation.id);

      const followUpReply = maybeCreateFollowUp(userMessage, currentConversation, selectedReply);
      if (followUpReply) {
        scheduleFollowUpReply(currentConversation.id, followUpReply);
      }
    }, typingDuration);
  }, startDelay);
}

function _getAllAccountPosts() {
  // Gather posts from every registered account's localStorage key
  const allUserPosts = [];
  const seen = new Set();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("epiton_u_") || !key.endsWith("_posts")) continue;
      try {
        const userPosts = JSON.parse(localStorage.getItem(key) || "[]");
        userPosts.forEach((p) => {
          // Normalize index.html post format (handle/dataUrl) to script.js format (user/photo)
          const normalized = {
            id:        p.id,
            user:      p.handle || p.user || "Unknown",
            avatar:    p.avatar || "https://randomuser.me/api/portraits/men/85.jpg",
            photo:     p.dataUrl || p.photo || "",
            caption:   " " + (p.caption || ""),
            location:  p.location || "",
            likes:     p.likes || 0,
            baseLikes: p.likes || 0,
            _userUploaded: true
          };
          const uid = p.id || (normalized.user + "_" + normalized.photo);
          if (!seen.has(uid)) { seen.add(uid); allUserPosts.push(normalized); }
        });
      } catch { /* skip corrupt entry */ }
    }
  } catch { /* skip */ }
  return allUserPosts;
}

function renderPosts() {
  if (!postsEl) {
    return;
  }

  postsEl.innerHTML = "";

  // Merge default posts with all accounts' uploaded posts
  const userUploaded = _getAllAccountPosts();
  const merged = [...userUploaded, ...posts];

  merged.forEach((post, index) => {
    const baseLikes = Number.isFinite(post.baseLikes) ? post.baseLikes : parseLikeCount(post.likes);
    const isLiked = likedPosts.has(index);
    const totalLikes = baseLikes + (isLiked ? 1 : 0);
    const comments = postCommentsByIndex[String(index)] || [];

    postsEl.insertAdjacentHTML(
      "beforeend",
      `
        <article class="post" data-post-index="${index}">
          <header class="post-head">
            <button class="post-user post-user-btn" type="button" data-profile-user="${post.user}">
              <img src="${post.avatar}" alt="${post.user}" />
              <div>
                <h4>${post.user}</h4>
                <p>${post.location}</p>
              </div>
            </button>
            <span>...</span>
          </header>
          <img class="post-photo" src="${post.photo}" alt="Post by ${post.user}" />
          <div class="post-body">
            <div class="actions">
              <button
                class="action-btn post-like-btn ${isLiked ? "is-active" : ""}"
                type="button"
                data-post-index="${index}"
                aria-pressed="${isLiked ? "true" : "false"}"
              >
                ${isLiked ? "Liked" : "Like"}
              </button>
              <button class="action-btn" type="button">Comment</button>
              <button class="action-btn post-share-btn" type="button" data-post-index="${index}">Share</button>
            </div>
            <p class="likes">${formatLikeCount(totalLikes)} likes</p>
            <p class="caption"><b>${post.user}</b>${post.caption}</p>
            <div class="comments-block">
              <div class="comment-list">${commentListHtml(comments)}</div>
              <form class="comment-form post-comment-form" data-post-index="${index}">
                <input
                  type="text"
                  maxlength="220"
                  placeholder="Write a comment..."
                  aria-label="Write a comment"
                />
                <button type="submit">Post</button>
              </form>
            </div>
          </div>
        </article>
      `
    );
  });
}

function renderReels() {
  if (!reelsFeedEl) return;
  reelsFeedEl.innerHTML = "";

  if (!Array.isArray(reels) || reels.length === 0) {
    reelsFeedEl.innerHTML = '<p class="reels-empty">No reels yet. Upload videos above.</p>';
    return;
  }

  reels.forEach((reel) => {
    registerStandardProfile(reel.user, reel.avatar);
    const isLiked = likedReels.has(reel.id);
    const likeCount = Number(reel.likes || 0) + (isLiked ? 1 : 0);
    const comments = reelCommentsById[String(reel.id)] || [];

    const card = document.createElement("article");
    card.className = "reel-card";
    card.dataset.reelId = reel.id;
    card.innerHTML = `
      <video class="reel-video" src="${escapeHtml(reel.video)}" playsinline loop preload="metadata" muted></video>

      <!-- overlay info -->
      <div class="reel-overlay">
        <div class="reel-overlay-user">
          <button class="reel-avatar-btn" type="button" data-profile-user="${escapeHtml(reel.user)}">
            <img src="${escapeHtml(reel.avatar)}" alt="${escapeHtml(reel.user)}" class="reel-avatar-img" />
          </button>
          <div class="reel-user-info">
            <strong>${escapeHtml(reel.user)}</strong>
            <p>${escapeHtml(reel.caption || "")}</p>
          </div>
        </div>
      </div>

      <!-- sidebar actions -->
      <div class="reel-sidebar">
        <button class="reel-action-btn reel-like-btn ${isLiked ? "is-liked" : ""}" type="button"
          data-reel-id="${escapeHtml(reel.id)}" aria-pressed="${isLiked}" aria-label="Like">
          <span class="reel-action-icon">${isLiked ? "❤️" : "🤍"}</span>
          <span class="reel-action-count" data-like-count="${escapeHtml(reel.id)}">${likeCount.toLocaleString()}</span>
        </button>
        <button class="reel-action-btn reel-comment-toggle-btn" type="button"
          data-reel-id="${escapeHtml(reel.id)}" aria-label="Comment">
          <span class="reel-action-icon">💬</span>
          <span class="reel-action-count">${comments.length}</span>
        </button>
        <button class="reel-action-btn reel-share-btn" type="button"
          data-reel-id="${escapeHtml(reel.id)}" aria-label="Share">
          <span class="reel-action-icon">↗️</span>
        </button>
        <button class="reel-action-btn reel-dm-btn" type="button"
          data-reel-id="${escapeHtml(reel.id)}" aria-label="Send to DM">
          <span class="reel-action-icon">📨</span>
        </button>
        <button class="reel-action-btn reel-download-btn" type="button"
          data-reel-id="${escapeHtml(reel.id)}" data-reel-src="${escapeHtml(reel.video)}" aria-label="Download">
          <span class="reel-action-icon">⬇️</span>
        </button>
        <button class="reel-action-btn reel-mute-btn" type="button"
          data-reel-id="${escapeHtml(reel.id)}" aria-label="Mute">
          <span class="reel-action-icon">🔇</span>
        </button>
      </div>

      <!-- comment drawer -->
      <div class="reel-comment-drawer" hidden>
        <div class="reel-comment-list">${commentListHtml(comments)}</div>
        <form class="reel-comment-form" data-reel-id="${escapeHtml(reel.id)}">
          <input type="text" maxlength="220" placeholder="Add a comment…" aria-label="Add a comment" />
          <button type="submit">Post</button>
        </form>
      </div>
    `;
    reelsFeedEl.appendChild(card);
  });

  setupReelAutoplay();
}

// ── Reel DM picker ────────────────────────────────────────────────
function openReelDmPicker(reelId, reel) {
  // remove any existing picker
  const old = document.getElementById("reelDmPickerModal");
  if (old) old.remove();

  const modal = document.createElement("div");
  modal.id = "reelDmPickerModal";
  modal.className = "reel-dm-picker-overlay";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Send reel to DM");

  const contacts = conversations.map((c) => ({ user: c.user, avatar: c.avatar, id: c.id }));
  // also add contactDirectory entries not already in conversations
  contactDirectory.forEach((cd) => {
    if (!contacts.find((c) => c.user.toLowerCase() === cd.user.toLowerCase())) {
      contacts.push({ user: cd.user, avatar: cd.avatar, id: null });
    }
  });

  const listHtml = contacts.map((c) => `
    <button class="reel-dm-contact-item" type="button" data-conv-id="${escapeHtml(c.id || "")}" data-username="${escapeHtml(c.user)}" data-avatar="${escapeHtml(c.avatar)}">
      <img src="${escapeHtml(c.avatar)}" alt="${escapeHtml(c.user)}" />
      <span>${escapeHtml(c.user)}</span>
    </button>
  `).join("");

  modal.innerHTML = `
    <div class="reel-dm-picker-card">
      <div class="reel-dm-picker-header">
        <strong>Send to…</strong>
        <button class="icon-btn reel-dm-picker-close" aria-label="Close">✕</button>
      </div>
      <div class="reel-dm-picker-list">${listHtml}</div>
    </div>
  `;

  document.body.appendChild(modal);

  modal.querySelector(".reel-dm-picker-close").addEventListener("click", () => modal.remove());
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.remove(); });

  modal.querySelectorAll(".reel-dm-contact-item").forEach((btn) => {
    btn.addEventListener("click", () => {
      const username = btn.dataset.username;
      const avatar   = btn.dataset.avatar;
      let convId     = btn.dataset.convId;

      // find or create conversation
      let conv = conversations.find((c) => c.id === convId) ||
                 conversations.find((c) => c.user.toLowerCase() === username.toLowerCase());

      if (!conv) {
        conv = {
          id: `c_${Date.now()}`,
          user: username,
          avatar: avatar,
          status: "Active now",
          unread: 0,
          messages: []
        };
        conversations.unshift(conv);
      }

      const reelUrl  = reel ? reel.video : "";
      const caption  = reel ? reel.caption || "" : "";
      const msgText  = `🎬 Reel: ${caption || username + "'s reel"}\n${reelUrl}`;
      conv.messages.push({ from: "you", text: msgText });
      saveConversations();
      renderConversationList();

      // open inbox and jump to that conversation
      if (messageInboxEl) messageInboxEl.classList.add("open");
      setActiveConversation(conv.id);
      setMobileChatView(true);

      modal.remove();
      createNotification(`Reel sent to ${username}`, "share");
    });
  });
}

async function handleReelUpload(event) {
  event.preventDefault();
  if (!reelVideoInputEl) return;

  const files = [...(reelVideoInputEl.files || [])];
  if (files.length === 0) {
    setReelUploadStatus("Select at least one video first.", true);
    return;
  }

  const captionVal = document.getElementById("reelCaptionInput")
    ? document.getElementById("reelCaptionInput").value.trim()
    : "";

  const validFiles = files.filter(
    (f) => f.type.startsWith("video/") && f.size <= REEL_MAX_UPLOAD_BYTES
  );
  const skippedCount = files.length - validFiles.length;

  if (validFiles.length === 0) {
    setReelUploadStatus(`Videos too large. Max ${REEL_MAX_UPLOAD_MB}MB each.`, true);
    return;
  }

  setReelUploadStatus("Saving reels…");

  let saved = 0;
  validFiles.forEach((file, idx) => {
    const id = `reel_${Date.now()}_${idx}_${Math.random().toString(36).slice(2, 7)}`;
    const reelObj = {
      id,
      user:    profileData.handle || "your_handle",
      avatar:  profileData.image  || "https://randomuser.me/api/portraits/men/85.jpg",
      blob:    file,
      caption: captionVal || fileNameToCaption(file.name),
      likes:   0
    };
    window._reelDB.add(reelObj, function () {
      // Also save as base64 to localStorage so other accounts can see it
      readFileAsDataUrl(file).then((dataUrl) => {
        try {
          const session = typeof getSession === "function" ? getSession() : null;
          const u = session ? session.username.toLowerCase() : null;
          if (u) {
            const lsKey = "epiton_u_" + u + "_reels";
            const existing = JSON.parse(localStorage.getItem(lsKey) || "[]");
            existing.unshift({ id, user: reelObj.user, avatar: reelObj.avatar, video: dataUrl, caption: reelObj.caption, likes: 0 });
            // Keep only last 10 reels in localStorage to avoid quota issues
            localStorage.setItem(lsKey, JSON.stringify(existing.slice(0, 10)));
          }
        } catch { /* quota exceeded or no session — skip */ }
      }).catch(() => {});

      saved++;
      if (saved === validFiles.length) {
        // reload all from IDB
        reels = [...defaultReels].map((r, i) => createSafeReel(r, `default_reel_${i + 1}`));
        initReelsFromDB();
        if (reelUploadFormEl) reelUploadFormEl.reset();
        const uploadPanelEl = document.getElementById("reelsUploadPanel");
        if (uploadPanelEl) uploadPanelEl.hidden = true;
        const msg = skippedCount > 0
          ? `Uploaded ${saved} reel(s). Skipped ${skippedCount} large file(s).`
          : `Uploaded ${saved} reel(s) successfully.`;
        setReelUploadStatus(msg);
        createNotification(msg, "upload");
      }
    });
  });
}

function renderContacts() {
  if (!contactsGridEl) {
    return;
  }

  const normalizedQuery = String(contactSearchQuery || "").trim().toLowerCase();
  if (contactSearchClearEl) {
    contactSearchClearEl.hidden = normalizedQuery.length === 0;
  }

  contactsGridEl.innerHTML = "";
  let visibleContacts = 0;

  contactDirectory.forEach((contact, index) => {
    const searchableText = `${contact.user} ${contact.status || ""}`.toLowerCase();
    if (normalizedQuery && !searchableText.includes(normalizedQuery)) {
      return;
    }

    visibleContacts += 1;
    const isFollowing = isFollowingUser(contact.user);
    const isRequested = sentFriendRequests.has(normalizeUserKey(contact.user));
    contactsGridEl.insertAdjacentHTML(
      "beforeend",
      `
        <div class="contact-pill" data-contact-index="${index}">
          <button class="contact-chat-btn" type="button" data-contact-index="${index}">
            <img src="${contact.avatar}" alt="${contact.user}" />
            <span>${escapeHtml(contact.user)}</span>
          </button>
          <button
            class="contact-profile-btn"
            type="button"
            data-profile-user="${contact.user}"
            aria-label="Open ${contact.user} profile"
          >
            Profile
          </button>
          <button
            class="contact-follow-btn ${isFollowing ? "is-following" : ""}"
            type="button"
            data-follow-user="${contact.user}"
            aria-pressed="${isFollowing ? "true" : "false"}"
            aria-label="${isFollowing ? "Unfollow" : "Follow"} ${contact.user}"
          >
            ${isFollowing ? "Following" : "Follow"}
          </button>
          <button
            class="contact-request-btn ${isRequested ? "is-requested" : ""}"
            type="button"
            data-request-user="${contact.user}"
            ${isRequested ? "disabled" : ""}
          >
            ${isRequested ? "Requested" : "Request"}
          </button>
        </div>
      `
    );
  });

  if (visibleContacts === 0) {
    contactsGridEl.innerHTML =
      '<p class="contacts-empty">No contact found. Try another name.</p>';
  }
}

function renderSuggestedUsers() {
  suggestedEl.innerHTML = "";
  suggested.forEach((item) => {
    const isFollowing = isFollowingUser(item.user);
    suggestedEl.insertAdjacentHTML(
      "beforeend",
      `
        <article class="suggestion-user">
          <button class="suggestion-meta suggestion-open-btn" type="button" data-profile-user="${item.user}">
            <img src="${item.avatar}" alt="${item.user}" />
            <div>
              <h4>${item.user}</h4>
              <p>${item.info}</p>
            </div>
          </button>
          <button
            class="suggestion-follow-btn ${isFollowing ? "is-following" : ""}"
            type="button"
            data-follow-user="${item.user}"
            aria-pressed="${isFollowing ? "true" : "false"}"
            aria-label="${isFollowing ? "Unfollow" : "Follow"} ${item.user}"
          >
            ${isFollowing ? "Following" : "Follow"}
          </button>
        </article>
      `
    );
  });
}

function renderChatPanel() {
  const conversation = getActiveConversation();
  if (!conversation) {
    chatAvatarEl.src = "https://randomuser.me/api/portraits/men/46.jpg";
    chatNameEl.textContent = "No thread selected";
    chatStatusEl.textContent = "Create a thread to begin messaging";
    chatMessagesEl.innerHTML = "";
    chatInputEl.disabled = true;
    chatProfileBtnEl.disabled = true;
    chatInputEl.placeholder = "Create a thread first";
    renderTypingIndicator();
    return;
  }

  chatInputEl.disabled = false;
  chatProfileBtnEl.disabled = false;
  chatInputEl.placeholder = "Type a message...";
  chatAvatarEl.src = conversation.avatar;
  chatAvatarEl.alt = conversation.user;
  chatNameEl.textContent = conversation.user;
  chatStatusEl.textContent = conversation.status;

  chatMessagesEl.innerHTML = "";
  const myAvatar = profileData.image || "https://randomuser.me/api/portraits/men/85.jpg";
  const myName = profileData.handle || "you";
  conversation.messages.forEach((message) => {
    const isYou = message.from === "you";
    const avatarSrc = isYou ? myAvatar : conversation.avatar;
    const avatarAlt = isYou ? myName : conversation.user;

    // Detect media messages
    const imgMatch   = message.text.match(/^\[image:(data:[^)]+)\]$/);
    const videoMatch = message.text.match(/^\[video:(data:[^)]+)\]$/);
    let bubbleContent;
    if (imgMatch) {
      bubbleContent = `<img src="${imgMatch[1]}" class="chat-media-img" alt="Image" />`;
    } else if (videoMatch) {
      bubbleContent = `<video src="${videoMatch[1]}" class="chat-media-video" controls muted playsinline></video>`;
    } else {
      bubbleContent = escapeHtml(message.text);
    }

    chatMessagesEl.insertAdjacentHTML(
      "beforeend",
      `
        <div class="message-row ${message.from}">
          <img class="msg-avatar" src="${escapeHtml(avatarSrc)}" alt="${escapeHtml(avatarAlt)}" />
          <div class="message-bubble${imgMatch || videoMatch ? " bubble-media" : ""}">${bubbleContent}</div>
        </div>
      `
    );
  });

  renderTypingIndicator();
  chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
}

function setActiveConversation(conversationId) {
  activeConversationId = conversationId;
  const conversation = getActiveConversation();
  if (conversation) {
    conversation.unread = 0;
    saveConversations();
    setMobileChatView(true);
  }
  renderConversationList();
  renderUnreadCount();
  renderChatPanel();
}

function setProfileEditorVisible(isVisible, options = {}) {
  if (!profileEditorEl) {
    return;
  }

  const { scroll = false, focus = false } = options;
  profileEditorEl.hidden = !isVisible;

  if (myEptProfileBtnEl) {
    myEptProfileBtnEl.setAttribute("aria-expanded", isVisible ? "true" : "false");
    myEptProfileBtnEl.textContent = isVisible ? "Hide My EPT Profile" : "My EPT Profile";
  }

  if (isVisible && scroll) {
    profileEditorEl.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  if (isVisible && focus) {
    setTimeout(() => {
      profileNameInputEl.focus();
    }, 220);
  }
}

function toggleProfileEditorVisibility(event) {
  if (event) {
    event.preventDefault();
  }
  const isVisible = !profileEditorEl.hidden;
  setProfileEditorVisible(!isVisible, { scroll: !isVisible, focus: !isVisible });
}

function scrollToProfileEditor(event) {
  if (event) {
    event.preventDefault();
  }
  setProfileEditorVisible(true, { scroll: true, focus: true });
}

// "Add Story" first item
storiesEl.insertAdjacentHTML(
  "beforeend",
  `<article class="story story-add">
    <button class="story-open-btn story-upload-trigger" type="button" aria-label="Add your story">
      <div class="story-ring"></div>
      <span>Your Story</span>
    </button>
  </article>`
);

stories.forEach((story, idx) => {
  storiesEl.insertAdjacentHTML(
    "beforeend",
    `
      <article class="story">
        <button class="story-open-btn" type="button" data-story-index="${idx}" data-profile-user="${story.name}">
          <div class="story-ring">
            <img src="${story.avatar}" alt="${story.name} story" />
          </div>
          <span>${story.name}</span>
        </button>
      </article>
    `
  );
});

renderSuggestedUsers();

suggestedEl.addEventListener("click", (event) => {
  const followBtn = event.target.closest(".suggestion-follow-btn");
  if (!followBtn) {
    return;
  }
  const followUser = followBtn.dataset.followUser;
  toggleFollowUser(followUser);
});

postsEl.addEventListener("click", (event) => {
  const shareBtn = event.target.closest(".post-share-btn");
  if (shareBtn) {
    const postIndex = Number(shareBtn.dataset.postIndex);
    if (!Number.isInteger(postIndex) || postIndex < 0 || postIndex >= posts.length) {
      return;
    }
    shareContentLink("post", String(postIndex), `${posts[postIndex].user}'s post`);
    return;
  }

  const likeBtn = event.target.closest(".post-like-btn");
  if (!likeBtn) {
    return;
  }

  const postIndex = Number(likeBtn.dataset.postIndex);
  if (!Number.isInteger(postIndex) || postIndex < 0 || postIndex >= posts.length) {
    return;
  }

  if (likedPosts.has(postIndex)) {
    likedPosts.delete(postIndex);
  } else {
    likedPosts.add(postIndex);
  }
  saveLikedPosts();
  createNotification(
    likedPosts.has(postIndex)
      ? `You liked ${posts[postIndex].user}'s post`
      : `You removed like from ${posts[postIndex].user}'s post`,
    likedPosts.has(postIndex) ? "like" : "info"
  );
  renderPosts();
});

postsEl.addEventListener("submit", (event) => {
  const commentForm = event.target.closest(".post-comment-form");
  if (!commentForm) {
    return;
  }
  event.preventDefault();

  const postIndex = Number(commentForm.dataset.postIndex);
  const commentInput = commentForm.querySelector("input");
  const commentText = commentInput ? commentInput.value : "";

  if (!Number.isInteger(postIndex) || postIndex < 0 || postIndex >= posts.length) {
    return;
  }

  if (!addPostComment(postIndex, commentText)) {
    return;
  }

  createNotification(`Comment posted on ${posts[postIndex].user}'s post`, "comment");
  renderPosts();
});

if (reelsFeedEl) {
  reelsFeedEl.addEventListener("click", (event) => {
    const profileTrigger = event.target.closest("[data-profile-user]");
    if (profileTrigger) {
      openStandardProfile(profileTrigger.dataset.profileUser);
      return;
    }

    const shareBtn = event.target.closest(".reel-share-btn");
    if (shareBtn) {
      const reelId = String(shareBtn.dataset.reelId || "").trim();
      const reel = reels.find((r) => r.id === reelId);
      shareContentLink("reel", reelId, reel ? `${reel.user}'s reel` : "reel");
      return;
    }

    // download reel
    const downloadBtn = event.target.closest(".reel-download-btn");
    if (downloadBtn) {
      const reelId  = String(downloadBtn.dataset.reelId || "").trim();
      const reelSrc = String(downloadBtn.dataset.reelSrc || "").trim();
      const reel    = reels.find((r) => r.id === reelId);
      const filename = `epiton_reel_${reelId}.mp4`;
      downloadBtn.querySelector(".reel-action-icon").textContent = "⏳";
      downloadBtn.disabled = true;
      (async () => {
        try {
          const resp = await fetch(reelSrc);
          const blob = await resp.blob();
          const url  = URL.createObjectURL(blob);
          const a    = document.createElement("a");
          a.href     = url;
          a.download = filename;
          document.body.appendChild(a);
          a.click();
          a.remove();
          URL.revokeObjectURL(url);
          createNotification(`Reel downloaded`, "success");
        } catch {
          showToast("Download failed — try again", "error");
        } finally {
          downloadBtn.querySelector(".reel-action-icon").textContent = "⬇️";
          downloadBtn.disabled = false;
        }
      })();
      return;
    }

    // send reel to DM
    const dmBtn = event.target.closest(".reel-dm-btn");
    if (dmBtn) {
      const reelId = String(dmBtn.dataset.reelId || "").trim();
      const reel   = reels.find((r) => r.id === reelId);
      openReelDmPicker(reelId, reel);
      return;
    }

    // mute toggle
    const muteBtn = event.target.closest(".reel-mute-btn");
    if (muteBtn) {
      const card = muteBtn.closest(".reel-card");
      const video = card && card.querySelector(".reel-video");
      if (video) {
        video.muted = !video.muted;
        muteBtn.querySelector(".reel-action-icon").textContent = video.muted ? "🔇" : "🔊";
      }
      return;
    }

    // comment drawer toggle
    const commentToggle = event.target.closest(".reel-comment-toggle-btn");
    if (commentToggle) {
      const card = commentToggle.closest(".reel-card");
      const drawer = card && card.querySelector(".reel-comment-drawer");
      if (drawer) drawer.hidden = !drawer.hidden;
      return;
    }

    // like — in-place update, no full re-render
    const likeBtn = event.target.closest(".reel-like-btn");
    if (!likeBtn) return;

    const reelId = String(likeBtn.dataset.reelId || "").trim();
    if (!reelId) return;

    const wasLiked = likedReels.has(reelId);
    if (wasLiked) {
      likedReels.delete(reelId);
    } else {
      likedReels.add(reelId);
    }
    saveLikedReels();
    const isLikedNow = likedReels.has(reelId);

    // update button in-place
    likeBtn.classList.toggle("is-liked", isLikedNow);
    likeBtn.setAttribute("aria-pressed", String(isLikedNow));
    likeBtn.querySelector(".reel-action-icon").textContent = isLikedNow ? "❤️" : "🤍";

    const reel = reels.find((r) => r.id === reelId);
    const base = reel ? Number(reel.likes || 0) : 0;
    const countEl = reelsFeedEl.querySelector(`[data-like-count="${reelId}"]`);
    if (countEl) countEl.textContent = (base + (isLikedNow ? 1 : 0)).toLocaleString();

    if (reel) {
      createNotification(
        isLikedNow ? `You liked ${reel.user}'s reel` : `Removed like from ${reel.user}'s reel`,
        isLikedNow ? "like" : "info"
      );
    }
  });

  reelsFeedEl.addEventListener("submit", (event) => {
    const commentForm = event.target.closest(".reel-comment-form");
    if (!commentForm) return;
    event.preventDefault();

    const reelId = String(commentForm.dataset.reelId || "").trim();
    const commentInput = commentForm.querySelector("input");
    const commentText = commentInput ? commentInput.value : "";
    if (!reelId || !addReelComment(reelId, commentText)) return;

    if (commentInput) commentInput.value = "";
    // update comment list in-place
    const card = reelsFeedEl.querySelector(`[data-reel-id="${reelId}"]`);
    if (card) {
      const list = card.querySelector(".reel-comment-list");
      if (list) list.innerHTML = commentListHtml(reelCommentsById[reelId] || []);
      const countEl = card.querySelector(".reel-comment-toggle-btn .reel-action-count");
      if (countEl) countEl.textContent = (reelCommentsById[reelId] || []).length;
    }
    const reel = reels.find((r) => r.id === reelId);
    createNotification(reel ? `Comment posted on ${reel.user}'s reel` : "Comment posted", "comment");
  });
}

if (reelUploadFormEl) {
  reelUploadFormEl.addEventListener("submit", handleReelUpload);
}

if (reelFrameModeSelectEl) {
  reelFrameModeSelectEl.addEventListener("change", (event) => {
    applyReelFrameMode(event.target.value, { persist: true, notify: true });
  });
}

if (reelsNavBtnEl && reelsPageEl) {
  reelsNavBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    reelsPageEl.hidden = false;
    // auto-play first video when opening
    const firstVideo = reelsFeedEl ? reelsFeedEl.querySelector(".reel-video") : null;
    if (firstVideo) { firstVideo.muted = true; firstVideo.play().catch(() => {}); }
  });
}

document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    return;
  }
  pauseAllReelVideos();
});

[storiesEl, postsEl, suggestedEl].forEach((container) => {
  container.addEventListener("click", (event) => {
    const profileTrigger = event.target.closest("[data-profile-user]");
    if (!profileTrigger) {
      return;
    }
    const selectedUser = profileTrigger.dataset.profileUser;
    if (!selectedUser) {
      return;
    }
    openStandardProfile(selectedUser);
  });
});

conversationListEl.addEventListener("click", (event) => {
  const button = event.target.closest(".conversation-item");
  if (!button) {
    return;
  }
  setActiveConversation(button.dataset.conversationId);
});

conversationListEl.addEventListener("dblclick", (event) => {
  const button = event.target.closest(".conversation-item");
  if (!button) {
    return;
  }
  const selectedConversation = conversations.find(
    (conversation) => conversation.id === button.dataset.conversationId
  );
  if (!selectedConversation) {
    return;
  }
  openStandardProfile(selectedConversation.user);
});

if (chatFormEl) {
  chatFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    const messageText = chatInputEl.value.trim();
    if (!messageText) {
      return;
    }

    const conversation = getActiveConversation();
    if (!conversation) {
      return;
    }

    conversation.messages.push({ from: "you", text: messageText });
    saveConversations();
    chatInputEl.value = "";
    renderConversationList();
    renderChatPanel();
    scheduleAutoReply(conversation.id, messageText);
  });
}

contactsGridEl.addEventListener("click", (event) => {
  const requestBtn = event.target.closest(".contact-request-btn");
  const followBtn = event.target.closest(".contact-follow-btn");
  const chatBtn = event.target.closest(".contact-chat-btn");
  const profileBtn = event.target.closest(".contact-profile-btn");

  if (requestBtn) {
    const requestUser = normalizeUserKey(requestBtn.dataset.requestUser);
    if (!requestUser) {
      return;
    }
    if (sentFriendRequests.has(requestUser)) {
      return;
    }
    sentFriendRequests.add(requestUser);
    saveSentFriendRequests();
    createNotification(`Friend request sent to @${requestUser}`, "friend-request");
    renderContacts();
    return;
  }

  if (followBtn) {
    const followUser = followBtn.dataset.followUser;
    toggleFollowUser(followUser);
    return;
  }

  if (profileBtn) {
    const profileUser = profileBtn.dataset.profileUser;
    openStandardProfile(profileUser);
    return;
  }

  if (!chatBtn) {
    return;
  }
  const contactIndex = Number(chatBtn.dataset.contactIndex);
  const selectedContact = contactDirectory[contactIndex];
  if (!selectedContact) {
    return;
  }
  openOrCreateConversationFromContact(selectedContact);
});

if (contactSearchInputEl) {
  contactSearchInputEl.addEventListener("input", (event) => {
    contactSearchQuery = String(event.target.value || "").trim();
    renderContacts();
  });
}

if (contactSearchClearEl) {
  contactSearchClearEl.addEventListener("click", () => {
    contactSearchQuery = "";
    if (contactSearchInputEl) {
      contactSearchInputEl.value = "";
      contactSearchInputEl.focus();
    }
    renderContacts();
  });
}

if (newThreadBtnEl) {
  newThreadBtnEl.addEventListener("click", () => {
    openNewMsgModal();
  });
}

if (cancelThreadBtnEl) {
  cancelThreadBtnEl.addEventListener("click", () => {
    closeThreadComposer();
  });
}

if (newThreadFormEl) {
  newThreadFormEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const threadUser = threadUserInputEl.value.trim();
  const threadStatus = threadStatusInputEl.value.trim() || "Active now";
  const firstMessage = threadMessageInputEl.value.trim();

  if (!threadUser) {
    threadUserInputEl.focus();
    return;
  }

  const existingThread = conversations.find(
    (conversation) => conversation.user.toLowerCase() === threadUser.toLowerCase()
  );
  if (existingThread) {
    setActiveConversation(existingThread.id);
    closeThreadComposer();
    return;
  }

  const newConversation = {
    id: `c_${Date.now()}`,
    user: threadUser,
    avatar: `https://randomuser.me/api/portraits/men/${(threadUser.charCodeAt(0) % 50) + 1}.jpg`,
    status: threadStatus,
    unread: 0,
    messages: firstMessage ? [{ from: "you", text: firstMessage }] : []
  };

  conversations.unshift(newConversation);
  activeConversationId = newConversation.id;
  saveConversations();
  closeThreadComposer();
  renderConversationList();
  renderUnreadCount();
  renderChatPanel();
  setMobileChatView(true);
  registerStandardProfile(newConversation.user, newConversation.avatar);
  });
}

// ── New Message Modal ─────────────────────────────────────────────
(function () {
  const modal       = document.getElementById("newMsgModal");
  const closeBtn    = document.getElementById("newMsgModalClose");
  const searchInput = document.getElementById("newMsgSearch");
  const contactList = document.getElementById("newMsgContactList");
  const firstMsgEl  = document.getElementById("newMsgFirstMsg");
  const sendBtn     = document.getElementById("newMsgSendBtn");

  let selectedUser   = null;
  let selectedAvatar = null;

  function buildContactList(query) {
    if (!contactList) return;
    const q = (query || "").toLowerCase().trim();

    // merge contactDirectory + existing conversations (deduplicated)
    const seen = new Set();
    const all  = [];
    contactDirectory.forEach((c) => {
      const key = c.user.toLowerCase();
      if (!seen.has(key)) { seen.add(key); all.push({ user: c.user, avatar: c.avatar }); }
    });
    conversations.forEach((c) => {
      const key = c.user.toLowerCase();
      if (!seen.has(key)) { seen.add(key); all.push({ user: c.user, avatar: c.avatar }); }
    });

    const filtered = q ? all.filter((c) => c.user.toLowerCase().includes(q)) : all;

    if (!filtered.length && q) {
      // allow free-text username
      contactList.innerHTML = `
        <button class="new-msg-contact-item" type="button" data-username="${escapeHtml(q)}" data-avatar="https://randomuser.me/api/portraits/men/${(q.charCodeAt(0) % 50) + 1}.jpg">
          <img src="https://randomuser.me/api/portraits/men/${(q.charCodeAt(0) % 50) + 1}.jpg" alt="${escapeHtml(q)}" />
          <div><strong>${escapeHtml(q)}</strong><span>Start new conversation</span></div>
        </button>`;
    } else {
      contactList.innerHTML = filtered.map((c) => `
        <button class="new-msg-contact-item" type="button" data-username="${escapeHtml(c.user)}" data-avatar="${escapeHtml(c.avatar)}">
          <img src="${escapeHtml(c.avatar)}" alt="${escapeHtml(c.user)}" />
          <div><strong>${escapeHtml(c.user)}</strong><span>${escapeHtml(conversations.find((cv) => cv.user.toLowerCase() === c.user.toLowerCase()) ? "Existing conversation" : "Start new conversation")}</span></div>
        </button>`).join("");
    }

    contactList.querySelectorAll(".new-msg-contact-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        contactList.querySelectorAll(".new-msg-contact-item").forEach((b) => b.classList.remove("selected"));
        btn.classList.add("selected");
        selectedUser   = btn.dataset.username;
        selectedAvatar = btn.dataset.avatar;
        if (sendBtn) sendBtn.disabled = false;
      });
    });
  }

  window.openNewMsgModal = function () {
    if (!modal) return;
    selectedUser = null; selectedAvatar = null;
    if (searchInput) searchInput.value = "";
    if (firstMsgEl)  firstMsgEl.value  = "";
    if (sendBtn)     sendBtn.disabled  = true;
    buildContactList("");
    modal.hidden = false;
  };

  if (closeBtn) closeBtn.addEventListener("click", () => { modal.hidden = true; });
  if (modal)    modal.addEventListener("click", (e) => { if (e.target === modal) modal.hidden = true; });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      selectedUser = null; selectedAvatar = null;
      if (sendBtn) sendBtn.disabled = true;
      buildContactList(searchInput.value);
    });
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      if (!selectedUser) return;
      const firstMsg = firstMsgEl ? firstMsgEl.value.trim() : "";

      let conv = conversations.find((c) => c.user.toLowerCase() === selectedUser.toLowerCase());
      if (!conv) {
        conv = {
          id: `c_${Date.now()}`,
          user: selectedUser,
          avatar: selectedAvatar || `https://randomuser.me/api/portraits/men/${(selectedUser.charCodeAt(0) % 50) + 1}.jpg`,
          status: "Active now",
          unread: 0,
          messages: []
        };
        conversations.unshift(conv);
        registerStandardProfile(conv.user, conv.avatar);
      }

      if (firstMsg) {
        conv.messages.push({ from: "you", text: firstMsg });
      }

      activeConversationId = conv.id;
      saveConversations();
      renderConversationList();
      renderUnreadCount();
      renderChatPanel();
      setMobileChatView(true);
      modal.hidden = true;
    });
  }
})();

if (chatBackBtnEl) {
  chatBackBtnEl.addEventListener("click", () => {
    setMobileChatView(false);
  });
}

if (chatProfileBtnEl) {
  chatProfileBtnEl.addEventListener("click", () => {
    const activeConversation = getActiveConversation();
    if (!activeConversation) {
      return;
    }
    openStandardProfile(activeConversation.user);
  });
}

if (themeToggleEl) {
  themeToggleEl.addEventListener("click", () => {
    const isOpen = themeStudioEl && themeStudioEl.classList.contains("is-open");
    setThemeStudioOpen(!isOpen);
  });
}

if (themeSwitchesEl) {
  themeSwitchesEl.addEventListener("change", (event) => {
    const themeSwitch = event.target.closest(".theme-switch-input");
    if (!themeSwitch) {
      return;
    }
    const selectedTheme = themeSwitch.value;
    if (!isSupportedTheme(selectedTheme)) {
      return;
    }
    applyTheme(selectedTheme);
    localStorage.setItem(THEME_KEY, selectedTheme);
  });
}

if (profileModalCloseEl) {
  profileModalCloseEl.addEventListener("click", closeStandardProfile);
}

if (profileModalDoneEl) {
  profileModalDoneEl.addEventListener("click", closeStandardProfile);
}

if (profileModalFollowBtnEl) {
  profileModalFollowBtnEl.addEventListener("click", () => {
    if (!activeProfileUser) {
      return;
    }
    followUser(activeProfileUser);
  });
}

if (profileModalUnfollowBtnEl) {
  profileModalUnfollowBtnEl.addEventListener("click", () => {
    if (!activeProfileUser) {
      return;
    }
    unfollowUser(activeProfileUser);
  });
}

if (contactProfileModalEl) {
  contactProfileModalEl.addEventListener("click", (event) => {
    if (event.target === contactProfileModalEl || event.target.closest("[data-close-profile]")) {
      closeStandardProfile();
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && contactProfileModalEl && !contactProfileModalEl.hidden) {
    closeStandardProfile();
  }
});

if (messageNavBtnEl) {
  messageNavBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    if (messageInboxEl) {
      messageInboxEl.classList.add("open");
    }
    setMobileChatView(false);
  });
}

if (notificationsNavBtnEl && notificationsPanelEl) {
  notificationsNavBtnEl.addEventListener("click", (event) => {
    event.preventDefault();
    notificationsPanelEl.removeAttribute("hidden");
    notificationsPanelEl.setAttribute("aria-hidden", "false");
    renderNotifications();
  });
}

// ── People nav button (sidebar) ───────────────────────────────────
(function () {
  function _openPeople() {
    const page = document.getElementById("peoplePage");
    if (!page) return;
    page.hidden = false;
    page.setAttribute("aria-hidden", "false");
    if (typeof openOverlay === "function") openOverlay("peoplePage");
    if (window._loadPeoplePage) {
      window._loadPeoplePage();
    } else {
      const list = document.getElementById("peopleList");
      if (list) list.innerHTML = '<div class="people-loading">Sign in to see people…</div>';
      setTimeout(() => { if (window._loadPeoplePage) window._loadPeoplePage(); }, 2000);
    }
  }

  const btn  = document.getElementById("peopleNavBtn");
  const page = document.getElementById("peoplePage");
  if (!btn || !page) return;
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    _openPeople();
  });
  const closeBtn = document.getElementById("peoplePageClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      page.hidden = true;
      page.setAttribute("aria-hidden", "true");
      if (typeof closeOverlay === "function") closeOverlay("peoplePage");
    });
  }
  // Expose for mobile nav
  window._openPeoplePage = _openPeople;
})();

const notificationsPanelCloseBtnEl = document.getElementById("notificationsPanelCloseBtn");
if (notificationsPanelCloseBtnEl) {
  notificationsPanelCloseBtnEl.addEventListener("click", () => {
    notificationsPanelEl.hidden = true;
    notificationsPanelEl.setAttribute("aria-hidden", "true");
  });
}

if (clearNotificationsBtnEl) {
  clearNotificationsBtnEl.addEventListener("click", () => {
    notifications = [];
    saveNotifications();
    renderNotifications();
    showToast("Notifications cleared", "info");
  });
}

if (myEptProfileBtnEl) {
  myEptProfileBtnEl.addEventListener("click", toggleProfileEditorVisibility);
}

if (profileNavBtnEl) {
  profileNavBtnEl.addEventListener("click", (e) => {
    e.preventDefault();
    openMyProfilePage();
  });
}

if (editProfileBtnEl) {
  editProfileBtnEl.addEventListener("click", scrollToProfileEditor);
}

if (profileImageInputEl) {
  profileImageInputEl.addEventListener("change", () => {
    // When Supabase auth is active, let supabase-epiton.js handle the upload
    if (window._useFirebaseAuth) return;
    const file = profileImageInputEl.files[0];
    if (!file || !file.type.startsWith("image/")) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      profileData.image = reader.result;
      profilePreviewEl.src = profileData.image;
      renderProfileCard();
      saveProfile();
      createNotification("Profile photo uploaded successfully", "upload");
    };
    reader.readAsDataURL(file);
  });
}

if (profileFormEl) {
  profileFormEl.addEventListener("submit", (event) => {
    event.preventDefault();
    // When Supabase auth is active, let supabase-epiton.js handle the save
    if (window._useFirebaseAuth) return;

    profileData.name = profileNameInputEl.value.trim() || defaultProfile.name;
    profileData.handle = profileHandleInputEl.value.trim() || defaultProfile.handle;
    profileData.email = profileEmailInputEl.value.trim();
    profileData.location = profileLocationInputEl.value.trim();
    profileData.bio = profileBioInputEl.value.trim();

    saveProfile();
    renderProfileCard();
    fillProfileForm();

    profileSavedMsgEl.textContent = "Profile saved.";
    setTimeout(() => {
      profileSavedMsgEl.textContent = "";
    }, 1800);
  });
}

try {
  initializePostLikeBaseCounts();
  loadConversations();
  loadFollowedUsers();
  loadLikedPosts();
  loadLikedReels();
  loadPostComments();
  loadReelComments();
  loadNotifications();
  loadSentFriendRequests();
  loadReels();
  initializeStandardProfiles();
  if (!conversations.some((conversation) => conversation.id === activeConversationId)) {
    activeConversationId = conversations[0] ? conversations[0].id : "";
  }
  loadProfile();
  fillProfileForm();
  setProfileEditorVisible(false);
  renderProfileCard();
  initTheme();
  loadReelFrameMode();
  renderPosts();
  renderReels();
  renderContacts();
  renderNotifications();
  renderConversationList();
  renderUnreadCount();
  renderChatPanel();
  syncFollowButtons();
  focusSharedContentFromUrl();
  setMobileChatView(false);
  window.addEventListener("resize", syncResponsiveInbox);
} catch (error) {
  console.error("Failed to initialize messaging UI:", error);
}




// ===== REEL INDEXEDDB =====
window._reelDB = (function () {
  var DB_NAME    = "epiton_reels_db";
  var STORE_NAME = "reels";
  var DB_VERSION = 1;
  var db = null;

  function open(cb) {
    if (db) { cb(db); return; }
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = function (e) {
      var d = e.target.result;
      if (!d.objectStoreNames.contains(STORE_NAME)) {
        d.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };
    req.onsuccess = function (e) { db = e.target.result; cb(db); };
    req.onerror   = function () { console.error("ReelDB open failed"); };
  }

  function add(reelObj, cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readwrite");
      var store = tx.objectStore(STORE_NAME);
      store.put(reelObj);
      tx.oncomplete = function () { if (cb) cb(); };
      tx.onerror    = function (e) { console.error("ReelDB add failed", e); };
    });
  }

  function getAll(cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readonly");
      var store = tx.objectStore(STORE_NAME);
      var req   = store.getAll();
      req.onsuccess = function () { cb(req.result || []); };
      req.onerror   = function () { cb([]); };
    });
  }

  return { add: add, getAll: getAll };
})();

// Now that _reelDB is defined, load user-uploaded reels and merge into feed
initReelsFromDB();

// Load user-uploaded reels from IDB and prepend to feed
function _getAllAccountReels() {
  // Gather reel metadata saved by all accounts (non-blob URLs only)
  const result = [];
  const seen = new Set();
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (!key || !key.startsWith("epiton_u_") || !key.endsWith("_reels")) continue;
      try {
        const items = JSON.parse(localStorage.getItem(key) || "[]");
        items.forEach((r) => {
          if (!seen.has(r.id)) { seen.add(r.id); result.push(r); }
        });
      } catch { /* skip */ }
    }
  } catch { /* skip */ }
  return result;
}

function initReelsFromDB() {
  window._reelDB.getAll(function (rows) {
    if (!rows.length) {
      // Still merge other-account reels even if current user has none in IDB
      const otherReels = _getAllAccountReels().map((r) => Object.assign({}, r, { _fromOtherAccount: true }));
      reels = otherReels.concat(defaultReels.map((r, i) => createSafeReel(r, `default_reel_${i + 1}`)));
      renderReels();
      return;
    }
    // rows have blob field — create object URLs
    var userReels = rows.map(function (r) {
      return {
        id: r.id,
        user: r.user,
        avatar: r.avatar,
        video: r.blobUrl || (r.blob ? URL.createObjectURL(r.blob) : r.video || ""),
        caption: r.caption || "",
        likes: r.likes || 0,
        _fromDB: true
      };
    }).reverse(); // newest first

    // Merge other accounts' saved reel metadata (deduplicate by id)
    const myIds = new Set(userReels.map((r) => r.id));
    const otherReels = _getAllAccountReels()
      .filter((r) => !myIds.has(r.id))
      .map((r) => Object.assign({}, r, { _fromOtherAccount: true }));

    reels = userReels.concat(otherReels).concat(defaultReels.map((r, i) => createSafeReel(r, `default_reel_${i + 1}`)));
    renderReels();
  });
}

// ===== STORY INDEXEDDB =====
window._storyDB = (function () {
  var DB_NAME    = "epiton_stories_db";
  var STORE_NAME = "stories";
  var DB_VERSION = 1;
  var db = null;

  function open(cb) {
    if (db) { cb(db); return; }
    var req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = function (e) {
      var d = e.target.result;
      if (!d.objectStoreNames.contains(STORE_NAME)) {
        d.createObjectStore(STORE_NAME, { keyPath: "id", autoIncrement: true });
      }
    };
    req.onsuccess = function (e) { db = e.target.result; cb(db); };
    req.onerror   = function () { console.error("StoryDB open failed"); };
  }

  function add(storyObj, cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readwrite");
      var store = tx.objectStore(STORE_NAME);
      store.add(storyObj);
      tx.oncomplete = function () { if (cb) cb(); };
      tx.onerror    = function () { console.error("StoryDB add failed"); };
    });
  }

  function getAll(cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readonly");
      var store = tx.objectStore(STORE_NAME);
      var req   = store.getAll();
      req.onsuccess = function () {
        var rows = (req.result || []).slice().reverse(); // newest first
        cb(rows);
      };
      req.onerror = function () { cb([]); };
    });
  }

  function pruneOld(maxCount, cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readwrite");
      var store = tx.objectStore(STORE_NAME);
      var req   = store.getAll();
      req.onsuccess = function () {
        var rows = req.result || [];
        if (rows.length > maxCount) {
          rows.sort(function (a, b) { return a.id - b.id; });
          var toDelete = rows.slice(0, rows.length - maxCount);
          toDelete.forEach(function (r) { store.delete(r.id); });
        }
        tx.oncomplete = function () { if (cb) cb(); };
      };
    });
  }

  return { add: add, getAll: getAll, pruneOld: pruneOld, clearAll: clearAll };

  function clearAll(cb) {
    open(function (d) {
      var tx    = d.transaction(STORE_NAME, "readwrite");
      var store = tx.objectStore(STORE_NAME);
      store.clear();
      tx.oncomplete = function () { if (cb) cb(); };
      tx.onerror    = function () { if (cb) cb(); };
    });
  }
})();

// ===== STORY VIEWER =====
(function () {
  var viewer      = document.getElementById("storyViewer");
  var videoEl     = document.getElementById("storyViewerVideo");
  var avatarEl    = document.getElementById("storyViewerAvatar");
  var nameEl      = document.getElementById("storyViewerName");
  var captionEl   = document.getElementById("storyViewerCaption");
  var progressBar = document.getElementById("storyProgressBar");
  var closeBtn    = document.getElementById("storyViewerClose");
  var prevBtn     = document.getElementById("storyTapPrev");
  var nextBtn     = document.getElementById("storyTapNext");
  var muteBtn     = document.getElementById("storyMuteBtn");

  var currentIndex  = 0;
  var progressTimer = null;
  var isMuted       = true;
  var viewerStories = [];
  var currentBlobUrl = null;

  function buildProgressDots(total, active) {
    if (!progressBar) return;
    progressBar.innerHTML = "";
    for (var i = 0; i < total; i++) {
      var seg = document.createElement("div");
      seg.className = "story-progress-seg" +
        (i < active ? " done" : i === active ? " active" : "");
      progressBar.appendChild(seg);
    }
  }

  function revokeCurrent() {
    if (currentBlobUrl) { URL.revokeObjectURL(currentBlobUrl); currentBlobUrl = null; }
  }

  function openStory(index, storyList) {
    if (!viewer) return;
    if (storyList) viewerStories = storyList;
    if (!viewerStories.length) return;
    currentIndex = Math.max(0, Math.min(index, viewerStories.length - 1));
    var s = viewerStories[currentIndex];

    avatarEl.src = s.avatar || "";
    nameEl.textContent = s.name || "";
    if (captionEl) captionEl.textContent = s.caption || "";
    videoEl.muted = isMuted;
    muteBtn.textContent = isMuted ? "🔇" : "🔊";
    buildProgressDots(viewerStories.length, currentIndex);

    revokeCurrent();
    if (s.blob) {
      currentBlobUrl = URL.createObjectURL(s.blob);
      videoEl.src = currentBlobUrl;
    } else {
      videoEl.src = s.video || s.dataUrl || "";
    }

    viewer.hidden = false;
    viewer.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    videoEl.load();
    videoEl.play().catch(function () {});
    startProgress();
  }

  function startProgress() {
    clearTimeout(progressTimer);
    videoEl.onended = function () { goNext(); };
    progressTimer = setTimeout(function () { goNext(); }, 60000);
  }

  function goNext() {
    if (currentIndex < viewerStories.length - 1) {
      openStory(currentIndex + 1);
    } else {
      closeViewer();
    }
  }

  function goPrev() {
    if (currentIndex > 0) openStory(currentIndex - 1);
  }

  function closeViewer() {
    clearTimeout(progressTimer);
    if (videoEl) { videoEl.pause(); videoEl.src = ""; }
    revokeCurrent();
    if (viewer) {
      viewer.hidden = true;
      viewer.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeViewer);
  if (nextBtn)  nextBtn.addEventListener("click", goNext);
  if (prevBtn)  prevBtn.addEventListener("click", goPrev);
  if (muteBtn) {
    muteBtn.addEventListener("click", function () {
      isMuted = !isMuted;
      videoEl.muted = isMuted;
      muteBtn.textContent = isMuted ? "🔇" : "🔊";
    });
  }

  document.addEventListener("keydown", function (e) {
    if (!viewer || viewer.hidden) return;
    if (e.key === "Escape")      closeViewer();
    if (e.key === "ArrowRight")  goNext();
    if (e.key === "ArrowLeft")   goPrev();
  });

  if (storiesEl) {
    storiesEl.addEventListener("click", function (e) {
      var btn = e.target.closest("[data-story-index]");
      if (!btn) return;
      e.stopPropagation();
      var clickedIdx = Number(btn.dataset.storyIndex);
      window._storyDB.getAll(function (userStories) {
        var builtIn = stories.map(function (s) {
          return { name: s.name, avatar: s.avatar, video: s.video, caption: "" };
        });
        var all = userStories.concat(builtIn);
        openStory(clickedIdx, all);
      });
    });
  }

  window._openStoryViewer = openStory;
})();

// ===== STORY UPLOAD =====
(function () {
  var modal       = document.getElementById("storyUploadModal");
  var closeBtn    = document.getElementById("storyUploadClose");
  var dropZone    = document.getElementById("storyDropZone");
  var fileInput   = document.getElementById("storyFileInput");
  var previewWrap = document.getElementById("storyVideoPreviewWrap");
  var previewVid  = document.getElementById("storyVideoPreview");
  var removeBtn   = document.getElementById("storyRemoveVideoBtn");
  var captionEl   = document.getElementById("storyCaption");
  var shareBtn    = document.getElementById("storyShareBtn");

  var currentFile    = null;
  var previewBlobUrl = null;

  function openUpload() {
    if (!modal) return;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");
  }

  function closeUpload() {
    if (!modal) return;
    modal.hidden = true;
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-open");
    clearPreview();
  }

  function clearPreview() {
    currentFile = null;
    if (previewVid) {
      previewVid.pause();
      if (previewBlobUrl) { URL.revokeObjectURL(previewBlobUrl); previewBlobUrl = null; }
      previewVid.src = "";
    }
    if (previewWrap) previewWrap.style.display = "none";
    if (dropZone)    dropZone.style.display = "";
    if (shareBtn)    { shareBtn.disabled = true; shareBtn.textContent = "Share Story"; }
    if (captionEl)   captionEl.value = "";
    if (fileInput)   fileInput.value = "";
  }

  function loadFile(file) {
    if (!file || !file.type.startsWith("video/")) {
      showToast("Please select a video file.", "error");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      showToast("Video must be under 20 MB.", "error");
      return;
    }
    currentFile = file;
    if (previewBlobUrl) URL.revokeObjectURL(previewBlobUrl);
    previewBlobUrl = URL.createObjectURL(file);
    previewVid.src = previewBlobUrl;
    previewWrap.style.display = "block";
    dropZone.style.display = "none";
    shareBtn.disabled = false;
  }

  if (fileInput) fileInput.addEventListener("change", function () { loadFile(fileInput.files[0]); });
  if (removeBtn) removeBtn.addEventListener("click", clearPreview);
  if (closeBtn)  closeBtn.addEventListener("click", closeUpload);
  if (modal)     modal.addEventListener("click", function (e) { if (e.target === modal) closeUpload(); });

  if (dropZone) {
    dropZone.addEventListener("dragover",  function (e) { e.preventDefault(); dropZone.classList.add("drag-over"); });
    dropZone.addEventListener("dragleave", function ()  { dropZone.classList.remove("drag-over"); });
    dropZone.addEventListener("drop",      function (e) {
      e.preventDefault();
      dropZone.classList.remove("drag-over");
      loadFile(e.dataTransfer.files[0]);
    });
  }

  if (shareBtn) {
    shareBtn.addEventListener("click", function () {
      if (!currentFile) return;
      shareBtn.disabled = true;
      shareBtn.textContent = "Saving…";

      var prof = window.profileData || {};
      var newStory = {
        name:    prof.handle || "you",
        avatar:  prof.image  || "https://randomuser.me/api/portraits/men/85.jpg",
        blob:    currentFile,   // raw File stored in IndexedDB — no base64
        caption: captionEl ? captionEl.value.trim() : "",
        ts:      Date.now()
      };

      window._storyDB.add(newStory, function () {
        window._storyDB.pruneOld(5, function () {
          addMyStoryBubble(newStory.avatar);
          showToast("Story shared!", "success");
          shareBtn.textContent = "Share Story";
          closeUpload();
        });
      });
    });
  }

  function addMyStoryBubble(avatar) {
    if (!storiesEl) return;
    var existing = storiesEl.querySelector(".story-mine");
    if (existing) existing.remove();

    var art = document.createElement("article");
    art.className = "story story-mine";
    art.innerHTML =
      '<button class="story-open-btn" type="button" data-story-index="0">' +
      '<div class="story-ring"><img src="' + avatar + '" alt="your story" /></div>' +
      '<span>Your Story</span></button>' +
      '<button class="story-delete-btn icon-btn" type="button" aria-label="Delete your story" title="Delete story">🗑️</button>';

    var addBtn = storiesEl.querySelector(".story-add");
    if (addBtn && addBtn.nextSibling) {
      storiesEl.insertBefore(art, addBtn.nextSibling);
    } else {
      storiesEl.appendChild(art);
    }
    storiesEl.querySelectorAll("[data-story-index]").forEach(function (btn, i) {
      btn.dataset.storyIndex = i;
    });

    // wire delete button
    art.querySelector(".story-delete-btn").addEventListener("click", function (e) {
      e.stopPropagation();
      window._storyDB.clearAll(function () {
        var mine = storiesEl.querySelector(".story-mine");
        if (mine) mine.remove();
        // re-index remaining story buttons
        storiesEl.querySelectorAll("[data-story-index]").forEach(function (btn, i) {
          btn.dataset.storyIndex = i;
        });
        showToast("Story deleted", "info");
      });
    });
  }

  // wire "Your Story" add button
  if (storiesEl) {
    storiesEl.addEventListener("click", function (e) {
      var trigger = e.target.closest(".story-upload-trigger");
      if (trigger) { e.stopPropagation(); openUpload(); }
    });
  }

  // on page load: restore bubble if user has saved stories
  window._storyDB.getAll(function (rows) {
    if (!rows.length || !storiesEl) return;
    // always use current profile image for the bubble
    var prof = window.profileData || {};
    var avatar = prof.image || rows[0].avatar || "https://randomuser.me/api/portraits/men/85.jpg";
    addMyStoryBubble(avatar);
  });
})();

// update story bubble avatar whenever profile picture changes
function updateMyStoryBubbleAvatar(newImage) {
  if (!storiesEl || !newImage) return;
  var bubble = storiesEl.querySelector(".story-mine .story-ring img");
  if (bubble) bubble.src = newImage;
}

// ===== MY PROFILE PAGE =====
function openMyProfilePage() {
  const page = document.getElementById("myProfilePage");
  if (!page) return;
  renderMyProfilePage();
  page.hidden = false;
  page.setAttribute("aria-hidden", "false");
}

function closeMyProfilePage() {
  const page = document.getElementById("myProfilePage");
  if (!page) return;
  page.hidden = true;
  page.setAttribute("aria-hidden", "true");
}

function renderMyProfilePage() {
  const prof = window.profileData || profileData;

  // avatar + identity
  const avatarEl = document.getElementById("myProfileAvatar");
  const nameEl   = document.getElementById("myProfileName");
  const handleEl = document.getElementById("myProfileHandle");
  const bioEl    = document.getElementById("myProfileBio");
  if (avatarEl) avatarEl.src = prof.image || "https://randomuser.me/api/portraits/men/85.jpg";
  if (nameEl)   nameEl.textContent = prof.name || "Your Name";
  if (handleEl) handleEl.textContent = "@" + (prof.handle || "your_handle");
  if (bioEl)    bioEl.textContent = prof.bio || "";

  // stats
  const storedPosts = _loadUserPosts();
  const storedReels = _loadUserReels();
  const followingCount = followedUsers ? followedUsers.size : 0;
  const likedPostsCount = likedPosts ? likedPosts.size : 0;
  const likedReelsCount = likedReels ? likedReels.size : 0;
  const totalLikes = likedPostsCount + likedReelsCount;

  const el = (id) => document.getElementById(id);
  if (el("myStatPosts"))    el("myStatPosts").textContent    = storedPosts.length;
  if (el("myStatReels"))    el("myStatReels").textContent    = storedReels.length;
  if (el("myStatLikes"))    el("myStatLikes").textContent    = totalLikes;
  if (el("myStatFollowers")) el("myStatFollowers").textContent = Math.floor(Math.random() * 900 + 100); // simulated
  if (el("myStatFollowing")) el("myStatFollowing").textContent = followingCount;

  // tabs
  const tabs = document.querySelectorAll(".my-profile-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      renderMyProfileTab(tab.dataset.tab);
    });
  });

  // render default tab
  renderMyProfileTab("posts");

  // close + edit buttons
  const closeBtn = document.getElementById("myProfileCloseBtn");
  const editBtn  = document.getElementById("myProfileEditBtn");
  if (closeBtn) closeBtn.onclick = closeMyProfilePage;
  if (editBtn)  editBtn.onclick  = () => { closeMyProfilePage(); scrollToProfileEditor(); };
}

function renderMyProfileTab(tab) {
  const container = document.getElementById("myProfileTabContent");
  if (!container) return;
  container.innerHTML = "";

  if (tab === "posts") {
    const stored = _loadUserPosts();

    // Upload button
    const uploadBtn = document.createElement("button");
    uploadBtn.className = "upload-btn my-profile-add-post-btn";
    uploadBtn.innerHTML = "📷 Add Post";
    uploadBtn.addEventListener("click", () => {
      closeMyProfilePage();
      const uploadCard = document.getElementById("uploadCard");
      if (uploadCard) {
        uploadCard.hidden = false;
        uploadCard.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
    container.appendChild(uploadBtn);

    if (!stored.length) {
      container.insertAdjacentHTML("beforeend", _emptyState("📷", "No posts yet"));
      return;
    }
    const grid = _makeGrid();
    stored.forEach((p) => {
      const item = document.createElement("div");
      item.className = "my-profile-grid-item";
      item.innerHTML = `<img src="${escapeHtml(p.dataUrl || p.photo || "")}" alt="${escapeHtml(p.caption || "Post")}" loading="lazy" /><div class="grid-item-overlay"><span>❤️ ${p.likes || 0}</span></div>`;
      grid.appendChild(item);
    });
    container.appendChild(grid);
    return;
  }

  if (tab === "reels") {
    const stored = _loadUserReels();
    if (!stored.length) { container.innerHTML = _emptyState("🎬", "No reels uploaded yet"); return; }
    const grid = _makeGrid();
    stored.forEach((r) => {
      const item = document.createElement("div");
      item.className = "my-profile-grid-item";
      item.innerHTML = `<video src="${escapeHtml(r.video || r.blobUrl || "")}" muted preload="metadata"></video><div class="grid-item-overlay"><span>🎬</span></div>`;
      grid.appendChild(item);
    });
    container.appendChild(grid);
    return;
  }

  if (tab === "liked-posts") {
    const likedIndexes = likedPosts ? [...likedPosts] : [];
    const likedItems = likedIndexes.map((i) => posts[i]).filter(Boolean);
    if (!likedItems.length) { container.innerHTML = _emptyState("❤️", "No liked posts yet"); return; }
    const grid = _makeGrid();
    likedItems.forEach((p) => {
      const item = document.createElement("div");
      item.className = "my-profile-grid-item";
      item.innerHTML = `<img src="${escapeHtml(p.photo || "")}" alt="${escapeHtml(p.caption || "Post")}" loading="lazy" /><div class="grid-item-overlay"><span>❤️ ${p.likes || 0}</span></div>`;
      grid.appendChild(item);
    });
    container.appendChild(grid);
    return;
  }

  if (tab === "liked-reels") {
    const likedIds = likedReels ? [...likedReels] : [];
    const likedItems = reels.filter((r) => likedIds.includes(String(r.id)));
    if (!likedItems.length) { container.innerHTML = _emptyState("❤️", "No liked reels yet"); return; }
    const grid = _makeGrid();
    likedItems.forEach((r) => {
      const item = document.createElement("div");
      item.className = "my-profile-grid-item";
      item.innerHTML = `<video src="${escapeHtml(r.video || "")}" muted preload="metadata"></video><div class="grid-item-overlay"><span>🎬 ❤️</span></div>`;
      grid.appendChild(item);
    });
    container.appendChild(grid);
    return;
  }

  if (tab === "following") {
    const followed = followedUsers ? [...followedUsers] : [];
    if (!followed.length) { container.innerHTML = _emptyState("👥", "Not following anyone yet"); return; }
    const list = document.createElement("div");
    list.className = "my-profile-following-list";
    followed.forEach((username) => {
      const contact = contactDirectory.find((c) => normalizeUserKey(c.user) === username);
      const avatar = contact ? contact.avatar : "https://randomuser.me/api/portraits/men/46.jpg";
      const status = contact ? contact.status : "Epiton user";
      const item = document.createElement("div");
      item.className = "my-profile-following-item";
      item.innerHTML = `<img src="${escapeHtml(avatar)}" alt="${escapeHtml(username)}" /><div><strong>${escapeHtml(username)}</strong><span>${escapeHtml(status)}</span></div>`;
      item.addEventListener("click", () => { closeMyProfilePage(); openStandardProfile(username); });
      list.appendChild(item);
    });
    container.appendChild(list);
    return;
  }
}

function _makeGrid() {
  const g = document.createElement("div");
  g.className = "my-profile-grid";
  return g;
}

function _emptyState(icon, msg) {
  return `<div class="my-profile-empty"><span>${icon}</span>${escapeHtml(msg)}</div>`;
}

function _loadUserPosts() {
  try {
    return JSON.parse(localStorage.getItem("epiton_user_posts") || "[]");
  } catch { return []; }
}

function _loadUserReels() {
  // Return the in-memory reels that came from IndexedDB (_fromDB flag)
  return Array.isArray(reels) ? reels.filter((r) => r._fromDB) : [];
}

// ===== AUTH SYSTEM =====
(function () {
  const AUTH_SESSION_KEY  = "epiton_active_session";   // { username }
  const AUTH_ACCOUNTS_KEY = "epiton_accounts";          // { [username]: { name, handle, passwordHash } }
  const STATIC_PASSWORD   = "Epiton";

  // Per-user data keys — namespaced by username
  function userKey(username, suffix) {
    return "epiton_u_" + username + "_" + suffix;
  }

  // Simple hash — just a marker so we don't store plaintext
  function hashPw(pw) { return btoa(pw + ":epiton_salt"); }

  // ── Account registry ──────────────────────────────────────────────
  function getAccounts() {
    try { return JSON.parse(localStorage.getItem(AUTH_ACCOUNTS_KEY) || "{}"); }
    catch { return {}; }
  }
  function saveAccounts(obj) {
    localStorage.setItem(AUTH_ACCOUNTS_KEY, JSON.stringify(obj));
  }

  function accountExists(username) {
    return !!getAccounts()[username.toLowerCase()];
  }

  function createAccount(name, username, password) {
    const key = username.toLowerCase();
    const accounts = getAccounts();
    if (accounts[key]) return false; // already exists
    accounts[key] = { name, handle: username, passwordHash: hashPw(password) };
    saveAccounts(accounts);
    return true;
  }

  function verifyAccount(username, password) {
    const accounts = getAccounts();
    const acc = accounts[username.toLowerCase()];
    if (!acc) return false;
    return acc.passwordHash === hashPw(password);
  }

  // ── Session ───────────────────────────────────────────────────────
  function getSession() {
    try { return JSON.parse(localStorage.getItem(AUTH_SESSION_KEY) || "null"); }
    catch { return null; }
  }
  function setSession(username) {
    localStorage.setItem(AUTH_SESSION_KEY, JSON.stringify({ username: username.toLowerCase() }));
  }
  function clearSession() {
    localStorage.removeItem(AUTH_SESSION_KEY);
  }

  // ── Save / restore user data ──────────────────────────────────────
  function saveUserData(username) {
    const u = username.toLowerCase();
    // profile
    const prof = JSON.parse(localStorage.getItem(PROFILE_KEY) || "null");
    if (prof) localStorage.setItem(userKey(u, "profile"), JSON.stringify(prof));
    // posts
    const posts = localStorage.getItem("epiton_user_posts");
    if (posts) localStorage.setItem(userKey(u, "posts"), posts);
    // reels — save metadata (no blobs) so other accounts can see them
    const userReelMeta = (Array.isArray(reels) ? reels : [])
      .filter((r) => r._fromDB && r.video && !r.video.startsWith("blob:"))
      .map((r) => ({ id: r.id, user: r.user, avatar: r.avatar, video: r.video, caption: r.caption, likes: r.likes || 0 }));
    if (userReelMeta.length) localStorage.setItem(userKey(u, "reels"), JSON.stringify(userReelMeta));
    // likes
    const pl = localStorage.getItem(POST_LIKES_KEY);
    if (pl) localStorage.setItem(userKey(u, "post_likes"), pl);
    const rl = localStorage.getItem(REEL_LIKES_KEY);
    if (rl) localStorage.setItem(userKey(u, "reel_likes"), rl);
    // comments
    const pc = localStorage.getItem(POST_COMMENTS_KEY);
    if (pc) localStorage.setItem(userKey(u, "post_comments"), pc);
    const rc = localStorage.getItem(REEL_COMMENTS_KEY);
    if (rc) localStorage.setItem(userKey(u, "reel_comments"), rc);
    // followed
    const fu = localStorage.getItem(FOLLOWED_USERS_KEY);
    if (fu) localStorage.setItem(userKey(u, "followed"), fu);
    // notifications
    const notif = localStorage.getItem(NOTIFICATIONS_KEY);
    if (notif) localStorage.setItem(userKey(u, "notifications"), notif);
  }

  function restoreUserData(username) {
    const u = username.toLowerCase();
    const accounts = getAccounts();
    const acc = accounts[u];

    // restore profile (or build from account info)
    const savedProf = localStorage.getItem(userKey(u, "profile"));
    if (savedProf) {
      localStorage.setItem(PROFILE_KEY, savedProf);
    } else if (acc) {
      const freshProf = {
        name: acc.name,
        handle: acc.handle,
        email: "",
        location: "",
        bio: "",
        image: "https://randomuser.me/api/portraits/men/85.jpg"
      };
      localStorage.setItem(PROFILE_KEY, JSON.stringify(freshProf));
    }

    // restore posts
    const posts = localStorage.getItem(userKey(u, "posts"));
    localStorage.setItem("epiton_user_posts", posts || "[]");

    // restore likes
    const pl = localStorage.getItem(userKey(u, "post_likes"));
    localStorage.setItem(POST_LIKES_KEY, pl || "[]");
    const rl = localStorage.getItem(userKey(u, "reel_likes"));
    localStorage.setItem(REEL_LIKES_KEY, rl || "[]");

    // restore comments
    const pc = localStorage.getItem(userKey(u, "post_comments"));
    localStorage.setItem(POST_COMMENTS_KEY, pc || "{}");
    const rc = localStorage.getItem(userKey(u, "reel_comments"));
    localStorage.setItem(REEL_COMMENTS_KEY, rc || "{}");

    // restore followed
    const fu = localStorage.getItem(userKey(u, "followed"));
    localStorage.setItem(FOLLOWED_USERS_KEY, fu || "[]");

    // restore notifications
    const notif = localStorage.getItem(userKey(u, "notifications"));
    localStorage.setItem(NOTIFICATIONS_KEY, notif || "[]");
  }

  // ── UI helpers ────────────────────────────────────────────────────
  const overlay      = document.getElementById("authOverlay");
  const loginPanel   = document.getElementById("authLoginPanel");
  const createPanel  = document.getElementById("authCreatePanel");
  const switchPanel  = document.getElementById("authSwitchPanel");

  function showPanel(panel) {
    [loginPanel, createPanel, switchPanel].forEach((p) => { if (p) p.hidden = true; });
    if (panel) panel.hidden = false;
  }

  function showOverlay(panel) {
    if (overlay) overlay.hidden = false;
    showPanel(panel || loginPanel);
  }

  function hideOverlay() {
    if (overlay) overlay.hidden = true;
  }

  function showAuthError(elId, msg) {
    const el = document.getElementById(elId);
    if (!el) return;
    el.textContent = msg;
    el.hidden = false;
  }
  function clearAuthError(elId) {
    const el = document.getElementById(elId);
    if (el) { el.textContent = ""; el.hidden = true; }
  }

  // ── Login form ────────────────────────────────────────────────────
  const loginForm = document.getElementById("authLoginForm");
  if (loginForm && !window._useFirebaseAuth) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearAuthError("authError");
      const username = document.getElementById("authUsernameInput")?.value.trim();
      const password = document.getElementById("authPasswordInput")?.value;
      if (!username || !password) { showAuthError("authError", "Please fill in all fields."); return; }
      if (!accountExists(username)) { showAuthError("authError", "No account found. Create one first."); return; }
      if (!verifyAccount(username, password)) { showAuthError("authError", "Incorrect password."); return; }
      doLogin(username);
    });
  }

  // ── Create account form ───────────────────────────────────────────
  const createForm = document.getElementById("authCreateForm");
  if (createForm && !window._useFirebaseAuth) {
    createForm.addEventListener("submit", (e) => {
      e.preventDefault();
      clearAuthError("authCreateError");
      const name     = document.getElementById("authCreateName")?.value.trim();
      const username = document.getElementById("authCreateUsername")?.value.trim();
      const password = document.getElementById("authCreatePassword")?.value;
      if (!name || !username || !password) { showAuthError("authCreateError", "Please fill in all fields."); return; }
      if (!/^[a-zA-Z0-9._]{1,30}$/.test(username)) { showAuthError("authCreateError", "Username: letters, numbers, . and _ only."); return; }
      if (password !== STATIC_PASSWORD) { showAuthError("authCreateError", 'Password must be "Epiton".'); return; }
      if (accountExists(username)) { showAuthError("authCreateError", "Username already taken."); return; }
      createAccount(name, username, password);
      doLogin(username);
    });
  }

  // ── Panel navigation ──────────────────────────────────────────────
  // ── Panel navigation (legacy only) ───────────────────────────────
  if (!window._useFirebaseAuth) {
    const createBtn   = document.getElementById("authCreateAccountBtn");
    const switchBtn   = document.getElementById("authSwitchAccountBtn");
    const backLogin1  = document.getElementById("authBackToLoginBtn");
    const switchBack  = document.getElementById("authSwitchBackBtn");
    const addAccBtn   = document.getElementById("authAddAccountBtn");
    if (createBtn)  createBtn.addEventListener("click",  () => showPanel(createPanel));
    if (switchBtn)  switchBtn.addEventListener("click",  () => { renderSwitchPanel(); showPanel(switchPanel); });
    if (backLogin1) backLogin1.addEventListener("click", () => showPanel(loginPanel));
    if (switchBack) switchBack.addEventListener("click", () => showPanel(loginPanel));
    if (addAccBtn)  addAccBtn.addEventListener("click",  () => showPanel(createPanel));
  }

  // ── Switch panel ──────────────────────────────────────────────────
  function renderSwitchPanel() {
    const list = document.getElementById("authAccountList");
    if (!list) return;
    list.innerHTML = "";
    const accounts = getAccounts();
    const session  = getSession();
    const current  = session ? session.username : null;

    Object.entries(accounts).forEach(([key, acc]) => {
      const item = document.createElement("div");
      item.className = "auth-account-item";
      const avatar = (() => {
        try {
          const saved = JSON.parse(localStorage.getItem(userKey(key, "profile")) || "null");
          return saved && saved.image ? saved.image : "https://randomuser.me/api/portraits/men/85.jpg";
        } catch { return "https://randomuser.me/api/portraits/men/85.jpg"; }
      })();
      item.innerHTML = `
        <img src="${escapeHtml(avatar)}" alt="${escapeHtml(acc.handle)}" />
        <div class="auth-account-info">
          <strong>${escapeHtml(acc.name)}</strong>
          <span>@${escapeHtml(acc.handle)}</span>
        </div>
        ${key === current ? '<div class="auth-account-active-dot"></div>' : ""}
      `;
      item.addEventListener("click", () => {
        if (key === current) { hideOverlay(); return; }
        // save current user's data before switching
        if (current) saveUserData(current);
        doLogin(key);
      });
      list.appendChild(item);
    });

    if (!Object.keys(accounts).length) {
      list.innerHTML = '<p style="text-align:center;color:var(--text-secondary);font-size:13px;">No saved accounts</p>';
    }
  }

  // ── Core login / logout ───────────────────────────────────────────
  function doLogin(username) {
    restoreUserData(username);
    setSession(username);
    hideOverlay();
    // reload all in-memory state from the now-restored localStorage
    loadProfile();
    fillProfileForm();
    renderProfileCard();
    loadLikedPosts();
    loadLikedReels();
    loadPostComments();
    loadReelComments();
    loadFollowedUsers();
    loadNotifications();
    renderPosts();
    // reload reels from IDB + merge cross-account reels
    reels = [...defaultReels].map((r, i) => createSafeReel(r, `default_reel_${i + 1}`));
    initReelsFromDB();
    renderNotifications();
    renderConversationList();
    syncFollowButtons();
    if (typeof renderMyProfilePage === "function") {
      const page = document.getElementById("myProfilePage");
      if (page && !page.hidden) renderMyProfilePage();
    }
    showToast("Welcome back, @" + username + " 👋", "success");
  }

  function doLogout() {
    // Skip legacy logout when Supabase auth is active
    if (window._useFirebaseAuth) return;
    const session = getSession();
    if (session) saveUserData(session.username);
    clearSession();
    showOverlay(loginPanel);
    const uInput = document.getElementById("authUsernameInput");
    const pInput = document.getElementById("authPasswordInput");
    if (uInput) uInput.value = "";
    if (pInput) pInput.value = "";
    clearAuthError("authError");
    closeMyProfilePage();
  }

  // ── Wire logout + switch buttons in profile page ──────────────────
  document.addEventListener("click", (e) => {
    if (window._useFirebaseAuth) return; // Supabase handles these
    if (e.target && e.target.id === "myProfileLogoutBtn") {
      doLogout();
    }
    if (e.target && e.target.id === "myProfileSwitchBtn") {
      closeMyProfilePage();
      renderSwitchPanel();
      showOverlay(switchPanel);
    }
  });

  // ── Boot: require login — no guest auto-login ────────────────────
  if (window._useFirebaseAuth) {
    // Show auth overlay immediately — Firebase module hides it after login
    if (overlay) overlay.hidden = false;
    window._auth = { doLogout, doLogin, getSession, saveUserData };
    window._hideAuthOverlay = hideOverlay;
    // NOTE: The main try/catch init block below handles all rendering
    // Do NOT call renderPosts/renderReels etc here — they run in the init block
  } else {
    // Legacy local auth — require login, no guest
    const session = getSession();
    if (session && accountExists(session.username)) {
      hideOverlay();
    } else {
      clearSession();
      if (overlay) overlay.hidden = false;
    }
  }

  window._auth = { doLogout, doLogin, getSession, saveUserData };
})();


// ===== MOBILE: OVERLAY MANAGEMENT + BOTTOM NAV (Tasks 6–9, 11–14) =====

// ── Task 6: closeAllOverlays + scroll-lock helpers ────────────────
const _openOverlayIds = new Set();

function openOverlay(id) {
  _openOverlayIds.add(id);
  document.body.classList.add("overlay-open");
}

function closeOverlay(id) {
  _openOverlayIds.delete(id);
  if (_openOverlayIds.size === 0) {
    document.body.classList.remove("overlay-open");
  }
}

function closeAllOverlays() {
  // Hide every overlay
  const overlayIds = [
    "messageInbox", "reelsPage", "snapsPage", "notificationsPanel",
    "searchOverlay", "profileEditor", "contactProfileModal", "newMsgModal",
    "storyUploadModal", "storyViewer", "authOverlay", "myProfilePage", "themeStudio",
    "peoplePage"
  ];

  overlayIds.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (id === "messageInbox") {
      el.classList.remove("open");
    } else if (id === "themeStudio") {
      el.classList.remove("is-open");
      el.setAttribute("aria-hidden", "true");
    } else {
      el.hidden = true;
      el.setAttribute("aria-hidden", "true");
    }
  });

  // Reset keyboard-handler inline styles on inbox
  const inbox = document.getElementById("messageInbox");
  if (inbox) {
    inbox.style.height = "";
    inbox.style.transform = "";
  }

  // Clear tracking set and remove scroll-lock
  _openOverlayIds.clear();
  document.body.classList.remove("overlay-open");
}

// ── Task 7: Delegated bottom nav click handler ────────────────────
(function () {
  const bottomNav = document.getElementById("mobileBottomNav");
  if (!bottomNav) return;

  function setActiveNavItem(navKey) {
    bottomNav.querySelectorAll("[data-nav]").forEach((item) => {
      item.classList.toggle("active", item.dataset.nav === navKey);
    });
  }

  bottomNav.addEventListener("click", (e) => {
    const item = e.target.closest("[data-nav]");
    if (!item) return;
    e.preventDefault();
    const nav = item.dataset.nav;

    closeAllOverlays();
    setActiveNavItem(nav);

    switch (nav) {
      case "home":
        // Just close overlays — feed is always behind
        break;

      case "search": {
        const overlay = document.getElementById("searchOverlay");
        if (overlay) {
          overlay.hidden = false;
          overlay.setAttribute("aria-hidden", "false");
          openOverlay("searchOverlay");
          const input = document.getElementById("searchInput");
          if (input) setTimeout(() => input.focus(), 80);
        }
        break;
      }

      case "reels": {
        const page = document.getElementById("reelsPage");
        if (page) {
          page.hidden = false;
          openOverlay("reelsPage");
          // auto-play first video
          const firstVid = document.querySelector("#reelsFeed .reel-video");
          if (firstVid) { firstVid.muted = true; firstVid.play().catch(() => {}); }
        }
        break;
      }

      case "snaps": {
        const page = document.getElementById("snapsPage");
        if (page) {
          page.hidden = false;
          page.setAttribute("aria-hidden", "false");
          openOverlay("snapsPage");
        }
        break;
      }

      case "dm": {
        const inbox = document.getElementById("messageInbox");
        if (inbox) {
          inbox.classList.add("open");
          openOverlay("messageInbox");
          setMobileChatView(false);
        }
        break;
      }

      case "notifications": {
        const panel = document.getElementById("notificationsPanel");
        if (panel) {
          panel.hidden = false;
          panel.setAttribute("aria-hidden", "false");
          openOverlay("notificationsPanel");
          renderNotifications();
        }
        break;
      }

      case "profile": {
        openMyProfilePage();
        openOverlay("myProfilePage");
        break;
      }

      case "people": {
        if (window._openPeoplePage) {
          window._openPeoplePage();
        } else {
          const page = document.getElementById("peoplePage");
          if (page) {
            page.hidden = false;
            page.setAttribute("aria-hidden", "false");
            openOverlay("peoplePage");
          }
        }
        break;
      }
    }
  });
})();

// ── Task 8: Mobile nav badge updates ─────────────────────────────
function updateMobNavBadge(type, count) {
  // type: "dm" | "notifications"
  const badgeId = type === "dm" ? "mobDmBadge" : type === "notifications" ? "mobNotifBadge" : null;
  if (!badgeId) return;
  const badge = document.getElementById(badgeId);
  if (!badge) return;
  const safeCount = Math.max(0, Number(count) || 0);
  if (safeCount > 0) {
    badge.textContent = safeCount > 99 ? "99+" : String(safeCount);
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// Patch updateNotifBadge to also update mobile badge
const _origUpdateNotifBadge = typeof updateNotifBadge === "function" ? updateNotifBadge : null;
function updateNotifBadge() {
  // Update sidebar badge
  const badgeEl = document.getElementById("notifNavBadge");
  if (badgeEl) {
    const count = notifications.length;
    if (count > 0) {
      badgeEl.textContent = count > 99 ? "99+" : String(count);
      badgeEl.style.display = "inline-flex";
    } else {
      badgeEl.style.display = "none";
    }
  }
  // Update mobile bottom nav badge
  updateMobNavBadge("notifications", notifications.length);
}

// Patch renderUnreadCount to also update mobile DM badge
const _origRenderUnreadCount = typeof renderUnreadCount === "function" ? renderUnreadCount : null;
function renderUnreadCount() {
  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0);
  if (unreadCountEl) unreadCountEl.textContent = totalUnread > 0 ? `${totalUnread} unread` : "";
  updateMobNavBadge("dm", totalUnread);
}

// ── Task 9: visualViewport keyboard handler ───────────────────────
function handleViewportResize() {
  if (!isMobileViewport()) return;
  const inbox = document.getElementById("messageInbox");
  if (!inbox) return;
  const vv = window.visualViewport;
  if (!vv) return;
  const keyboardHeight = window.innerHeight - vv.height;
  inbox.style.height = vv.height + "px";
  inbox.style.transform = keyboardHeight > 0 ? `translateY(-${keyboardHeight}px)` : "";
}

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", handleViewportResize);
} else {
  // Fallback: window resize
  window.addEventListener("resize", () => {
    if (!isMobileViewport()) return;
    const inbox = document.getElementById("messageInbox");
    if (!inbox) return;
    const clientH = document.documentElement.clientHeight;
    const keyboardHeight = window.innerHeight - clientH;
    inbox.style.height = clientH + "px";
    inbox.style.transform = keyboardHeight > 0 ? `translateY(-${keyboardHeight}px)` : "";
  });
}

// ── Task 11: Chat back-button + scroll-to-bottom ──────────────────
// Ensure chatBackBtn closes chat panel and restores inbox sidebar
(function () {
  const backBtn = document.getElementById("chatBackBtn");
  if (!backBtn) return;
  // Override: remove any existing listener by replacing the element clone
  const newBackBtn = backBtn.cloneNode(true);
  backBtn.parentNode.replaceChild(newBackBtn, backBtn);
  newBackBtn.addEventListener("click", () => {
    setMobileChatView(false);
    closeOverlay("chat-panel");
  });
})();

// renderChatPanel already scrolls to bottom (chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight)
// No patch needed — the original implementation handles this correctly.

// Also scroll to bottom after sending a message — patch chatForm submit
(function () {
  const form = document.getElementById("chatForm");
  if (!form) return;
  form.addEventListener("submit", () => {
    // After the existing handler runs, scroll to bottom
    setTimeout(() => {
      if (chatMessagesEl) chatMessagesEl.scrollTop = chatMessagesEl.scrollHeight;
    }, 0);
  });
})();

// ── Task 12: Wire close buttons for overlays opened via bottom nav ─
// Reels close buttons
(function () {
  ["reelsCloseBtn", "reelsMobileCloseBtn", "reelsCloseBtnDesktop"].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener("click", () => {
      const page = document.getElementById("reelsPage");
      if (page) { page.hidden = true; }
      closeOverlay("reelsPage");
    });
  });

  // Snaps close button
  const snapsClose = document.getElementById("snapsCloseBtn");
  if (snapsClose) {
    snapsClose.addEventListener("click", () => {
      const page = document.getElementById("snapsPage");
      if (page) { page.hidden = true; page.setAttribute("aria-hidden", "true"); }
      closeOverlay("snapsPage");
    });
  }

  // Notifications close button
  const notifClose = document.getElementById("notificationsPanelCloseBtn");
  if (notifClose) {
    notifClose.addEventListener("click", () => {
      const panel = document.getElementById("notificationsPanel");
      if (panel) { panel.hidden = true; panel.setAttribute("aria-hidden", "true"); }
      closeOverlay("notificationsPanel");
    });
  }

  // Search close button
  const searchClose = document.getElementById("searchCloseBtn");
  if (searchClose) {
    searchClose.addEventListener("click", () => {
      const overlay = document.getElementById("searchOverlay");
      if (overlay) { overlay.hidden = true; }
      closeOverlay("searchOverlay");
    });
  }

  // Inbox close button
  const inboxClose = document.getElementById("inboxCloseBtn");
  if (inboxClose) {
    inboxClose.addEventListener("click", () => {
      const inbox = document.getElementById("messageInbox");
      if (inbox) { inbox.classList.remove("open"); }
      closeOverlay("messageInbox");
    });
  }

  // DM → People button
  const dmPeopleBtn = document.getElementById("dmPeopleBtn");
  if (dmPeopleBtn) {
    dmPeopleBtn.addEventListener("click", () => {
      // Close inbox first
      const inbox = document.getElementById("messageInbox");
      if (inbox) inbox.classList.remove("open");
      closeOverlay("messageInbox");
      // Open people page
      const peoplePage = document.getElementById("peoplePage");
      if (peoplePage) {
        peoplePage.hidden = false;
        peoplePage.setAttribute("aria-hidden", "false");
        if (typeof openOverlay === "function") openOverlay("peoplePage");
        if (window._loadPeoplePage) window._loadPeoplePage();
        else setTimeout(() => { if (window._loadPeoplePage) window._loadPeoplePage(); }, 1500);
      }
    });
  }

  // My profile close button
  const myProfileClose = document.getElementById("myProfileCloseBtn");
  if (myProfileClose) {
    myProfileClose.addEventListener("click", () => {
      closeMyProfilePage();
      closeOverlay("myProfilePage");
    });
  }
})();

// ── Task 13: Profile save + theme selection already wired ─────────
// Profile form submit already calls saveProfile() → localStorage[PROFILE_KEY]
// Theme switches already call applyTheme() → document.documentElement.dataset.theme
// Both verified as working — no additional wiring needed.

// ── Task 14: Search overlay already uses position:fixed inset:0 ───
// Confirmed in CSS: #searchOverlay { position: fixed; inset: 0; z-index: 400 }
// searchInput.focus() called in bottom nav handler above.
// No additional changes needed.

// ── Initial badge sync on load ────────────────────────────────────
(function () {
  // Sync DM badge
  const totalUnread = conversations.reduce((sum, c) => sum + c.unread, 0);
  updateMobNavBadge("dm", totalUnread);
  // Sync notifications badge
  updateMobNavBadge("notifications", notifications.length);
})();
