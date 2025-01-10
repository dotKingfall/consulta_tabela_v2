import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

module.exports = {
  content:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|ripple|spinner|menu|divider|popover).js"
  ],
  theme:{
    extend:{
      colors:{
        //add custom colors here
      }
    }
  },
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
            secondary:{
              DEFAULT: '#214039',
              foreground:'#c0c0c0',
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
            secondary:{
              DEFAULT: '#386c5f',
              foreground: '#F5F5DC',
            },
            focus: '#223e27',
          }
        }
      },
    }),
  ],
};