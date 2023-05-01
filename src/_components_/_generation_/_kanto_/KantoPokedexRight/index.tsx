import {
  StyledKantoPokedexRight,
  StyledKantoPokedexRightBack,
  StyledKantoPokedexRightFront,
} from "./styles";

const KantoPokedexRight = () => {
  return (
    <StyledKantoPokedexRight>
      <StyledKantoPokedexRightBack>
        <div className="arrow"></div>
      </StyledKantoPokedexRightBack>
      <StyledKantoPokedexRightFront />
      <div className="border left"></div>
      <div className="border right"></div>
      <div className="border top"></div>
      <div className="border bottom"></div>
    </StyledKantoPokedexRight>
  );
};

export default KantoPokedexRight;
