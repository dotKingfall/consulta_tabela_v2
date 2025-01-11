import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

module.exports = {
  content:[
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|dropdown|input|ripple|spinner|menu|divider|popover|form).js"
  ],
  theme:{
    extend:{
      colors:{
        'lightergreen': '#20d5a5',
        'darkergreen': '#000d0d',
        'darktext': '#757575',
        'currentTextColor': 'hsl(var(--nextui-secondary-foreground))',
        'insideTextColor': 'hsl(var(--nextui-primary-foreground))'
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
              foreground: '#c7c7c7',
            },
            secondary:{
              DEFAULT: '#214039',
              foreground:'#c7c7c7',
            },
            success:{
              DEFAULT: '#000d0d',
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
              foreground: '#f5f5dc',
            },
            secondary:{
              DEFAULT: '#386c5f',
              foreground: '#223e27',
            },
            success:{
              DEFAULT: '#c7e1c7',
              foreground: '#223e27',
            },
            focus: '#223e27',
          }
        }
      },
    }),
  ],
};