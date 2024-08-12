/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49SE57",  // The green color from the palette
        secondary: "#F4CE14", // The yellow color from the palette
        neutralDark: "#495E57", // Darker neutral color
        neutralLight: "#EDEFEE", // Lighter neutral color
      },
      fontFamily: {
        heading: ["'Markazi Text'", "serif"], // Display and heading font
        body: ["'Karla'", "sans-serif"], // Body text font
      },
      fontSize: {
        display: "40pt", // Display text size
        subtitle: "40pt", // Subtitle size, similar to the display size
        lead: "18pt", // Lead text size
        cardTitle: "18pt", // Card title size
        paragraph: "16pt", // Paragraph text size
        highlight: "16pt", // Highlight text size
      },
      borderRadius: {
        DEFAULT: "16px", // Rounded corners radius
      },
    },
  },
  plugins: [],
};
