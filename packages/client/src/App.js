import React, { useState, useEffect } from "react"

//Components
import ProductLiked from "./components/ProductLiked/ProductLiked"
import ProductFilter from "./components/ProductFilter/ProductFilter"
import ProductCard from "./components/ProductCard/ProductCard"

// Layouts
import HomeLayout from "./layouts/Home"
import HeaderLayout from "./layouts/Header"
import ProductLayout from "./layouts/Products"

//Graphql
import { useQuery } from "@apollo/react-hooks"
import { ALL_PRODUCTS } from "./queries/query";

//React Context
import LikedProductContext from "./contexts/LikedProductContext"
import ProductContext from "./contexts/ProductContext"
import FilterProductContext from "./contexts/FilterProductContext"

const App = () => {
  const [likedProduct, setLikedProduct] = useState([])
  const [products, setProducts] = useState([])
  const [isFilter, setIsFilter] = useState(false)
  const { loading, error, data } = useQuery(ALL_PRODUCTS)

  useEffect(() => {
    if (!loading && data) {
      setProducts(data.products)
    }
  }, [loading, data])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <ProductContext.Provider value={{ products, setProducts }}>
        <LikedProductContext.Provider value={{ likedProduct, setLikedProduct }}>
          <FilterProductContext.Provider value={{ isFilter, setIsFilter }}>
            <HomeLayout>
              <HeaderLayout>
                <ProductLiked />
                <ProductFilter />
              </HeaderLayout>
              <ProductLayout>
                <ProductCard products={isFilter ? likedProduct : products} />
              </ProductLayout>
            </HomeLayout>
          </FilterProductContext.Provider>
        </LikedProductContext.Provider>
      </ProductContext.Provider>
    </>
  )
}

export default App
