/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/ui/**/*.{js,jsx,ts,tsx}`,
    `./src/feature/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      'boxShadow':
        {
          'cute': '6px 2px 15px rgba(42, 138, 246, 0.3),-6px 2px 15px rgba(233, 42, 103, 0.3)',
        },
      'backgroundImage': {
        'gradient': "conic-gradient(from -160deg at 50% 50%,#e92a67 0deg,#a853ba 120deg,#2a8af6 240deg,#e92a67 360deg)",
      }
    },
  },
  plugins: [],
}
