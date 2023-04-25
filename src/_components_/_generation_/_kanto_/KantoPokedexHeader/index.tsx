import KantoPokedexLed from "./KantoPokedexLed";

import {
  StyledKantoPokedexHeader,
  StyledKantoPokedexHeaderBorderRight,
  StyledKantoPokedexHeaderBorderLeft,
  StyledKantoPokedexHeaderBorderBottom,
  StyledKantoPokedexHeaderBorderTop,
  StyledKantoPokedexHeaderBorderBottomDiagonnale,
  StyledKantoPokedexHeaderBorderBottomRight,
  StyledKantoPokedexHeaderBack,
} from "./styles";

const KantoPokedexHeader = () => {
  return (
    <>
      <StyledKantoPokedexHeader id="header" />
      <StyledKantoPokedexHeaderBack id="header-back" />
      {/* Border */}
      <StyledKantoPokedexHeaderBorderRight id="header-border-right" />
      <StyledKantoPokedexHeaderBorderLeft id="header-border-left" />
      <StyledKantoPokedexHeaderBorderTop id="header-border-top" />
      <StyledKantoPokedexHeaderBorderBottom id="header-border-bottom-left" />
      <StyledKantoPokedexHeaderBorderBottomDiagonnale id="header-border-bottom-diagonnale" />
      <StyledKantoPokedexHeaderBorderBottomRight id="header-border-bottom-right" />

      {/* Button */}
      <KantoPokedexLed />
    </>
  );
};

export default KantoPokedexHeader;
