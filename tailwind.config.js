/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        'scale-down': {
          '0%': {transform: 'scale(1, .0)'},
          '100%': {transform: 'scale(1, 1)'}
        },
      },
      animation: {
        'scale-down': 'scale-down .1s ease-in-out'
      }
    },
  },
  plugins: [],
}

