/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/functions/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#363C4F",
        blue: "#494AF8",
      },
      fontFamily: {
        dm: "DM Sans",
        jetBrain: "'JetBrains Mono', monospace",
      },
    },
    screens: {
      vsm: "400px",
      mvsm: "420px",
      lmvsm: "450px",
      minTab: "550px",
      sm: "640px",
      maxTab: "980px",
    },
  },
  plugins: [],
};
