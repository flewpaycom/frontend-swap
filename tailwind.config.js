/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        flewPay: {
          primary: "#6b4af0",
          "primary-focus": "#3C00FF",
          "primary-content": "#ffffff",
          secondary: "#4a6bf0",
          "secondary-focus": "#3C00FF",
          "secondary-content": "#ffffff",
          accent: "#f0a54a",
          "accent-focus": "#f0d4a4",
          "accent-content": "#ffffff",
          neutral: "#ffffff",
          "neutral-focus": "#2a2e37",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f9fafb",
          "base-300": "#ced3d9",
          "base-content": "#1e2734",
          info: "#1c92f2",
          success: "#4af084",
          warning: "#ff9900",
          error: "#ff5724",
          "--rounded-box": "1rem",
          "--rounded-btn": ".5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": ".25s",
          "--animation-input": ".2s",
          "--btn-text-case": "uppercase",
          "--navbar-padding": ".5rem",
          "--border-btn": "1px",
        },
      },
    ],
  },
}
