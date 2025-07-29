module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        fametonicPink: '#FF007A',
        fametonicBlue: '#00E0FF',
        fametonicBg: '#0A0A0A',
        fametonicText: '#FFFFFF',
        fametonicYellow: '#FFD600',
        fametonicGray: '#232323',
      },
      fontFamily: {
        sans: ['Geist', 'Arial', 'Helvetica', 'sans-serif'],
      },
      boxShadow: {
        fametonic: '0 4px 24px 0 #00E0FF',
      },
    },
  },
  plugins: [],
}; 