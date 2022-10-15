/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        lobster: ['Lobster'],
      },
      screens: {
        'xl': '1366px',
      },
      colors: {
        broad: "#10b981" /* emerald-500 */,
        "list-bg": "#6b7280" /* gray-500 */,
        "rai-blue": "#42CFE9",
        "rai-yellow": "#FFDD0B"
      },
      aspectRatio: {
        '4/5': '4 / 5',
      }
    }
  },
  plugins: [require("flowbite/plugin")]
}
