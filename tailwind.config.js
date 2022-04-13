module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      white_2: "#f8f8f8",
      f2: "#f2f2f2",
      c1: "#C1F6ED",
      b1: "#377DFF",
      g1: "#449342",
      g2: "#2EAF7D",
      b2: "#3FD0C9",
      my_black: "#191919",
      my_gray: "#b1b1b1",
      my_gray2: "#3D3D3D",
      my_red: "#cc1100",
    },
    fontFamily: { main: ["Work Sans"] },
  },
  plugins: [require("flowbite/plugin")],
};
