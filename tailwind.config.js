module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
'blue-black':'#02090F',
'white': '#ffffff',
'blue-btn': '#33A5FE',
'black': '#000000',
    },
    screens: {
      'large': {'raw': '(max-width: 1050px)'},
      'medium': {'raw': '(max-width: 768px)'},
      'small': {'raw': '(max-width: 550px)'},
      'smaller': {'raw': '(max-width: 450px)'},
      'xsmaller': {'raw': '(max-width: 350px)'},
      xsm: '550px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
