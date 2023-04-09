import KantoPokedexHeader from "../KantoPokedexHeader";
import KantoPokedexLeft from "../KantoPokedexLeft";
import KantoPokedexRight from "../KantoPokedexRight";
import { StyledKantoPokedex, StyledKantoPokedexBack } from "./styles";

const KantoPokedex = () => {
  return (
    <StyledKantoPokedex>
      <KantoPokedexHeader />
      <KantoPokedexLeft />
      <KantoPokedexRight />
      <StyledKantoPokedexBack />
    </StyledKantoPokedex>
  );
};

export default KantoPokedex;
