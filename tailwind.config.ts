import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/views/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: "#E5E1DA",
        secondary: "#AAD7D9",
        card: "#FBF9F1",
      },
      colors: {
        sub: "#808080",
        "title-blue": "#115bca",
        "title-green": "#11B85A",
      },
    },
  },
  plugins: [],
};
export default config;
