/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',      // Root app folder (routing)
    './src/**/*.{js,ts,jsx,tsx,mdx}',      // 👈 NEW: Yeh line add karni hai (saare components yahan hain)
    './pages/**/*.{js,ts,jsx,tsx,mdx}',    // Backup for pages
    './components/**/*.{js,ts,jsx,tsx,mdx}', // Backup for root components
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}