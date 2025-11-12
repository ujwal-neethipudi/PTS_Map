/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Black & White Theme
        'pts-black': '#000000',
        'pts-white': '#FFFFFF',
        'pts-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
        },
        // Category accent colors (for top borders only)
        'accent': {
          'messaging': '#00BCD4',
          'paid': '#2196F3',
          'owned': '#4CAF50',
          'data': '#9C27B0',
          'voter': '#FF9800',
          'volunteer': '#F44336',
          'contact': '#009688',
          'fundraising': '#FFC107',
          'movement': '#607D8B',
          'research': '#795548',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
        '6': '6px',
      },
    },
  },
  plugins: [],
}
