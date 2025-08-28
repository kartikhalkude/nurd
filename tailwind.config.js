/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}" // Keep this if you plan to move files to src/
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        glass: "rgba(255, 255, 255, 0.1)",
      },
      backdropBlur: {
        'md': '12px',
        '20': '20px',
      },
      fontFamily: {
        'syne': ['Syne_400Regular', 'sans-serif'],
        'syne-bold': ['Syne_700Bold', 'sans-serif'],
        'poppins': ['Poppins_400Regular', 'sans-serif'],
        'poppins-medium': ['Poppins_500Medium', 'sans-serif'],
        'poppins-semibold': ['Poppins_600SemiBold', 'sans-serif'],
        'poppins-bold': ['Poppins_700Bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}