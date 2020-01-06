const { colors } = require('tailwindcss/defaultTheme')


module.exports = {
  theme: {
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    screens: {
      tablet: '768px',
      desktop: '1024px',
    },
    variantes : {
      alignItems: ['responsivo', 'focalizado', 'foco'],
      opacidade: ['responsivo', 'pairar', 'foco', 'ativo', 'grupo-pairar'],
      boxShadow: ['responsivo', 'pairar', 'foco', 'ativo', 'grupo-pairar']
    },
    corePlugins : {
      alignItems: false,
      boxShadow: false
    },
    colors: {
      primary: {
        100: '#ebf8ff',
        300: '#90cdf4',
        500: '#4299e1',
        700: '#2b6cb0',
        900: '#2a4365',
      },
      secondary: {
        100: '#fffff0',
        300: '#faf089',
        500: '#ecc94b',
        700: '#b7791f',
        900: '#744210',
      },
      opacidade : {
        '0': '0',
        '10': '.1',
        '20': '.2',
        '30': '.3',
        '40': '.4',
        '50': '0,5',
        '60': '.6',
        '70': '.7',
        '80': '0,8',
        '90': '0,9',
        '100': '1',
      },
    },
    extend: {
      boxShadow: {
        huge: '0 30px 60px -15px rgba(0, 0, 0, .25)'
      },
      colors: {
        'regal-blue': '#243c5a',
      },
        gray: {
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        blue: {
          ...colors.blue,
          '900': '#1e3656',
        }
      }
    }
  }
}