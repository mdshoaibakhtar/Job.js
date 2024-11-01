import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px'
      },
      colors: {
        primary: "#BB2649"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')({
      charts: true,
    })],
};
export default config;