import React from "react"
import HeaderContainer from "./Header"
import { shallow } from "enzyme"
import { configureAdapter, findByTestAttr } from "../tests/utils"

configureAdapter()

const setup = (dom) => {
  return shallow(<HeaderContainer children={dom} />)
}

it("it should render children", () => {
  const div = document.createElement("div")
  const wrapper = setup(div)
  const headerContainer = findByTestAttr(wrapper, "header-app")
  expect(headerContainer.length).toBe(1)
})
