import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --shape: #fff;

    --green: #33cc95;
    --red: #e52e4d;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
  }

  /* Default font-size: 16px */
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; /* 15px */
    }

    @media (max-width: 720px) {
      font-size: 87.5%; /* 14px */
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  /* Não colocamos somente no body, pq o input textarea, button não herdam
  as fontes do body  */
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  /* por padrão, os elementos negrito do html tem font-weight:500 */
  h1, h2, h3, h4, h5, h6, button {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;