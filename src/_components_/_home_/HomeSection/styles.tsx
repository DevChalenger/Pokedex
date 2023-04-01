import styled from "styled-components";

const StyledHomeSection = styled.section`
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const StyledHomeTitle = styled.h1`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 30px;
  margin: 0 10px;
  margin-bottom: 1em;
`;

export { StyledHomeSection, StyledHomeTitle };
