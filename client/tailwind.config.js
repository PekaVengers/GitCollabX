/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FCED',
        secondary: '#92EEE8',
      },
      fontFamily: {
        primary: 'IBM Plex Mono',
      },
      screens: {
        'vsm': '406px',
        'vvsm': '100px',
      },
    },
    animation: {
      'spin': 'spin 2s linear infinite',
    }
  },
  plugins: [],
}