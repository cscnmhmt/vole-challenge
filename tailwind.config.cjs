/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      red: {
        lighest: '#FFE5E5',
        lighter: '#FF9898',
        light: '#F94739',
        base: '#E8282B',
        darkest: '#6B0206',
      },
      sky: {
        white: '#FFFFFF',
        lighest: '#F7F9FA',
        lighter: '#F2F4F5',
        light: '#E3E5E5',
        base: '#CDCFD0',
        darker: '#979C9E',
      },
      ink: {
        ligher: '#72777A',
        light: '#6C7072',
        base: '#404446',
        dark: '#303437',
        darker: '#222222',
        darkest: '#000000',
      },
    },
    extend: {
      fontSize: {
        xs: '12px',
        sm: '14px',
        base: '16px',
        lg: '18px',
        xl: '24px',
        '2xl': '32px',
        '3xl': '48px',
      },
      fontWeight: {
        normal: '400',
        'semi-bold': '600',
        bold: '700',
      },
      lineHeight: {
        10: '56px',
        9: '36px',
        8: '32px',
        7: '30px',
        6: '24px',
        5: '20px',
        4: '18px',
        3: '16px',
        2: '14px',
        1: '12px',
      },
      borderRadius: {
        base: '8px',
      },
      boxShadow: {
        sm: '0px 0px 1px rgba(20, 20, 20, 0.04), 0px 0px 8px rgba(20, 20, 20, 0.08)',
        md: '0px -3px 8px 2px rgba(20, 20, 20, 0.08)',
        lg: '0px 1px 24px 8px rgba(20, 20, 20, 0.3)',
      },
    },
  },
  plugins: [],
};
