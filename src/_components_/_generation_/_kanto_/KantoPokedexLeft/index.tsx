import KantoPokedexLeftInside from "./KantoPokedexLeftInside";
import {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftRotatePillar,
} from "./styles";

const KantoPokedexLeft = () => {
  const NumberFacePillar = () => {
    let elements = [];
    for (let index = 0; index < 50; index++) {
      elements.push(index);
    }
    return elements.map((index) => <div key={index} className={`face`}></div>);
  };
  return (
    <>
      <StyledKantoPokedexLeftBorderLeft />
      <StyledKantoPokedexLeftBorderBottom />
      <StyledKantoPokedexLeftBorderRight />
      <StyledKantoPokedexLeft />

      <KantoPokedexLeftInside />
      <StyledKantoPokedexLeftRotatePillar>
        {NumberFacePillar()}

        <div className="rounded top"></div>
        <div className="rounded bottom"></div>
      </StyledKantoPokedexLeftRotatePillar>
    </>
  );
};

export default KantoPokedexLeft;
