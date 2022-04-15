const budgets = [
  {
    id: 0,
    value: "0-500",
    title: "$0 - $500",
  },
  {
    id: 1,
    value: "500-2500",
    title: "$500 - $2.5k",
  },
  {
    id: 2,
    value: "2500-5000",
    title: "$2.5k - $5k",
  },
  {
    id: 3,
    value: "5000-10000",
    title: "$5k - $10k",
  },
  {
    id: 4,
    value: "10000",
    title: "$10k+",
  },
  {
    id: 5,
    value: "undefined",
    title: "Not Sure",
  },
];

const completionStatus = [
  { id: 0, value: "just_an_idea", title: "Just an Idea" },
  { id: 1, value: "design_idea", title: "Design + Idea" },
  { id: 2, value: "code_design", title: "Code + Design" },
  { id: 3, value: "some_sketches", title: "Some Sketches" },
  { id: 4, value: "some_code", title: "Some Code" },
  { id: 5, value: "existing_live_app", title: "Existing/Live App" },
];

const events = [
  {
    title: "All Day Event",
    start: "2021-02-01",
  },
  {
    title: "Long Event",
    start: "2021-02-07",
    end: "2021-02-10",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2021-02-09T16:00:00+00:00",
  },
  {
    groupId: "999",
    title: "Repeating Event",
    start: "2021-02-16T16:00:00+00:00",
  },
  {
    title: "Conference",
    start: "2021-02-13",
    end: "2021-02-15",
  },
  {
    title: "Meeting",
    start: "2021-02-14T10:30:00+00:00",
    end: "2021-02-14T12:30:00+00:00",
  },
  {
    title: "Lunch",
    start: "2021-02-14T12:00:00+00:00",
  },
  {
    title: "Birthday Party",
    start: "2021-02-15T07:00:00+00:00",
  },
  {
    url: "http://google.com/",
    title: "Click for Google",
    start: "2021-02-28",
  },
  {
    title: "Meeting",
    start: "2021-02-14T14:30:00+00:00",
  },
  {
    title: "Happy Hour",
    start: "2021-02-14T17:30:00+00:00",
  },
  {
    title: "Dinner",
    start: "2021-02-14T20:00:00+00:00",
  },
];

const features = [
  { id: 0, value: "news_feeds", title: "News Feeds" },
  { id: 1, value: "google_maps", title: "Google Maps" },
  { id: 2, value: "pay_portals", title: "Pay Portals" },
  { id: 3, value: "order_online", title: "Order Online" },
  { id: 4, value: "user_logins", title: "User Logins" },
  { id: 5, value: "api_integrations", title: "API Integrations" },
  { id: 6, value: "blog_posts", title: "Blog Posts" },
  { id: 7, value: "nft_crypto", title: "NFT's & Crypto" },
  { id: 8, value: "landing_pages", title: "Landing Pages" },
  { id: 9, value: "contact_forms", title: "Contact Forms" },
  { id: 10, value: "databases", title: "Databases" },
  { id: 11, value: "video_stream", title: "Video & Stream" },
  { id: 12, value: "cms", title: "CMS" },
  { id: 13, value: "breadcrumbs", title: "Breadcrumbs" },
  { id: 14, value: "top_navigation", title: "Top Navigation" },
  { id: 15, value: "seo_keywords", title: "SEO/Keywords" },
  { id: 16, value: "content_writing", title: "Content Writing" },
  { id: 17, value: "search_bars", title: "Search Bars" },
  { id: 18, value: "website_building", title: "Website Building" },
  { id: 19, value: "shopping_carts", title: "Shopping Carts" },
  { id: 20, value: "wp_plugins", title: "WP Plugins" },
  { id: 21, value: "cta", title: "Call to Action" },
  { id: 22, value: "other_platform", title: "Other Platform" },
  { id: 23, value: "slideshows", title: "Slideshows" },
  { id: 24, value: "ui_ux_design", title: "UI/UX Design" },
  { id: 25, value: "online_chat", title: "Online Chat" },
  { id: 26, value: "site_redesign", title: "Site Redesign" },
];

const platforms = [
  {
    id: 0,
    value: "shopify",
    projectType: "website",
    title: "Shopify",
  },
  {
    id: 1,
    value: "wordpress",
    projectType: "website",
    title: "WordPress",
  },
  {
    id: 2,
    value: "wix_other",
    projectType: "website",
    title: "Wix/Other",
  },
  {
    id: 3,
    value: "ios",
    projectType: "mobile_app",
    title: "iOS",
  },
  {
    id: 4,
    value: "android",
    projectType: "mobile_app",
    title: "Android",
  },
  {
    id: 5,
    value: "native",
    projectType: "mobile_app",
    title: "Native (both)",
  },
];

const projectTypeData = [
  {
    id: 0,
    value: "website",
    title: "Website",
  },
  {
    id: 1,
    value: "mobile_app",
    title: "Mobile App",
  },
  {
    id: 2,
    value: "logo_design",
    title: "Logo Design",
  },
  {
    id: 3,
    value: "web_app",
    title: "Web App",
  },
  {
    id: 4,
    value: "database",
    title: "Database",
  },
  {
    id: 5,
    value: "architecture",
    title: "Architecture",
  },
];

export {
  budgets,
  completionStatus,
  events,
  features,
  platforms,
  projectTypeData,
};
