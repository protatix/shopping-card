import { gql } from "apollo-boost"

const ALL_PRODUCTS = gql`
  {
    products {
      id
      image
      title
      price
      shipStatus
    }
  }
`

export {
    ALL_PRODUCTS
}