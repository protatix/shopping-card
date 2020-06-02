import styled from "styled-components";
import { backgroundColor, lightskyblue } from "../../assets/styles/color";

const StyledCard = styled.div`
  width: 300px;
  position: relative;
  box-shadow: 0 1px 2px 0 rgba(85,85,85,.6);
  border-radius: 3px;
  background-color: #fff;

  img {
    width: 100%;
  }

  h1 {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin: 10px;
  }
`;

const StyledProductPrice = styled.div`
  width: auto;
  background-color: ${backgroundColor};
  padding: 10px 0;
  object-fit: contain;
  margin: 1%;

  span {
      font-weight: bolder;
      font-size: 20px;
      padding: 0.5em;
  }
`;

const StyledProductCargo = styled.div`
    display: flex;
    justify-content: flex-start;
    margin: 0px 10px;
    img {
        width: initial;
    }
`;

const StyledProductLike = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 10px;
    right: 10px;
    width: 35px;
    height: 35px;
    background-color: ${backgroundColor};
    border-radius: 50%;
    text-align: center;
    :hover{
      background-color: ${lightskyblue};
    }
    img {
        width: 25px;
        height: 25px;
    }
`;



export { StyledCard, StyledProductPrice, StyledProductCargo, StyledProductLike };
