import { createGlobalStyle } from 'styled-components'

import { reset } from './reset'

export const GlobalStyles = createGlobalStyle`
  ${reset}

  :root {
    --primary: hsl(340, 91%, 48%);
    --primaryLight: hsl(346, 100%, 68%);
    --primaryDark: hsl(345, 100%, 35%);
    --onPrimary: hsl(0, 0%, 100%);

    --background: hsl(0, 0%, 100%);
    --onBackground: hsl(0, 0%, 0%);

    --surface: hsl(0, 0%, 100%);
    --onSurface: hsl(0, 0%, 0%);

    --error: hsl(349, 100%, 35%);
    --onError: hsl(0, 0%, 100%);

    --fontFamily: 'Roboto', sans-serif;
    --fontSize: calc(1.1875rem);
    --fontWeight: 400;    
  }

  [data-theme="dark"] {
    --primary: hsl(346, 100%, 68%);
    --primaryLight: hsl(342, 100%, 78%);
    --primaryDark: hsl(0, 0%, 0%);
    --onPrimary: hsl(0, 0%, 7%);

    --background: hsl(0, 0%, 7%);
    --onBackground: hsl(0, 0%, 100%);

    --surface: hsl(0, 0%, 11%);
    --onSurface: hsl(0, 0%, 100%);

    --error: hsl(349, 52%, 61%);
    --onError: hsl(0, 0%, 100%);
  }  

  body {
    background: var(--background);

    font-family: var(--fontFamily);
    font-size: var(--fontSize);
    font-weight: --var(fontWeight);    
    color: var(--onBackground);
  }

  h1 {font-size: 3.052rem;}

  h2 {font-size: 2.441rem;}

  h3 {font-size: 1.953rem;}

  h4 {font-size: 1.563rem;}

  h5 {font-size: 1.25rem;}

  a {
    text-decoration: none;
    
    color: var(--onPrimary);
  }
`

