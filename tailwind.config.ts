import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,edge}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat"', "system-ui"],
        nunito: ['"Nunito"', "system-ui"],
        "noto-sans": ['"Noto Sans"', "system-ui"],
        "noto-sans-mono": ['"Noto Sans Mono"', "monospace"],
      },
      colors: {
        primary: {
          50: "#f0f2f9",
          100: "#e0e5f4",
          200: "#c2cae8",
          300: "#a3b0dd",
          400: "#8595d1",
          500: "#667bc6",
          600: "#52629e",
          700: "#3d4a77",
          800: "#29314f",
          900: "#141928",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
