import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'text': '#f0f0f0',
          'background': '#000000',
          'primary': '#2b2b2b',
          'secondary': '#bababa',
          'accent': '#67abad',
        },
      },
      fontFamily: {
        customFont: ['"NewYorktoLasVegas"', 'serif'],
        customFont2: ['"Lato-Regular"', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
} satisfies Config;
