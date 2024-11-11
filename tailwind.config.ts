import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'dark': {
          50: '#E0E0E0',
          100: '#B3B3B3',
          200: '#808080',
          300: '#4D4D4D',
          400: '#3B3B3B',
          DEFAULT: '#303030', // main
          600: '#262626',
          700: '#1F1F1F',
          800: '#1A1A1A',
          900: '#141414'
        },
        'light': {
          50: '#FFFFFF',
          DEFAULT: '#F5F5F5', // main
          200: '#EBEBEB',
          300: '#E0E0E0',
          400: '#D6D6D6',
          500: '#CFCFCF',
          600: '#B0B0B0',
          700: '#A0A0A0',
          800: '#909090',
          900: '#808080'
        },
        'primary': {
          50: '#FCE4EC',
          100: '#F8BBD0',
          200: '#F48FB1',
          DEFAULT: '#D81B60', // main
          400: '#C2185B',
          500: '#AD1457',
          600: '#880E4F',
          700: '#720E4C',
          800: '#5B0B3B',
          900: '#4A0A30'
        },
        // Suggested secondary accent colors for gradients with primary #D81B60:
        // 1. Deep Purple #7B1FA2
        // 2. Dark Blue #3949AB
        // 3. Pale Teal #26A69A
        // 4. Warm Amber #FFB74D
        // 5. Lavender #9575CD
        'secondary': {
          50: '#FFF3E0',
          100: '#FFE0B2',
          200: '#FFCC80',
          DEFAULT: '#FFB74D', // main
          400: '#FFA726',
          500: '#FB8C00',
          600: '#F57C00',
          700: '#EF6C00',
          800: '#E65100',
          900: '#BF360C'
        },
        'link' : '#3949AB',
      },
    },
  },
  plugins: [],
} satisfies Config;
