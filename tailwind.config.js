/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/svg/**/*.{js,ts,jsx,tsx}',
    './public/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Barlow': ['"Barlow"']
      },
      colors: {
        'normalmodeblue': {
          50: "#E0EEFF",
          100: "#C2DDFF",
          200: "#8ABEFF",
          300: "#4D9DFF",
          400: "#147EFF",
          500: "#0063D8",
          600: "#004EAD",
          700: "#003980",
          800: "#002757",
          900: "#001229",
          950: "#000914"
        },
        'darkmodeblue': {
          darkblue: "#222438",
          blue: "#222440",
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
