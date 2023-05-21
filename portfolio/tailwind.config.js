/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#030303",
      secondary: {
        DEFAULT: "#1D1D1D",
        2: "#353535",
        3: "#5B5B5B",
        4: "#B8B8B8",
        5: "#E5E5E5",
      },
      orange: "#E75A35",
      whiteFixed: "#F5F5F5",

      transparent: "transparent",
    },
    fontFamily: {
      forma: ["Forma DJR Banner", "sans-serif"],
      dazzle: ["Dazzle Unicase", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        spin: {
          "0%": "transform:rotate(0deg)",
          "100%": "transform:rotate(360deg)",
        },
      },
      animation: {
        spinning: "spin 30s linear infinite",
      },
    },
    plugins: [],
  },
};
