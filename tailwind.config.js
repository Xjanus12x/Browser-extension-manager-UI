/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Body
        "card-bg": "var(--card-bg)",

        // Extension header
        "header-background": "var(--header-background)",
        "logo-fill": "var(--logo-fill)",
        "logo-text-fill": "var(--logo-text-fill)",
        "theme-switcher-background": "var(--theme-switcher-background)",
        "theme-switcher-focus-background":
          "var(--theme-switcher-focus-background)",
        "theme-switcher-hover-background":
          "var(--theme-switcher-hover-background)",
        "theme-switcher-ring": "var(--theme-switcher-ring)",

        // Extension grid
        "extension-grid-title": "var(--extension-grid-title)",

        // Card
        "card-border": "var(--card-border)",
        "card-title-foreground": "var(--card-title-foreground)",
        "card-description-foreground": "var(--card-description-foreground)",

        // Button
        "card-btn-background": "var(--card-btn-background)",
        "card-btn-border": "var(--card-btn-border)",
        "card-btn-hover-border": "var(--card-btn-hover-border)",
        "card-btn-focus-border": "var(--card-btn-focus-border)",
        "card-btn-ring": "var(--card-btn-ring)",
        "card-btn-foreground": "var(--card-btn-foreground)",
        "card-btn-hover-foreground": "var(--card-btn-hover-foreground)",
        "card-btn-hover-background": "var(--card-btn-hover-background)",
        "card-btn-focus-background": "var(--card-btn-focus-background)",

        // Filter Buttons
        "filter-btn-ring": "var(--filter-btn-ring)",
        "filter-btn-focus-border": "var(--filter-btn-focus-border)",
        "filter-btn-active-border": "var(--filter-btn-active-border)",
        "filter-btn-inactive-border": "var(--filter-btn-inactive-border)",
        "filter-btn-active-background": "var(--filter-btn-active-background)",
        "filter-btn-inactive-background":
          "var(--filter-btn-inactive-background)",
        "filter-btn-focus-background": "var(--filter-btn-focus-background)",
        "filter-btn-inactive-hover-background":
          "var(--filter-btn-inactive-hover-background)",
        "filter-btn-active-hover-background":
          "var(--filter-btn-active-hover-background)",
        "filter-btn-active-foreground": "var(--filter-btn-active-foreground)",
        "filter-btn-inactive-foreground":
          "var(--filter-btn-inactive-foreground)",

        // Toggle
        "toggle-ring": "var(--toggle-ring)",
        "toggle-background": "var(--toggle-background)",
        "toggle-checked-background": "var(--toggle-checked-background)",
        "toggle-thumb-color": "var(--toggle-thumb-color)",
        "toggle-thumb-border": "var(--toggle-thumb-border)",
      },
      boxShadow: {
        "header-shadow": "var(--header-shadow)",
      },
    },
  },
  plugins: [],
};
