import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "571": "571px",
      },
      fontSize: {
        "24": "24px",
        "13": "13px",
      },
      colors: {
        initial: "#F9EBE9",
        "myBrown": "#AC736D",
        "custom-orange": "#D47151",
        "custom-green": "#70B891",
        "custom-blue": "#455273",
        "custom-lightorange": "#F9EBE9",
      },
      fontFamily: {
        Inter: ["Inter", "sans - serif"],
        khand: ["Khand", "sans-serif"],
      },
      height: {
        "394": "394px",
        "22": "22px",
      },
      width: {
        "63": "63px",
        "761": "761px",

      },
    },
  },
  plugins: [],
};
export default config;
