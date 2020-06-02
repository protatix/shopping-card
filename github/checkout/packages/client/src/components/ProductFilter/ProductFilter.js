import React, { useContext } from "react"
import { StyledProductLiked } from "./Styles"

//Context
import FilterProductContext from "../../contexts/FilterProductContext"

const ProductFilter = () => {
  const { isFilter, setIsFilter } = useContext(FilterProductContext)

  const filterLiked = () => setIsFilter(!isFilter)

  return (
    <StyledProductLiked data-testid="likedProduct" onClick={filterLiked}>
      <strong>{isFilter ? "My Liked" : "Liked"}</strong>
    </StyledProductLiked>
  )
}

export default ProductFilter
