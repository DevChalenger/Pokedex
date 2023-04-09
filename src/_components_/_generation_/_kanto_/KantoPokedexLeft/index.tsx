import {
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderBottom,
  StyledKantoPokedexLeftBorderLeft,
  StyledKantoPokedexLeftBorderRight,
  StyledKantoPokedexLeftBorderTop,
  StyledKantoPokedexLeftRotatePillar,
} from "./styles";

const KantoPokedexLeft = () => {
  return (
    <>
      <StyledKantoPokedexLeftBorderLeft />
      <StyledKantoPokedexLeftBorderBottom />
      <StyledKantoPokedexLeftBorderTop />
      <StyledKantoPokedexLeftBorderRight />
      <StyledKantoPokedexLeft />

      <StyledKantoPokedexBorderInside />
      <StyledKantoPokedexLeftRotatePillar>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>
        <div className="face"></div>

        <div className="rounded"></div>
        <div className="rounded"></div>
      </StyledKantoPokedexLeftRotatePillar>
    </>
  );
};

export default KantoPokedexLeft;
