import { createGlobalStyle } from 'styled-components';

const PageGlobalConfig = createGlobalStyle`
  html {
    font-size:100%;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html, body, #root {
    height:100%;
  }

  body {
    background-color:#0D1321;
  }
`;

export default PageGlobalConfig;
