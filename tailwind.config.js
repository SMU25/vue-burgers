/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#F3F2F1",
          light: "#BFBFBF",
          hard: "#8F8F8F",
          hardtest: "#606060",
        },
        green: {
          primary: "#70C05B",
          hard: "#008C49",
        },
        orange: {
          primary: "#FF6633",
        },
      },
      fontSize: {
        8: "8px",
        10: "10px",
        64: "64px",
      },
      lineHeight: {
        150: "150%",
      },
      spacing: {
        1.75: "7px",
        13: "52px",
        15: "60px",
        30: "120px",
        34: "136px",
      },
      maxWidth: {
        25: "100px",
        43: "172px",
        58: "232px",
        62: "248px",
        68: "272px",
        112.5: "450px",
        302: "1208px",
        "6.5/10": "65%",
      },
      maxHeight: {
        19: "76px",
        22: "88px",
        25: "100px",
        30: "120px",
        35.5: "142px",
        39: "156px",
        54.5: "218px",
      },
      boxShadow: {
        "light-bottom-fog": "2px 4px 8px rgba(0, 0, 0, 0.1);",
        "light-outer": "4px 6px 12px rgba(0, 0, 0, 0.3);",
        "top-inner": "inset 0px 2px 0px rgba(0, 0, 0, 0.2);",
        "card-edges": "1px 2px 4px rgba(0, 0, 0, 0.1);",
      },
      brightness: {
        120: "1.20",
      },
      screens: {
        default: "0px",
        xs: "380px",
        sm: "450px",
        md: "524px",
        lg: "768px",
        gl: "824px",
        xl: "1024px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
