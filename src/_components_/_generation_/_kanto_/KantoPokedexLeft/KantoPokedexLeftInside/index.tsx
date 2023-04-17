import {
  StyledKantoPokedexLeftInside,
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeftScreen,
  StyledKantoPokedexLeftScreenBorder,
  StyledKantoPokedexLeftScreenInside,
} from "./styles";

const KantoPokedexLeftInside = () => {
  return (
    <StyledKantoPokedexLeftInside>
      <StyledKantoPokedexBorderInside />
      <StyledKantoPokedexLeftScreen id="left-screen">
        <StyledKantoPokedexLeftScreenInside id="left-screen-inside" />
        <div id="left-screen-top-led">
          <div className="left-screen-led"></div>
          <div className="left-screen-led"></div>
        </div>
        <div id="left-screen-bottom-led"></div>
        <div id="left-screen-sound"></div>
      </StyledKantoPokedexLeftScreen>
      <StyledKantoPokedexLeftScreenBorder>
        <div className="border left"></div>
        <div className="border right"></div>
        <div className="border top"></div>
        <div className="border bottom"></div>
        <div className="border diagonale"></div>
      </StyledKantoPokedexLeftScreenBorder>
    </StyledKantoPokedexLeftInside>
  );
};

export default KantoPokedexLeftInside;
