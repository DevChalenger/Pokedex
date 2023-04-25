import styled from "styled-components";
import kanto from "../../../_assets_/map/kanto.jpg";

const StyledKanto = styled.main`
  background: url(${kanto}) center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  #screen {
    perspective: 2000px;
  }
`;

export { StyledKanto };
