import i18n from "sveltekit-i18n";

export const languages = [
  { key: "common.en", locale: "en" },
  { key: "common.de", locale: "de" },
];

const config = {
  loaders: [
    {
      locale: "en",
      key: "common",
      loader: async () => (await import("./languages/common/en.json")).default,
    },
    {
      locale: "de",
      key: "common",
      loader: async () => (await import("./languages/common/de.json")).default,
    },
    {
      locale: "en",
      key: "home",
      loader: async () => (await import("./languages/home/en.json")).default,
    },
    {
      locale: "de",
      key: "home",
      loader: async () => (await import("./languages/home/de.json")).default,
    },
    {
      locale: "en",
      key: "login",
      loader: async () => (await import("./languages/login/en.json")).default,
    },
    {
      locale: "de",
      key: "login",
      loader: async () => (await import("./languages/login/de.json")).default,
    },
    {
      locale: "en",
      key: "logout",
      loader: async () => (await import("./languages/logout/en.json")).default,
    },
    {
      locale: "de",
      key: "logout",
      loader: async () => (await import("./languages/logout/de.json")).default,
    },
    {
      locale: "en",
      key: "profile",
      loader: async () => (await import("./languages/profile/en.json")).default,
    },
    {
      locale: "de",
      key: "profile",
      loader: async () => (await import("./languages/profile/de.json")).default,
    },
    {
      locale: "en",
      key: "admin",
      loader: async () => (await import("./languages/admin/en.json")).default,
    },
    {
      locale: "de",
      key: "admin",
      loader: async () => (await import("./languages/admin/de.json")).default,
    },
    {
      locale: "en",
      key: "seo",
      loader: async () => (await import("./languages/seo/en.json")).default,
    },
    {
      locale: "de",
      key: "seo",
      loader: async () => (await import("./languages/seo/de.json")).default,
    },
    {
      locale: "en",
      key: "imprint",
      loader: async () => (await import("./languages/imprint/en.json")).default,
    },
    {
      locale: "de",
      key: "imprint",
      loader: async () => (await import("./languages/imprint/de.json")).default,
    },
    {
      locale: "en",
      key: "privacy",
      loader: async () => (await import("./languages/privacy/en.json")).default,
    },
    {
      locale: "de",
      key: "privacy",
      loader: async () => (await import("./languages/privacy/de.json")).default,
    },
  ],
};

export const {
  t,
  loading,
  locales,
  locale,
  translations,
  loadTranslations,
  addTranslations,
  setLocale,
  setRoute,
} = new i18n(config);
