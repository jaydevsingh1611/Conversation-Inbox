/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: { colors: { ink: '#172033', navy: '#0E1A31', canvas: '#F7F8FC', line: '#E5E7EF' }, boxShadow: { panel: '0 2px 10px rgba(31, 41, 55, .06)' } } },
  plugins: []
}
