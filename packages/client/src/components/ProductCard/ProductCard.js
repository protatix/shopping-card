import React, { useContext } from "react"
import { CargoIcon, EmptyHeart, HeartIcon } from "../../assets/images/icons"
import {
  StyledCard,
  StyledProductPrice,
  StyledProductCargo,
  StyledProductLike,
} from "./Styles"

//Context
import LikedProductContext from "../../contexts/LikedProductContext"

//Prop Types
import PropTypes from "prop-types"

const ProductCard = ({ products }) => {
  const { likedProduct, setLikedProduct } = useContext(LikedProductContext)

  const changeIcon = (image, target) => {
    target.src = image
  }

  const likedClicked = (product, event) => {
    if (likedProduct.includes(product)) {
      changeIcon(EmptyHeart, event.target)
      setLikedProduct(() => likedProduct.filter((liked) => product !== liked))
      return
    }

    changeIcon(HeartIcon, event.target)
    setLikedProduct(() => [...likedProduct, product])
  }

  return (
    <React.Fragment>
      {products.map((product) => (
        <div key={product.id}>
          <StyledCard>
            <StyledProductLike>
              <img
                onClick={(event) => likedClicked(product, event)}
                src={EmptyHeart}
                alt="Like Icon"
              />
            </StyledProductLike>
            <a href="https://www.gittigidiyor.com/">
              <img src={product.image} alt={product.title} />
            </a>
            <h1>{product.title}</h1>
            <StyledProductPrice>
              <span>{product.price}</span>
            </StyledProductPrice>
            <StyledProductCargo>
              <img src={CargoIcon} alt={product.shipStatus} />
              <p>{product.shipStatus}</p>
            </StyledProductCargo>
          </StyledCard>
        </div>
      ))}
    </React.Fragment>
  )
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      shipStatus: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
}

export default ProductCard
