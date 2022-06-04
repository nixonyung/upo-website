module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cursive: 'Calligraffitti',
        Mont: 'Montserrat',
        MontAlt: 'Montserrat Alternates',
        OpenSans: 'Open Sans',
        // Recursive: 'Recursive',
      },
      fontSize: {
        '99xl': '24rem',
        footer: 'clamp(0.5rem,2vw,1rem)',
      },
      spacing: {
        '1/20': '5%',
      },
      letterSpacing: {
        widerrr: '0.3rem',
      },
    },
  },
  plugins: [],
}
