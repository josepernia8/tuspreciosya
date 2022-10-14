/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
      serif: ["Merriweather", "serif"]
    },
    colors: {
      broad: "#059669" /* bg-emerald-600 */
    },
    aspectRatio: {
      '4/5': '4 / 5',
    }
  },
  plugins: [
    require("flowbite/plugin"),
    require("tailwindcss-theme-swapper")({
      themes: [
        {
          name: "base",
          selectors: [":root"],
          theme: {
            colors: {
              primary: "#4338ca" /* indigo-700 */,
              secondary: "",
              terciary: "#8080ff",
              backdrop: "#f8fafc" /* bg-slate-50 */,
              inverse: "#1e293b" /* slate-800 */
            }
          }
        }
      ]
    })
  ]
}
