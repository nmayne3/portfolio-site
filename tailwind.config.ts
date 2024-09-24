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
      colors: {
        border: '#F9FBF2',
        primary: '#FFEDE1',
        secondary: '#235789',
        trimary: '#AFCBFF',
        accent: '#0E1C36',
        text: '#AFCBFF'
      },
      fontFamily: {
        bebas: ['var(--font-bebas)']
      }
    },
  },
  plugins: [],
};
export default config;
