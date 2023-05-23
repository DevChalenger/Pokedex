import KantoPokedexRightInside from "./KantoPokedexRightInside";
import {
  StyledKantoPokedexRight,
  StyledKantoPokedexRightBack,
  StyledKantoPokedexRightBorder,
  StyledKantoPokedexRightFront,
} from "./styles";

const KantoPokedexRight = () => {
  return (
    <StyledKantoPokedexRight>
      <StyledKantoPokedexRightBack>
        <div className="arrow"></div>
      </StyledKantoPokedexRightBack>
      <StyledKantoPokedexRightFront />
      <StyledKantoPokedexRightBorder>
        <div className="border left"></div>
        <div className="border right"></div>
        <div className="border bottom"></div>
        <div className="border top-left"></div>
        <div className="border top-diagonale"></div>
        <div className="border top-right"></div>
      </StyledKantoPokedexRightBorder>
      <KantoPokedexRightInside />
    </StyledKantoPokedexRight>
  );
};

export default KantoPokedexRight;
