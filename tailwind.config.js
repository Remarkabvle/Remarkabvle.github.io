/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "custom-hero": "url('../images/bgimage.png')",
      },
      containerMobile: {
        paddingLeft: "16px",
        paddingRight: "16px",
      },
      boxShadow: {
        custom:
          "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px",
        inner:  "rgba(89, 93, 210, 0.2) 0px 2px 8px 0px",
      },
      fontFamily: {
        primary: "var(--font-inter)",
      },
    },
  },
  plugins: [],
};
