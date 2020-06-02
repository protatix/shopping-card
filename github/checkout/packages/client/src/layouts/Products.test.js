import React from "react"
import ProductsContainer from "./Products"
import { shallow } from "enzyme"
import { configureAdapter, findByTestAttr } from "../tests/utils"

configureAdapter()

const setup = (dom) => {
  return shallow(<ProductsContainer children={dom} />)
}

it("it should render children", () => {
  const div = document.createElement("div")
  const wrapper = setup(div)
  const productsContainer = findByTestAttr(wrapper, "products-container")
  expect(productsContainer.length).toBe(1)
})
