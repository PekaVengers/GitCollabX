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
        primary: 'Graduate',
        primaryBold:  "Gowun Batang",
        para: "Gowun Dodum"        
      },
      screens: {
        'xxl': '1751px',
        'mmd': '851px',
        'msm' : '591px',
        'gsm': '471px',
        'vsm': '406px',
        'formsm': '351px',
        'vvsm': '100px',
      },
    },
    animation: {
      'spin': 'spin 2s linear infinite',
    }
  },
  plugins: [],
}