import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://blogs.jrtilak.dev/",
    title: "jrtilak.dev",
    description: "Blogs of jrtilak.dev",
    author: "jrtilak",
    profile: "https://jrtilak.dev",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Kathmandu",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/jrtilak/blogs/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/jrtilak" },
    { name: "x",        url: "https://x.com/jrtilak" },
    { name: "linkedin", url: "https://www.linkedin.com/in/jrtilak/" },
    { name: "mail",     url: "mailto:jrtilak@contact.com" },
  ],
  shareLinks: [
    { name: "whatsapp", url: "https://wa.me/?text=" },
    { name: "facebook", url: "https://www.facebook.com/sharer.php?u=" },
    { name: "x",        url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "pinterest", url: "https://pinterest.com/pin/create/button/?url=" },
    { name: "mail",     url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
