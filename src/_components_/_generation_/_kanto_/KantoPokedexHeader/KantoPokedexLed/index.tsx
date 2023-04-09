import {
  StyledKantoPokedexHeaderLedBlue,
  StyledKantoPokedexHeaderLedGray,
} from "./styles";

const KantoPokedexHeaderLed = () => {
  const sampleArray = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
  ];
  return (
    <>
      <StyledKantoPokedexHeaderLedGray id="header-gray-led" />
      <StyledKantoPokedexHeaderLedBlue id="header-blue-led">
        {sampleArray.map((arr, index) => (
          <div key={index}></div>
        ))}
      </StyledKantoPokedexHeaderLedBlue>
    </>
  );
};
export default KantoPokedexHeaderLed;
