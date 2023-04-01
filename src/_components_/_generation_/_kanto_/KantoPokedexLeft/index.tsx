import {
  StyledKantoPokedexLeft,
  StyledKantoPokedexLeftBorderLeft,
} from "./styles";

const KantoPokedexLeft = () => {
  return (
    <>
      <StyledKantoPokedexLeftBorderLeft></StyledKantoPokedexLeftBorderLeft>
      <StyledKantoPokedexLeft>
        <div id="pokemon-screen">
          <div id="screen-edge-left"></div>
          <div id="led-screen">
            <div className="led-red"></div>
            <div className="led-red"></div>
          </div>
          <div id="screen"></div>
          <div id="bottom-screen">
            <div className="led-red"></div>
            <div id="sound-output">
              <div className="sound-output"></div>
              <div className="sound-output"></div>
              <div className="sound-output"></div>
              <div className="sound-output"></div>
            </div>
          </div>
        </div>
      </StyledKantoPokedexLeft>
    </>
  );
};

export default KantoPokedexLeft;
