/** @typedef {"dark" | "light"} ThemeName */
/** @typedef {Record<string, Record<string, string>>} ThemeGroups */

/** @type {Record<ThemeName, ThemeGroups>} */
export const themes = {
  dark: {
    page: {
      "--bg-primary": "#10091C",
      "--bg-secondary": "#170D27",
      "--text-primary": "#FFF8FF",
      "--text-secondary": "#C9BCD8",
      "--border": "#3D2855",
    },
    surfaces: {
      "--surface": "#19102B",
      "--surface-elevated": "#241438",
      "--surface-accent": "#311344",
      "--surface-hover": "#28123A",
      "--surface-pink": "#3B102B",
      "--surface-blue": "#0B2939",
      "--surface-green": "#0D3028",
      "--surface-yellow": "#352912",
      "--surface-badge": "#281039",
      "--surface-map-grid": "#3C2854",
    },
    brand: {
      "--purple": "#D05BFF",
      "--purple-deep": "#A725FF",
      "--pink": "#FF3D9A",
      "--blue": "#12DFFF",
      "--violet-light": "#E1A5FF",
      "--coral": "#FF785B",
      "--flag-red": "#FF476F",
      "--flag-orange": "#FF8D42",
      "--flag-yellow": "#FFE04A",
      "--flag-green": "#38F2A5",
      "--flag-blue": "#12DFFF",
      "--flag-violet": "#A725FF",
      "--gradient-pride": "linear-gradient(90deg, #FF476F 0%, #FF8D42 18%, #FFE04A 36%, #38F2A5 54%, #12DFFF 72%, #A725FF 100%)",
      "--gradient-pride-mark": "linear-gradient(135deg, #FF476F 0 16%, #FF8D42 16% 33%, #FFE04A 33% 50%, #38F2A5 50% 67%, #12DFFF 67% 84%, #A725FF 84%)",
      "--border-pride": "rgba(255, 248, 255, 0.42)",
      "--pride-shadow": "rgba(208, 91, 255, 0.22)",
      "--brand-icon-shadow": "rgba(16, 9, 28, 0.55)",
    },
    status: {
      "--success": "#38F2A5",
      "--warning": "#FFE04A",
      "--danger": "#FF5578",
      "--danger-light": "#FF9AAF",
      "--success-light": "#91FFD0",
      "--error-border": "#C33158",
      "--error-surface": "#351022",
      "--success-border": "#23885D",
      "--success-surface": "#103326",
    },
    borders: {
      "--border-accent": "#9146C7",
      "--border-pink": "#B82E73",
      "--border-blue": "#167F99",
      "--border-green": "#228B63",
      "--border-yellow": "#A77D22",
      "--border-purple": "#8540B7",
      "--border-badge": "#9D3AC3",
      "--border-toast": "#8540B7",
    },
    buttons: {
      "--button-text": "#190824",
      "--button-hover": "#E996FF",
    },
    home: {
      "--hero-surface": "#130A23",
      "--hero-ring": "#6C2BA0",
      "--hero-ring-inner": "#A134C1",
      "--hero-ring-pink": "#E34591",
      "--gradient-howto": "linear-gradient(135deg, rgba(86, 35, 122, 0.24), var(--surface) 72%)",
      "--home-hero-background": "radial-gradient(ellipse at 78% 42%, rgba(163, 37, 255, 0.23), transparent 30rem), radial-gradient(ellipse at 4% 5%, rgba(255, 61, 154, 0.16), transparent 30rem)",
      "--hero-visual-background": "radial-gradient(circle at 34% 25%, var(--hero-visual-pink), transparent 28%), radial-gradient(circle at 72% 75%, var(--hero-visual-blue), transparent 32%), var(--hero-surface)",
    },
    gradients: {
      "--gradient-vibrant": "linear-gradient(115deg, #FF476F 0%, #FF8D42 20%, #FFE04A 40%, #38F2A5 60%, #12DFFF 80%, #A725FF 100%)",
      "--gradient-cool": "linear-gradient(130deg, #12DFFF 0%, #A725FF 100%)",
      "--gradient-surface": "linear-gradient(145deg, rgba(72, 32, 99, 0.62), rgba(24, 13, 40, 0.96) 58%)",
      "--gradient-surface-hover": "linear-gradient(145deg, rgba(100, 34, 138, 0.58), rgba(30, 14, 47, 0.98) 66%)",
      "--gradient-rights-hero": "linear-gradient(130deg, rgba(86, 35, 122, 0.52), rgba(24, 13, 39, 0.96) 68%)",
      "--gradient-footer": "linear-gradient(180deg, rgba(18, 11, 33, 0.82), rgba(11, 7, 21, 0.98))",
      "--map-canvas-background": "radial-gradient(ellipse at 25% 35%, var(--map-glow-purple), transparent 42%), radial-gradient(ellipse at 76% 74%, var(--map-glow-blue), transparent 38%), linear-gradient(145deg, #180B2A, #0E0A1B 70%)",
    },
    navigation: {
      "--header-surface": "rgba(11, 7, 21, 0.86)",
      "--header-border": "rgba(208, 91, 255, 0.26)",
      "--footer-border": "rgba(208, 91, 255, 0.28)",
    },
    map: {
      "--map-glow-purple": "rgba(167, 37, 255, 0.21)",
      "--map-glow-blue": "rgba(0, 205, 255, 0.12)",
      "--map-canvas-shadow": "inset 0 0 55px rgba(93, 26, 132, 0.2), 0 20px 50px rgba(3, 1, 10, 0.25)",
      "--map-label-surface": "rgba(11, 9, 18, 0.7)",
      "--map-marker-border": "rgba(14, 8, 26, 0.94)",
      "--map-pattern-background": "repeating-linear-gradient(32deg, transparent 0 45px, var(--map-pattern-purple) 46px 48px, transparent 49px 91px), repeating-linear-gradient(122deg, transparent 0 68px, var(--map-pattern-blue) 69px 71px, transparent 72px 130px)",
      "--map-grid-background": "linear-gradient(var(--map-grid-fill) 1px, transparent 1px), linear-gradient(90deg, var(--map-grid-fill) 1px, transparent 1px)",
    },
    effects: {
      "--glow-purple": "0 0 28px rgba(186, 55, 255, 0.24)",
      "--glow-pink": "0 0 24px rgba(255, 61, 154, 0.24)",
      "--shadow-card": "0 12px 32px rgba(3, 1, 10, 0.18)",
      "--shadow-panel": "0 16px 38px rgba(3, 1, 10, 0.2)",
      "--shadow-brand": "0 0 14px rgba(167, 37, 255, 0.2)",
      "--button-shadow": "0 4px 14px rgba(186, 55, 255, 0.16)",
      "--button-shadow-hover": "0 6px 18px rgba(186, 55, 255, 0.24)",
      "--hover-overlay": "rgba(196, 168, 218, 0.08)",
      "--active-hover-overlay": "rgba(255, 61, 154, 0.08)",
      "--rights-orbit-border": "rgba(208, 91, 255, 0.2)",
      "--rights-orbit-glow": "rgba(208, 91, 255, 0.04)",
      "--rights-orbit-glow-soft": "rgba(208, 91, 255, 0.025)",
      "--hero-visual-pink": "rgba(255, 61, 154, 0.24)",
      "--hero-visual-blue": "rgba(18, 223, 255, 0.18)",
      "--hero-visual-shadow": "0 0 70px rgba(167, 37, 255, 0.2), inset 0 0 44px rgba(167, 37, 255, 0.13)",
      "--hero-ring-shadow": "0 0 22px rgba(208, 91, 255, 0.22)",
      "--hero-ring-pink-shadow": "0 0 26px rgba(255, 61, 154, 0.22)",
      "--hero-orb-shadow": "0 0 44px rgba(255, 61, 154, 0.45)",
      "--map-pattern-purple": "rgba(194, 137, 255, 0.035)",
      "--map-pattern-blue": "rgba(18, 223, 255, 0.03)",
      "--map-grid-border": "rgba(208, 91, 255, 0.13)",
      "--map-grid-fill": "rgba(208, 91, 255, 0.025)",
      "--map-active-ring": "rgba(255, 255, 255, 0.08)",
    },
  },
  light: {
    page: {
      "--bg-primary": "#E8D8F0",
      "--bg-secondary": "#DDCBE8",
      "--text-primary": "#302238",
      "--text-secondary": "#574A61",
      "--border": "#CFB9DB",
    },
    surfaces: {
      "--surface": "#F1E2F6",
      "--surface-elevated": "#EFD9F4",
      "--surface-accent": "#E2C4ED",
      "--surface-hover": "#E8CDEF",
      "--surface-pink": "#F5D4E5",
      "--surface-blue": "#D2E3F5",
      "--surface-green": "#D5EBD9",
      "--surface-yellow": "#F5E7BA",
      "--surface-badge": "#E5CEEF",
      "--surface-map-grid": "#D2BDE0",
    },
    brand: {
      "--purple": "#762D92",
      "--purple-deep": "#D7B5E5",
      "--pink": "#A33273",
      "--blue": "#2F5E96",
      "--violet-light": "#69377F",
      "--coral": "#A34831",
      "--flag-red": "#E83E76",
      "--flag-orange": "#F28C28",
      "--flag-yellow": "#F5C842",
      "--flag-green": "#27B889",
      "--flag-blue": "#2E98D1",
      "--flag-violet": "#8B61C5",
      "--gradient-pride": "linear-gradient(90deg, #E83E76 0%, #F28C28 18%, #F5C842 36%, #27B889 54%, #2E98D1 72%, #8B61C5 100%)",
      "--gradient-pride-mark": "linear-gradient(135deg, #E83E76 0 16%, #F28C28 16% 33%, #F5C842 33% 50%, #27B889 50% 67%, #2E98D1 67% 84%, #8B61C5 84%)",
      "--border-pride": "rgba(48, 34, 56, 0.28)",
      "--pride-shadow": "rgba(118, 45, 146, 0.18)",
      "--brand-icon-shadow": "rgba(48, 34, 56, 0.35)",
    },
    status: {
      "--success": "#34704A",
      "--warning": "#775600",
      "--danger": "#A0334E",
      "--danger-light": "#87223C",
      "--success-light": "#316947",
      "--error-border": "#D79CAE",
      "--error-surface": "#F8E1EA",
      "--success-border": "#A0C7AA",
      "--success-surface": "#E0F0E4",
    },
    borders: {
      "--border-accent": "#B58BC9",
      "--border-pink": "#D59AB7",
      "--border-blue": "#9FBADD",
      "--border-green": "#A4C7AC",
      "--border-yellow": "#D4BE79",
      "--border-purple": "#AD82C3",
      "--border-badge": "#AD82C3",
      "--border-toast": "#AD82C3",
    },
    buttons: {
      "--button-text": "#FFFFFF",
      "--button-hover": "#5A1D70",
    },
    home: {
      "--hero-surface": "#E9D8F1",
      "--hero-ring": "#AA6BC1",
      "--hero-ring-inner": "#9149AF",
      "--hero-ring-pink": "#CF5C95",
      "--gradient-howto": "linear-gradient(125deg, #DCC0EB 0%, #F0C9DC 52%, #CEDFF3 100%)",
      "--home-hero-background": "radial-gradient(ellipse at 82% 30%, rgba(173, 71, 194, 0.42), transparent 31rem), radial-gradient(ellipse at 12% 18%, rgba(235, 93, 154, 0.36), transparent 30rem), radial-gradient(ellipse at 57% 96%, rgba(76, 142, 207, 0.3), transparent 32rem), linear-gradient(120deg, #E4D0EF, #F2D2E2 60%, #D5E4F4)",
      "--hero-visual-background": "radial-gradient(circle at 30% 26%, rgba(230, 107, 163, 0.78), transparent 32%), radial-gradient(circle at 72% 72%, rgba(83, 145, 211, 0.64), transparent 36%), linear-gradient(140deg, #D3B4E4, #EBC4D9 58%, #C9DDF2)",
    },
    gradients: {
      "--gradient-vibrant": "linear-gradient(115deg, #E83E76 0%, #F28C28 20%, #F5C842 40%, #27B889 60%, #2E98D1 80%, #8B61C5 100%)",
      "--gradient-cool": "linear-gradient(130deg, #2F5E96 0%, #762D92 100%)",
      "--gradient-surface": "linear-gradient(145deg, #F1E2F6 0%, #DFC9EB 100%)",
      "--gradient-surface-hover": "linear-gradient(145deg, #F2DDF0 0%, #DABBE8 100%)",
      "--gradient-rights-hero": "linear-gradient(125deg, #D8B9E9 0%, #EFC6DA 58%, #D0E0F3 100%)",
      "--gradient-footer": "linear-gradient(180deg, #DED0E9 0%, #D2C0E0 100%)",
    },
    navigation: {
      "--header-surface": "rgba(232, 216, 240, 0.97)",
      "--header-border": "rgba(118, 45, 146, 0.3)",
      "--footer-border": "rgba(118, 45, 146, 0.32)",
    },
    map: {
      "--map-canvas-background": "radial-gradient(ellipse at 24% 28%, rgba(173, 91, 196, 0.5), transparent 42%), radial-gradient(ellipse at 76% 75%, rgba(73, 143, 207, 0.42), transparent 40%), linear-gradient(135deg, #E2CDEE, #D4E3F3)",
      "--map-pattern-background": "repeating-linear-gradient(32deg, transparent 0 45px, var(--map-pattern-purple) 46px 48px, transparent 49px 91px), repeating-linear-gradient(122deg, transparent 0 68px, var(--map-pattern-blue) 69px 71px, transparent 72px 130px)",
      "--map-grid-background": "linear-gradient(var(--map-grid-fill) 1px, transparent 1px), linear-gradient(90deg, var(--map-grid-fill) 1px, transparent 1px)",
      "--map-canvas-shadow": "inset 0 0 32px rgba(118, 45, 146, 0.15), 0 16px 36px rgba(65, 45, 76, 0.14)",
      "--map-label-surface": "rgba(241, 226, 246, 0.95)",
      "--map-marker-border": "rgba(241, 226, 246, 0.98)",
    },
    effects: {
      "--glow-purple": "0 4px 18px rgba(118, 45, 146, 0.23)",
      "--glow-pink": "0 4px 18px rgba(163, 50, 115, 0.2)",
      "--shadow-card": "0 6px 18px rgba(65, 45, 76, 0.12)",
      "--shadow-panel": "0 10px 26px rgba(65, 45, 76, 0.16)",
      "--shadow-brand": "0 0 18px rgba(118, 45, 146, 0.28)",
      "--button-shadow": "0 4px 14px rgba(118, 45, 146, 0.27)",
      "--button-shadow-hover": "0 7px 18px rgba(118, 45, 146, 0.34)",
      "--hover-overlay": "rgba(118, 45, 146, 0.1)",
      "--active-hover-overlay": "rgba(163, 50, 115, 0.13)",
      "--rights-orbit-border": "rgba(118, 45, 146, 0.28)",
      "--rights-orbit-glow": "rgba(190, 105, 207, 0.16)",
      "--rights-orbit-glow-soft": "rgba(236, 117, 169, 0.12)",
      "--hero-visual-pink": "rgba(230, 107, 163, 0.42)",
      "--hero-visual-blue": "rgba(83, 145, 211, 0.34)",
      "--hero-visual-shadow": "0 0 70px rgba(118, 45, 146, 0.24), inset 0 0 44px rgba(190, 105, 207, 0.24)",
      "--hero-ring-shadow": "0 0 22px rgba(145, 73, 175, 0.32)",
      "--hero-ring-pink-shadow": "0 0 26px rgba(207, 92, 149, 0.32)",
      "--hero-orb-shadow": "0 0 44px rgba(207, 92, 149, 0.48)",
      "--map-pattern-purple": "rgba(118, 45, 146, 0.09)",
      "--map-pattern-blue": "rgba(47, 94, 150, 0.075)",
      "--map-grid-border": "rgba(118, 45, 146, 0.25)",
      "--map-grid-fill": "rgba(118, 45, 146, 0.075)",
      "--map-active-ring": "rgba(118, 45, 146, 0.23)",
    },
  },
};

/** @param {ThemeName} themeName */
function getThemeVariables(themeName) {
  const groups = Object.values(themes[themeName]);
  return Object.assign({}, ...groups);
}

export function createThemeStylesheet() {
  return Object.entries(themes).map(([themeName]) => {
    const variables = getThemeVariables(/** @type {ThemeName} */ (themeName));
    const declarations = Object.entries(variables)
      .map(([property, value]) => `  ${property}: ${value};`)
      .join("\n");
    return `:root[data-theme="${themeName}"] {\n  color-scheme: ${themeName};\n${declarations}\n}`;
  }).join("\n");
}

/** @param {ThemeName} themeName */
export function applyTheme(themeName) {
  const root = document.documentElement;
  root.dataset.theme = themeName;
  root.style.colorScheme = themeName;
}

export function getSavedTheme() {
  try {
    return localStorage.getItem("espacos-acolhedores-theme") === "light" ? "light" : "dark";
  } catch (error) {
    console.error("Não foi possível carregar a preferência de tema.", error);
    return "dark";
  }
}
