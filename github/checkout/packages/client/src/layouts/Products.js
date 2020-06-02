import React from "react"
import styled from "styled-components"
import { device } from "../assets/styles/devices"

const ProductContainerStyle = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  padding: 10px;
  grid-row-gap: 15px;
  grid-column-gap: 20px;
  justify-content: center;
  overflow: hidden;

  @media ${device.desktop} {
    grid-template-columns: repeat(5, auto);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(3, auto);
  }

  @media ${device.laptopL} {
    grid-template-columns: repeat(4, auto);
  }

  @media ${device.tablet} {
    grid-template-columns: repeat(2, auto);
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, auto);
  }
`

const ProductsContainer = ({ children }) => {
  return (
    <div data-testid="products-container">
      <ProductContainerStyle>{children}</ProductContainerStyle>
    </div>
  )
}

export default ProductsContainer
