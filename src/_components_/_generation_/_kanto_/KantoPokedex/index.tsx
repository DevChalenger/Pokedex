import KantoPokedexHeader from "../KantoPokedexHeader";
import KantoPokedexLeft from "../KantoPokedexLeft";
import {
  StyledKantoPokedex,
  StyledKantoPokedexRight,
  StyledKantoPokedexBack,
} from "./styles";

const KantoPokedex = () => {
  return (
    <StyledKantoPokedex>
      <KantoPokedexHeader />
      <KantoPokedexLeft />
      <StyledKantoPokedexRight />
      <StyledKantoPokedexBack />
    </StyledKantoPokedex>
  );
};

export default KantoPokedex;
