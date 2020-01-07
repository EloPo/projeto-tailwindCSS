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
      alignSelf: ['responsive', 'hover', 'focus'],
      alignContent: ['responsive', 'hover', 'focus'],
      borderRadius: ['responsive', 'hover', 'focus'],
      boxShadow: ['responsivo', 'pairar', 'foco', 'ativo', 'grupo-pairar'],
      opacidade: ['responsivo', 'pairar', 'foco', 'ativo', 'grupo-pairar'],
      width: ['responsive', 'hover', 'focus'],
      display: ['responsive', 'hover', 'focus'],
      maxHeight: ['responsive', 'hover', 'focus']
    },
    corePlugins : {
      alignItems: false,
      boxShadow: false,
      maxHeight: false
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
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      width: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      height: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      borderRadius: {
        'none': '0',
        'default': '4px',
        'large': '12px',
      },
      maxHeight: {
        '0': '0',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
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