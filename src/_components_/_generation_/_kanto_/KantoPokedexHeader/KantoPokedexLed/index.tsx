import {
  StyledKantoPokedexHeaderLedBlue,
  StyledKantoPokedexHeaderLedGray,
} from "./styles";

interface Props {
  numbers: number;
}
const numberFace = ({ numbers }: Props) => {
  const elements = [];
  for (let index = 0; index < numbers; index++) {
    elements.push(index);
  }

  return elements.map((arr, index) => <div key={index}></div>);
};

const KantoPokedexHeaderLed = () => {
  return (
    <>
      <StyledKantoPokedexHeaderLedGray id="header-gray-led" />
      <StyledKantoPokedexHeaderLedBlue id="header-blue-led">
        {numberFace({ numbers: 15 })}
      </StyledKantoPokedexHeaderLedBlue>
    </>
  );
};
export default KantoPokedexHeaderLed;
