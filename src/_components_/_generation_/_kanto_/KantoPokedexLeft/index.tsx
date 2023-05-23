import KantoPokedexHeader from "../KantoPokedexHeader";
import KantoPokedexLeftInside from "./KantoPokedexLeftInside";
import {
  StyledKantoPokedexLeftBack,
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftRotatePillar,
  StyledKantoPokedexLeftFront,
} from "./styles";

const KantoPokedexLeft = () => {
  const NumberFacePillar = () => {
    let elements = [];
    for (let index = 0; index < 50; index++) {
      elements.push(index);
    }
    return elements.map((item, index) => (
      <div key={index} className={`face ${item}`}></div>
    ));
  };
  return (
    <>
      <StyledKantoPokedexLeft id="left-side">
        <KantoPokedexHeader />
        <StyledKantoPokedexLeftFront />
        <StyledKantoPokedexLeftBorderLeft id="left-side_border-left" />
        <StyledKantoPokedexLeftBorderBottom id="left-side_border-bottom" />
        <StyledKantoPokedexLeftBorderRight id="left-side_border-right" />

        <KantoPokedexLeftInside />
        <StyledKantoPokedexLeftRotatePillar id="rotate-pillar">
          {NumberFacePillar()}

          <div className="rounded top"></div>
          <div className="rounded bottom"></div>
        </StyledKantoPokedexLeftRotatePillar>
        <StyledKantoPokedexLeftBack />
      </StyledKantoPokedexLeft>
    </>
  );
};

export default KantoPokedexLeft;
