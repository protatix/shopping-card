import React from "react"
import HomeContainer from "./Home"
import { shallow } from "enzyme"
import { configureAdapter, findByTestAttr } from "../tests/utils"

configureAdapter()

const setup = (dom) => {
  return shallow(<HomeContainer children={dom} />)
}

it("it should render children", () => {
  const div = document.createElement("div")
  const wrapper = setup(div)
  const homeContainer = findByTestAttr(wrapper, "home-app")
  expect(homeContainer.length).toBe(1)
})
