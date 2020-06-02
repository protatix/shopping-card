import React from "react"
import { mount } from "enzyme"
import { configureAdapter } from "../../tests/utils"

//Component(s)
import ProductFilter from "./ProductFilter"

//Provider
import LikedProductContext from "../../contexts/LikedProductContext"
import ProductContext from "../../contexts/ProductContext"
import FilterProductContext from "../../contexts/FilterProductContext"

//Setting Enzyme Adapter Config
configureAdapter()
let productContextValues, likedContextValues, filterContextValues, wrapper

const setUpContexts = () => {
  productContextValues = {
    products: [
      {
        id: "1",
        image:
          "https://mcdn01.gittigidiyor.net/56171/tn50/561715494_tn50_0.jpg?1590867",
        title: "Apple iPhone 11 Cep Telefonu",
        price: "7.300,00 TL",
        shipStatus: "Ücretsiz – Aynı Gün Kargo",
      },
      {
        id: "2",
        image:
          "https://mcdn01.gittigidiyor.net/56171/tn50/561715494_tn50_0.jpg?1590867",
        title:
          "Apple iPhone 11 64GB-BEYAZ Cep Telefonu(Apple Turkiye Garantili)",
        price: "7.400,00 TL",
        shipStatus: "Ücretsiz Kargo",
      },
      {
        id: "3",
        image:
          "https://mcdn01.gittigidiyor.net/56171/tn50/561715494_tn50_0.jpg?1590867",
        title:
          "Apple iPhone 11 PRO 128GB-SIYAH Cep Telefonu(Apple Turkiye Garantili)",
        price: "7.520,00 TL",
        shipStatus: "Ücretli Kargo",
      },
      {
        id: "4",
        image:
          "https://mcdn01.gittigidiyor.net/56171/tn50/561715494_tn50_0.jpg?1590867",
        title:
          "Apple iPhone 11 256GB-RED Cep Telefonu (2 Yil Apple Turkiye Garantili)",
        price: "7.570,99 TL",
        shipStatus: "Ücretsiz – Aynı Gün Kargo",
      },
    ],
    setProducts: jest.fn(),
  }
  likedContextValues = {
    likedProduct: [],
  }
  filterContextValues = {
    isFilter: false,
    setIsFilter: setFilter,
  }
  wrapper = mount(
    <ProductContext.Provider value={productContextValues}>
      <LikedProductContext.Provider value={likedContextValues}>
        <FilterProductContext.Provider value={filterContextValues}>
          <ProductFilter />
        </FilterProductContext.Provider>
      </LikedProductContext.Provider>
    </ProductContext.Provider>
  )
}

const setFilter = jest.fn(() => {
  filterContextValues.isFilter = !filterContextValues.isFilter
  return filterContextValues.isFilter
})

beforeEach(() => setUpContexts())

it("renders correctly", () => {
  const filterProduct = wrapper
    .find('[data-testid="likedProduct"]')
    .first()
    .text()
  expect(filterProduct).toEqual("Liked")
})

it("tapping product filtering runs correctly", () => {
  likedContextValues = {
    likedProduct: [
      {
        id: "1",
        image:
          "https://mcdn01.gittigidiyor.net/56171/tn50/561715494_tn50_0.jpg?1590867",
        title: "Apple iPhone 11 Cep Telefonu",
        price: "7.300,00 TL",
        shipStatus: "Ücretsiz – Aynı Gün Kargo",
      },
    ],
  }

  wrapper.find('[data-testid="likedProduct"]').first().simulate("click")
  expect(setFilter).toHaveBeenCalledTimes(1)
  expect(filterContextValues.isFilter).toBe(true)

  wrapper.find('[data-testid="likedProduct"]').first().simulate("click")
  expect(filterContextValues.isFilter).toBe(false)
})
