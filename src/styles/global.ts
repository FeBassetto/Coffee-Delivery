import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: 0;
  }

  :focus {
    outline: 0;
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
  }

  .title-EX {
    font-family: 'Baloo 2';
    font-weight: 800;
  }

  .title-B {
    font-family: 'Baloo 2';
    font-weight: 700;
  }

  .subtitle-B{
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  .subtitle-R{
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }
`
