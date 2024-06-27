// Libraries
import { createGlobalStyle } from "styled-components"

// Boostrap
import "./bootstrap.scss"
import "./reset.css"

// Fonts
import "./fonts.scss"

// Utils
import breakpoints from "../../utils/breakpoints"
import { colors, fonts } from "../../utils/variables"

// Helpers
import Helpers from "./helpers"

const GlobalStyles = createGlobalStyle`
  html{
    scroll-behavior: smooth;
  }
  body {
    font-family: ${fonts.primary}, ${fonts.fallback};
    
    
    h1,
    h2,
    h3,
    h4,
    h5 {
      font-family: ${fonts.secondary};
      font-weight: 400;
    }

    .heading--l{
      font-size: 32px;
      line-height: 44px;

      ${breakpoints.medium`
        font-size: 56px;
        line-height: 56px;
      `}
    }
    .heading--m{
      font-size: 24px;
      line-height: 32px;

      ${breakpoints.medium`
        font-size: 48px;
        line-height: 64px;
      `}
    }

    .heading--s{
      font-size: 20px;
      line-height: 28px;

      ${breakpoints.medium`
        font-size: 32px;
        line-height: 44px;
      `}
    }

    .text--xs{
      font-size: 14px;
      line-height: 20px;
    }

    .text--s{
      font-size: 16px;
      line-height: 24px;

    }

    .text--m{
      font-size: 20px;
      line-height: 28px;
    }

    .text--l{
      font-size: 20px;
      line-height: 28px;

      ${breakpoints.medium`
        font-size: 24px;
        line-height: 32px;
      `}
    }

    a {
      color: ${colors.white};
      font-size: 14px;
      line-height: 24px;
      text-decoration: underline;
    }
  }

  button{
    border: 0;
    background-color: transparent;
    color: white;
    transition: all 0.3s ease;
    
    svg{
      margin-right: 4px;
    }
  }


  ${Helpers}
`

export default GlobalStyles
