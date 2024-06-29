/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors.js';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: colors['slate']['900'],
          8: colors['slate']['800'],
          7: colors['slate']['700'],
          6: colors['slate']['600'],
          5: colors['slate']['500'],
          4: colors['slate']['400'],
          3: colors['slate']['300'],
          2: colors['slate']['200'],
          1: colors['slate']['100'],
        },
        primary: {
          DEFAULT: colors['blue']['600'],
          hover: colors['blue']['700'],
          contrast: colors['white'],
          dark: {
            DEFAULT: colors['blue']['300'],
            hover: colors['blue']['400'],
            contrast: colors['black'],
          },
        },
        secondary: {
          DEFAULT: colors['gray']['500'],
          hover: colors['gray']['600'],
          contrast: colors['white'],
          dark: {
            DEFAULT: colors['gray']['300'],
            hover: colors['gray']['400'],
            contrast: colors['black'],
          },
        },
        error: {
          DEFAULT: colors['red']['500'],
          hover: colors['red']['600'],
          contrast: colors['white'],
          dark: {
            DEFAULT: colors['red']['400'],
            hover: colors['red']['500'],
            contrast: colors['black'],
          },
        },
        warning: {
          DEFAULT: colors['orange']['300'],
          hover: colors['orange']['400'],
          contrast: colors['white'],
          dark: {
            DEFAULT: colors['orange']['300'],
            hover: colors['orange']['400'],
            contrast: colors['black'],
          },
        },
        success: {
          DEFAULT: colors['green']['600'],
          hover: colors['green']['700'],
          contrast: colors['white'],
          dark: {
            DEFAULT: colors['green']['300'],
            hover: colors['green']['400'],
            contrast: colors['black'],
          },
        },
      },
    },
  },
  plugins: [],
}

