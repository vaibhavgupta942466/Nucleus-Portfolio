/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      primary: {
        light: '#1fb6ff',
        DEFAULT: '#7e5bef',
        dark: '#273444',
      },
      secondary: {
        light: '#ff49db',
        DEFAULT: '#ff7849',
        dark: '#8492a6',
      },
      blue: '#1fb6ff',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: '#13ce66',
      yellow: '#ffc82c',
      gray: '#8492a6',
      white: '#ffffff',
      red: '#FF0000',
      'gray-light': '#d3dce6',
      'gray-dark': '#273444',
    },
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        'playfair-italic': ['Playfair Display Italic', 'serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 30s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [
    // ...
    // require('@tailwindcss/forms'),
  ],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
}
