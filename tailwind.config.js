/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        btn: '6px 6px 0px 4px #aaa',
      },
    },
  },
  daisyui: {
    themes: [
      'light',
      {
        myTheme: {
          primary: 'white',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
};
