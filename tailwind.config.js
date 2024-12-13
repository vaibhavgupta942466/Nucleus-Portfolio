/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  theme: {
    screens: {
      sm: '640px', // Small screens (mobile)
      md: '768px', // Medium screens (tablet)
      lg: '1024px', // Large screens (laptop)
      xl: '1280px', // Extra Large screens (large laptops)
      '2xl': '1536px', // 2x Extra Large screens (desktop monitors)
      '3xl': '1920px', // 3x Extra Large screens (big desktop monitors)
      '4xl': '2560px', // Custom 4x Extra Large screens (very large monitors)
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
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
        DEFAULT: '#8492a6',
      },
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
