import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F1F3F4",
        grey: "#5F6368",
        "grey-light": "#AAAAAA",
        blue: "#4285F4",
        "blue-light": "#8AB4F8",
        "blue-pastel": "#DCE6F5",
        green: "#34A853",
        "green-light": "#81C995",
        "green-pastel": "#DBEBE1",
        yellow: "#F9AB00",
        "yellow-light": "#FDE293",
        "yellow-pastel": "#F3F0E1",
        red: "#EA4335",
        "red-light": "#F28B82",
        "red-pastel": "#F1DEDD",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("@tailwindcss/aspect-ratio")],
};
export default config;
