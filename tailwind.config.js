/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          lightest: "#F3F2F1",
          hard: "#8F8F8F",
        },
        green: {
          primary: "#70C05B",
        },
      },
      lineHeight: {
        150: "150%",
      },
      maxWidth: {
        112.5: "450px",
        302: "1208px",
      },

      boxShadow: {
        "light-bottom-fog": "2px 4px 8px rgba(0, 0, 0, 0.1);",
      },
    },
  },
  plugins: [],
};
