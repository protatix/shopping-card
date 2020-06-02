import React, { useContext } from "react"
import { HeartIcon } from "../../assets/images/icons"
import { StyledProductLiked } from "./Styles"

//Hooks Context
import LikedProductContext from "../../contexts/LikedProductContext"

const ProductLiked = () => {
  const { likedProduct } = useContext(LikedProductContext)

  return (
    <StyledProductLiked>
      <img src={HeartIcon} alt="Like Icon" />
      <p>
        {likedProduct.length} {likedProduct.length > 1 ? "products" : "product"}
      </p>
    </StyledProductLiked>
  )
}

export default ProductLiked
