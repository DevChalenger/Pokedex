import {
  StyledKantoPokedexHeaderLedBlue,
  StyledKantoPokedexHeaderLedGray,
} from "./styles";

const KantoPokedexHeaderLed = () => {
  return (
    <>
      <StyledKantoPokedexHeaderLedGray id="header-gray-led" />
      <StyledKantoPokedexHeaderLedBlue id="header-blue-led">
        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>

        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>
        <div className="circle border"></div>

        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </StyledKantoPokedexHeaderLedBlue>
    </>
  );
};
export default KantoPokedexHeaderLed;
