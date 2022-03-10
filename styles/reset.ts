export const reset = () => {
  return `
  :root {
    --lineHeight: calc(1em + 0.725rem);
    --letterSpacing: 1px;
  }
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    margin: 0;
  }
  
  html {
    scroll-behavior: smooth;
  }

  html, body {
    height: 100%;
  }
  
  body {
    text-rendering: optimizeSpeed;
    line-height: var(--lineHeight);
    letter-spacing: var(--letterSpacing);
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
}
