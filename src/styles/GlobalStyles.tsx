import {createGlobalStyle} from 'styled-components/macro';
import variables from "./variables";


const GlobalStyle = createGlobalStyle`
  ${variables};

  html, * {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0;
    width: 100%;
    max-width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--light-grey);
    color: var(--near-black);
    font-family: var(--font);
    font-size: var(--fz-md);
  }
 
  h1, h2, h3, h4, h5, h6 {
    letter-spacing: -.04em;
    margin: 0 0 10px;
  }

  p {
    margin: 0 0 10px;
  }

  a,
  button {
    transition: all 0.3s ease;
    color: inherit;
  }

  a {
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }
  .list__item a{
    text-decoration: none;
    
    &:hover,
    &:focus {
      text-decoration: none;
    }
  }

  button {
    border: 0;
    cursor: pointer;
    font-family: inherit;
    border-radius: var(--border-radius-pill);
    background-color: rgba(0,0,0,.7);
    color: var(--white);
    font-size: var(--fz-sm);
    font-weight: 700;
    padding: var(--spacing-xs) var(--spacing-lg);

    &:hover,
    &:focus {
      background-color: var(--dark-grey);
      outline: 0;
    }
  }

  img {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }

  main {
    position: relative;
    padding: var(--spacing-xxl) 0;
    width: 100%;
  }
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  .overflow-ellipsis {
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: unset;
    word-break: break-all;
  }

`;

export default GlobalStyle;