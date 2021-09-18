import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px; 
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535; 
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
  }
  * {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;  
  }
  body {  
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    h1 {
      font-size: 2rem;
      font-weight: 600;
      color: var(--white);
    }
    h3 {
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      font-size: 1rem;
      color: var(--white);
    }
  }

  .btns{
  display: block;
  background: var(--darkGrey);
  width: 25%;
  min-width: 200px;
  height: 30px;
  border-radius: 30px;
  color: var(--white);
  border: 0;
  font-size: var(--fontsmall);
  margin: 20px auto;
  transition: all 0.3s;
  outline: none;
  cursor: pointer;

  
  :hover {
    opacity: 0.4px;
  }
  }
  .nomovies{
    font-weight: bold;
    font-size: var(--fontBig);
    color: var(--black);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
  }

`;
