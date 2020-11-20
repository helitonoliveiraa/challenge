import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #2F2E41;
    -webkit-font-smoothing: antialiased;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;

  }

  body, input, button {
    font: 16px Mulish, sans-serif;
    color: #333;
  }

  button {
    cursor: pointer;
  }
`;
