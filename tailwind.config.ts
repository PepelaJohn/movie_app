/** @type {import('tailwindcss').Config} */
module.exports = {
    // NOTE: Update this to include the paths to all of your component files.
    content: ["./app/**/*.{js,jsx,ts,tsx}"],
    presets: [require("nativewind/preset")],
    theme: {
      extend: {
        colors:{
            primary: '#1E90FF',
            secondary: '#FF6347',
            light:{
              100: '#F0F8FF',
              200: '#E6E6FA',
              300: '#F5F5F5',
              400: '#F8F8FF',
            },
            dark:{
              100: '#2F4F4F',
              200: '#696969',
              300: '#708090',
              400: '#778899',
            },  
        }
      },
    },
    plugins: [],
  }