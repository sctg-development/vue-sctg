/** @type {import('tailwindcss').Config} */
import { Config} from 'tailwindcss';
import forms from '@tailwindcss/forms'
import typography from '@tailwindcss/typography'

export default {
  content: [
    "./src/**/*.html",
    "./src/*.html",
    "./src/**/*.js",
    "./src/*.js",
    "./src/**/*.vue",
    "./src/*.vue",
  ],
  safelist: (process.env.__DEBUG__ === '1') ? [{ pattern: /.*/ }] : [],
  theme: {
    extend: {
      // fontFamily: {
      //   'keepcalm': ['KeepCalm-Medium', 'sans-serif'],
      // },
      // padding:{
      //   "2px":"2px",
      //   "10px":"10px",
      //   "16px":"16px",
      //   "80px": "80px",
      //   "90px": "90px",
      //   "150px": "150px",
      //   "300px": "300px",
      //   "800px": "800px",
      //   "900px":"900px"
      // },   
      colors: {
        // "gdt": {
        //   "50": "#646470",
        //   "100": "#5a5a66",
        //   "200": "#50505c",
        //   "300": "#464652",
        //   "400": "#3c3c48",
        //   "500": "#32323e",
        //   "600": "#282834",
        //   "700": "#1e1e2a",
        //   "800": "#141420",
        //   "900": "#0a0a16"
        // },
        // "hcfdark": "#0e6835",
        // "hcflight": "#95be1f",
        // "hcfcardinal": "#882647",
        // "hcfgreen": "#39B54A",
        // 'camelot': {
        //   '50': '#f9f4f6',
        //   '100': '#f3e9ed',
        //   '200': '#e1c9d1',
        //   '300': '#cfa8b5',
        //   '400': '#ac677e',
        //   '500': '#882647',  //HighCanFly Purple = hcfcardinal
        //   '600': '#7a2240',
        //   '700': '#661d35',
        //   '800': '#52172b',
        //   '900': '#431323'
        // },
        // 'watermelon': {
        //   '50': '#f3f7f5',
        //   '100': '#e7f0eb',
        //   '200': '#c3d9cd',
        //   '300': '#9fc3ae',
        //   '400': '#569572',
        //   '500': '#0e6835',   //HighCanFly Dark = hcfdark
        //   '600': '#0d5e30',
        //   '700': '#0b4e28',
        //   '800': '#083e20',
        //   '900': '#07331a'
        // },
        // 'pistachio': {
        //   '50': '#fafcf4',
        //   '100': '#f4f9e9',
        //   '200': '#e5efc7',
        //   '300': '#d5e5a5',
        //   '400': '#b5d262',
        //   '500': '#95be1f',   //HighCanFly Light = hcflight
        //   '600': '#86ab1c',
        //   '700': '#708f17',
        //   '800': '#597213',
        //   '900': '#495d0f'
        // },
        // 'apple': {
        //   '50': '#f5fbf6',
        //   '100': '#ebf8ed',
        //   '200': '#ceedd2',
        //   '300': '#b0e1b7',
        //   '400': '#74cb80',
        //   '500': '#39B54A',   //HighCanFly Green = hcfgreen
        //   '600': '#33a343',
        //   '700': '#2b8838',
        //   '800': '#226d2c',
        //   '900': '#1c5924'
        // }
      },
      fontSize: {
        "55": "55rem",
      },
      opacity: {
        "80": ".8",
      },
      // zIndex: {
      //   "2": 2,
      //   "3": 3,
      //   "100": 100,
      //   "998":998,
      //   "999":999
      // },
      inset: {
        "110%":"110%",
        "-100": "-100%",
        "-225-px": "-225px",
        "-160-px": "-160px",
        "-150-px": "-150px",
        "-94-px": "-94px",
        "-50-px": "-50px",
        "-29-px": "-29px",
        "-20-px": "-20px",
        "6px":"6x",
        "25-px": "25px",
        "40-px": "40px",
        "95-px": "95px",
        "145-px": "145px",
        "195-px": "195px",
        "210-px": "210px",
        "260-px": "260px",
      },
      // height: {
      //   "95-px": "95px",
      //   "70-px": "70px",
      //   "350-px": "350px",
      //   "500-px": "500px",
      //   "600-px": "600px",
      //   "screen-1_2": "50vh",
      //   "screen-1_3": "calc(100vh / 3)",
      //   "screen-2_3": "calc(2 * 100vh / 3)",
      //   "screen-1_4": "calc(100vh / 4)",
      //   "screen-3_4": "calc(3 * 100vh / 4)",
      //   "screen-1_5": "calc(100vh / 5)",
      //   "screen-2_5": "calc(2 * 100vh / 5)",
      //   "screen-3_5": "calc(3 * 100vh / 5)",
      //   "screen-4_5": "calc(4 * 100vh / 5)",
      //   "screen-1_6": "calc(100vh / 6)",
      //   "screen-5_6": "calc(5 * 100vh / 6)",
      // },
      // width:{
      //   "250px":"250px"
      // },
      minHeight: {
        "95-px": "95px",
        "70-px": "70px",
        "350-px": "350px",
        "500-px": "500px",
        "600-px": "600px",
        "screen-75": "75vh",
        "screen-1_2": "50vh",
        "screen-1_3": "calc(100vh / 3)",
        "screen-2_3": "calc(2 * 100vh / 3)",
        "screen-1_4": "calc(100vh / 4)",
        "screen-3_4": "calc(3 * 100vh / 4)",
        "screen-1_5": "calc(100vh / 5)",
        "screen-2_5": "calc(2 * 100vh / 5)",
        "screen-3_5": "calc(3 * 100vh / 5)",
        "screen-4_5": "calc(4 * 100vh / 5)",
        "screen-1_6": "calc(100vh / 6)",
        "screen-5_6": "calc(5 * 100vh / 6)",
      },
      maxHeight: {
        "860-px": "860px",
      },
      maxWidth: {
        "46px":"46px",
        "100-px": "100px",
        "120-px": "120px",
        "150-px": "150px",
        "180-px": "180px",
        "200-px": "200px",
        "210-px": "210px",
        "250px": "250px",
        "300px": "300px",
        "576px": "575px",
        "580px": "580px",
        "768px": "768px",
        "992px": "992px",
        "1140px": "1140x",
        "1320px": "1320px",
      },
      minWidth: {
        "140-px": "140px",
        "48": "12rem",
        "1/2": "50%",
        "1/3": "33.33%",
        "2/3": "66.66%",
        "3/4": "75%"
      },
      backgroundSize: {
        full: "100%",
      },
    },
  },
  variants: [
    "responsive",
    "group-hover",
    "focus-within",
    "first",
    "last",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  plugins: [
    forms,
    typography,
    // (function ({ addComponents, theme }) {
    //   const screens = theme("screens", {});
    //   addComponents([
    //     {
    //       ".container": { width: "100%" },
    //     },
    //     {
    //       [`@media (min-width: ${screens.sm})`]: {
    //         ".container": {
    //           "max-width": "640px",
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.md})`]: {
    //         ".container": {
    //           "max-width": "768px",
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.lg})`]: {
    //         ".container": {
    //           "max-width": "1024px",
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens.xl})`]: {
    //         ".container": {
    //           "max-width": "1280px",
    //         },
    //       },
    //     },
    //     {
    //       [`@media (min-width: ${screens["2xl"]})`]: {
    //         ".container": {
    //           "max-width": "1280px",
    //         },
    //       },
    //     },
    //   ]);
    // }),
  ],
} as Config;
