/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  theme: {
    extend: {},
    fontFamily: {
      // Removing `BlinkMacSystemFont, ui-sans-serif, system-ui` for https://linear.app/replay/issue/TT-1070/remove-breaking-font-from-firstreplayio
      sans: "-apple-system,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji"
    }
  },
  plugins: []
};
