import KantoPokedexHeader from "../KantoPokedexHeader";
import KantoPokedexLeft from "../KantoPokedexLeft";
import KantoPokedexRight from "../KantoPokedexRight";
import { StyledKantoPokedex } from "./styles";

const KantoPokedex = () => {
  return (
    <StyledKantoPokedex>
      <KantoPokedexLeft />
      <KantoPokedexRight />
    </StyledKantoPokedex>
  );
};

export default KantoPokedex;
