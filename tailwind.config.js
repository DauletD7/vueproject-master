module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  important: true,
  theme: {
    extend: {
      colors: {
        'mapIcon': '#40baf8',
        'secondBG': '#f7f7f7',
        'or': '#ffdcbc',
        'mainCol': '#fc6b3f',
        'grayText': '#737171',
        'graySpan': '#8e979f',
        'brownSpan': '#f9efc3',
        'discount': 'rgb(115, 190, 111)',
        'credit': 'rgb(244, 128, 18)',
        'orangelight': '#fdf8e2'
      },
      width: {
        '79': '79%',
        '19': '19%',
        '18': '18%',
        '72': '72%',
        '25': '25%',
        '15': '15%',
        '60': '60%'
      }
    },
  },
  plugins: [],
}