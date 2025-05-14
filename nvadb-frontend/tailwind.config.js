/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: '0.25rem',
      },
      opacity: {
        '90': '0.9',
      },
      ringColor: {
        DEFAULT: '#000000',
      },
      fontFamily: {
        'heading': ['Georgia', 'serif'],
        'body': ['Roboto', 'sans-serif'],
        'code': ['Courier New', 'monospace'],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      luxury: {
        primary: "#000000",
        secondary: "#666666",
        accent: "#37cdbe",
        neutral: "#3d4451",
        "base-100": "#ffffff",
      }
    }],
    base: true,
    styled: true,
    utils: true
  }
}
