"use client";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background: linear-gradient(to bottom, #ffd1d1, #ff9494);
    color: #333;
  }
`;

export default GlobalStyle;
