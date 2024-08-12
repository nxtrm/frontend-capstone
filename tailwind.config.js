/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your project structure
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: "rgb(73,94,87)",  // The green color from the palette
        primaryYellow: 'rgb(244,206,20)', // The yellow color from the palette
        secondaryTomato: 'rgb(238,153,114)',
        secondaryBeige: "rgb(251, 218, 187)",
        highlightDark: "rgb(51, 51, 51)", // Darker highlight color
        highlightLight: "rgb(237, 219, 238)", // Lighter highlight color
      },
      fontFamily: {
        heading: ["'Markazi Text'", "serif"], // Display and heading font
        body: ["'Karla'", "sans-serif"], // Body text font
      },
      fontSize: {
        display: "30pt", // Display text size
        subtitle: "20pt", // Subtitle size, similar to the display size
        lead: "14pt", // Lead text size
        cardTitle: "12pt", // Card title size
        paragraph: "10pt", // Paragraph text size
        highlight: "10pt", // Highlight text size
      },
      borderRadius: {
        DEFAULT: "16px", // Rounded corners radius
      },
    },
  },
  plugins: [],
};
