/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "primary-purple-gradient": "linear-gradient(90deg, #EC1E79 4.59%, #682D91 91.93%)"

      },
      colors: {
        primaryText:"#5B708B",
        primaryHeading:"#162840",
        primaryPurple:"#682D91",
        primaryBackground:"#F9FAFC",
        borderGray:"#EDEDEE",
        success:"#27C762",
      },
    },
  },
  plugins: [],
};
