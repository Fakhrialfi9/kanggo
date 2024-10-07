import styled, { createGlobalStyle } from "@vue-styled-components/core";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

html {
  overflow-x: hidden !important;
  scroll-behavior: smooth;
}

body {
  display: flex;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  height: 100%;
  min-height: 100vh;
  max-height: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  margin: 0 auto;
  padding: 0;
  place-items: center;
  font-family: "Inter", sans-serif;
  transition: color 0.5s, background-color 0.5s;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  background-color: var(--background-color-solid-0);
  color: var(--text-color-solid-0);
}

:root {
  /* Background Color */
  --background-color-solid-0: rgb(255, 255, 255);
  --background-color-solid-50: rgb(250, 250, 250);
  --background-color-solid-100: rgb(245, 245, 245);
  --background-color-solid-150: rgb(240, 240, 240);
  --background-color-solid-200: rgb(235, 235, 235);
  --background-color-solid-250: rgb(230, 230, 230);
  --background-color-solid-300: rgb(225, 225, 225);
  --background-color-solid-350: rgb(220, 220, 220);
  --background-color-solid-400: rgb(215, 215, 215);
  --background-color-solid-500: rgb(210, 210, 210);

  /* Text Solid Color */
  --text-color-solid-0: rgb(0, 0, 0);
  --text-color-solid-50: rgb(3, 4, 4);
  --text-color-solid-100: rgb(7, 8, 9);
  --text-color-solid-150: rgb(11, 12, 14);
  --text-color-solid-200: rgb(15, 17, 18);
  --text-color-solid-250: rgb(19, 21, 23);
  --text-color-solid-300: rgb(22, 25, 27);
  --text-color-solid-350: rgb(24, 27, 29);
  --text-color-solid-400: rgb(26, 29, 32);
  --text-color-solid-450: rgb(27, 30, 34);
  --text-color-solid-500: rgb(28, 31, 35);
  --text-color-solid-550: rgb(29, 32, 36);
  --text-color-solid-600: rgb(32, 36, 40);
  --text-color-solid-700: rgb(36, 40, 45);
  --text-color-solid-800: rgb(40, 44, 50);
  --text-color-solid-900: rgb(45, 49, 55);
  --text-color-solid-1000: rgb(50, 55, 61);
  --text-color-solid-1100: rgb(55, 60, 67);

  /* Diver Solid Color */
  --diver-color-solid-0: rgba(0, 0, 0, 0.1);
  --diver-color-solid-100: rgba(10, 10, 10, 0.15);
  --diver-color-solid-150: rgba(20, 20, 20, 0.2);
  --diver-color-solid-200: rgba(30, 30, 30, 0.25);
  --diver-color-solid-250: rgba(40, 40, 40, 0.3);
  --diver-color-solid-300: rgba(50, 50, 50, 0.35);
  --diver-color-solid-350: rgba(60, 60, 60, 0.4);
  --diver-color-solid-400: rgba(70, 70, 70, 0.45);
  --diver-color-solid-450: rgba(80, 80, 80, 0.5);
  --diver-color-solid-500: rgba(28, 31, 35, 0.55);

  --primary-color: #0068ef;
  --success-color: #4caf50;
  --danger-color: #f44336;
  --warning-color: #ffc107;
  --info-color: #016bf8;

  --primary-color-dark: #015cd2;
  --success-color-dark: #388e3c;
  --danger-color-dark: #c62828;
  --warning-color-dark: #ffa000;
  --info-color-dark: #004ba0;

  /* Start Sizing */
  --border-radius: 0.4rem;
  --border-radius-sm: 0.25rem;
  --border-radius-md: 0.5rem;
  --border-radius-lg: 1rem;
  --border-radius-xl: 1.25rem;
  --border-radius-2xl: 2rem;

  --spacing-unit: 1.25rem;
  --spacing-unit-sm: 0.5rem;
  --spacing-unit-md: 1.5rem;
  --spacing-unit-lg: 2rem;

  --font-size-Logo: 1.78rem;
  --font-size-base: 1.5rem;
  --font-size-lg: 1.25rem;
  --font-size-md: 1rem;
  --font-size-sm: 0.85rem;
  --font-size-xs: 0.75rem;

  /* Start Font Family */
  --font-family-sans: "Inter", sans-serif;
}

img {
  user-drag: none !important;
  user-select: none !important;
  pointer-events: none !important;
}

`;
