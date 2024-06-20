/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontWeight: {
        'extrabold': '600', 
        'medium': '200',// Example of adding a custom font weight
      },
      borderRadius: {
        'custom-sm': '10px',
        'custom-md': '20px',
        'custom-lg': '30px',
        'custom-xl': '40px',
        'custom-2xl': '50px',
      },
      borderWidth: {
        'custom-thin': '1px',
        'custom-medium': '3px',
        'custom-thick': '5px',
        'custom-extra-thick': '8px',
      },
      borderColor: {
        'custom-blue': '#007BFF',
        'custom-green': '#28A745',
        'custom-red': '#DC3545',
        'custom-yellow': '#FFC107',
      },
      borderStyle: {
        'dashed': 'dashed',
        'dotted': 'dotted',
        'double': 'double',
        'groove': 'groove',
      },
      backgroundImage: {
        'custom-gradient-1': 'linear-gradient(66deg, #e6fbfe 0%, #edddfb 100%)',
      },
      height: {
        '80': '80px',
      },
      maxWidth: {
        'custom-1': '20rem',
        'custom-2': '90rem', // Custom max-width value
      },
      fontSize: {
        'custom-12': '0.75rem', // Example custom size
        'custom-8': '0.5rem', // Another custom size
        // Add more custom sizes as needed
      },
      fontFamily: {
        'source-serif': ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
    
  },
  plugins: [],
}