import React from "react"
import { createGlobalStyle } from "styled-components"
import { fontTitle, fontDescription } from "../assets/styles/font"
import { backgroundColor } from "../assets/styles/color"

const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${backgroundColor};
    }

    h1 {
        font-family: ${fontTitle.family};
        font-weight: ${fontTitle.weight};
        font-size: ${fontTitle.size}
    }

    p {
        font-family: ${fontDescription.family};
        font-size: ${fontDescription.size};
    }

    span {
        font-family: ${fontTitle.family};
    }

    img {
        cursor: pointer;
    }
`

const HomeLayout = ({ children, className }) => {
  return (
    <div data-testid="home-app">
      <GlobalStyle />
      <div className={className}>{children}</div>
    </div>
  )
}

export default HomeLayout
