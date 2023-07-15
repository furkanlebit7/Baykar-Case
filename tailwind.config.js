/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mC: "#78350F",
        "amber-50": "#FFFBEB",
        "amber-100": "#FEF3C7",
        "amber-200": "#FDE68A",
        "amber-400": "#FBBF24",
        "blue-gray": "#0F172A",
      },
      backgroundImage: {
        double: "linear-gradient(-25deg, #FEF3C7 50%, #FFFBEB 20%)",
      },
      letterSpacing: {
        half: "0.5px",
      },
      borderRadius: {
        fifty: "50px",
        ten: "10px",
        "4xl": "30px",
      },
      boxShadow: {
        mainShadow:
          "0px 0px 15px 0px rgba(255, 255, 255, 0.07), 0px 25px 50px -12px rgba(255, 255, 255, 0.25);",
        boxShadow:
          "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.10);",
        boxShadow2:
          "0px 0px 15px 0px rgba(0, 0, 0, 0.07), 0px 25px 50px -12px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
