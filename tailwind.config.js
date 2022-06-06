module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes:{
        scale_up_tr:{
          '0%' : { transform: 'scale(0.5)',
        'transform-origin': '100% 0%'},
'100%': {transform: 'scale(1)',
'transform-origin': '100% 0%'},
      }
      },
      animation: {
scale_up_tr: 'scale_up_tr 0.45s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
      }
    },
    colors: {
      'blue-black': '#02090F',
      'white': '#ffffff',
      'blue-btn': '#33A5FE',
      'black': '#000000',
      'light-purple': '#5401F6',
      'transparent-purple': 'rgba(134, 81, 238, 0.5)',
    },
    screens: {
      'xlarge': {'raw': '(min-width: 1050px)'},
      'large': { 'raw': '(max-width: 1050px)' },
      'medium': { 'raw': '(max-width: 768px)' },
      'xmedium': {'raw': '(max-width: 950px)'},
      'small': { 'raw': '(max-width: 550px)' },
      'msmall': {'raw': '(min-width: 650px)'},
      'mmsmall': {'raw': '(min-width: 500px)'},
      'lsmall': {'raw': '(min-width: 550px)'},
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
