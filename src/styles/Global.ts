import { createGlobalStyle } from 'styled-components'
import { MainFontFace } from './Fonts'

export const breakpoints = {
  xs: 576,
  mobile: 760,
  sm: 768,
  md: 1024,
  lg: 1200,
  xl: 1400,
}

export var isMobile = window.innerWidth <= breakpoints.mobile

export const isMobileMediaQuery = `@media screen and (max-width: ${breakpoints.mobile}px)`
export const notMobileMediaQuery = `@media screen and (min-width: ${breakpoints.mobile + 1}px)`

const GlobalStyle = createGlobalStyle`
  
  ${MainFontFace}

  body {
    font-family: "Graphik", sans-serif
    
  }
  
  *, *::before, *::after {
    box-sizing: border-box;

  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }
  `

export default GlobalStyle
