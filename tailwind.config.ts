import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

module.exports = {
  content:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|ripple|spinner).js"
  ],
  plugins: [
    nextui({
      prefix: 'nextui',
      themes: {
        'dark': {
          colors: {
            primary: {
              DEFAULT: '#20d5a5',
              foreground: '#20d5a5',
            },
            focus: '#20d5a5',
            background:'#040406'
          },
        },

        'light': {
          colors: {
            primary:{
              DEFAULT: '#223e27',
              foreground: '#223e27',
            },
            focus: '#223e27',
            background:'#223e27'
          }
        }
      },
    }),
  ],
};