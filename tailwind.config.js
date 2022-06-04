module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'blue-black': '#02090F',
      'white': '#ffffff',
      'blue-btn': '#33A5FE',
      'black': '#000000',
    },
    screens: {
      'xlarge': {'raw': '(min-width: 1050px)'},
      'large': { 'raw': '(max-width: 1050px)' },
      'medium': { 'raw': '(max-width: 768px)' },
      'xmedium': {'raw': '(max-width: 950px)'},
      'small': { 'raw': '(max-width: 550px)' },
      'msmall': {'raw': '(min-width: 650px)'},
      'mmsmall': {'raw': '(min-width: 500px)'},
      'smaller': { 'raw': '(max-width: 450px)' },
      'msmaller': { 'raw': '(min-width: 370px)' },
'xsmaller': { 'raw': '(max-width: 350px)' },

      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
