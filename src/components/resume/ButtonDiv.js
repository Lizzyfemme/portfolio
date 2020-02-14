import styled from "styled-components";

const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;

  background-color: transparent;
  border: none;
  &:active {
    outline: 0;
  }
  &:focus {
    outline: 0;
  }
`;
export default ButtonDiv;
// @media screen and (max-width: 500px) {
//   background-image: url(${cell_image});
// }