import React from "react"
import { shallow } from "enzyme"
import ProductCard from "./ProductCard"
import { checkProps, configureAdapter } from "../../tests/utils"

import LikedProductContext from "../../contexts/LikedProductContext"

configureAdapter()

const likedContextValues = {
  likedProduct: [],
}

const TestComponent = ({ products }) => (
  <LikedProductContext.Provider value={likedContextValues}>
    <ProductCard products={products} />
  </LikedProductContext.Provider>
)

it("does not throw warning with expected props", () => {
  const expectedProps = [
    {
      id: "32321",
      image: "http://image.com",
      price: "23123TL",
      shipStatus: "Kargo",
      title: "Iphone",
    },
  ]

  const wrapper = shallow(<TestComponent products={expectedProps} />)
  checkProps(wrapper, expectedProps)
})
