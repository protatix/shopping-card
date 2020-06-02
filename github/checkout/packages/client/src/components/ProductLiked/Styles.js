import styled from "styled-components";
import { fontDescription } from '../../assets/styles/font';
import { colorWhite } from '../../assets/styles/color';

const StyledProductLiked = styled.div`
  background-color: ${colorWhite};
  width: 200px;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;

  p {
    font-family: ${fontDescription.family};
    font-size: 20px;
  }

`;

export { StyledProductLiked }