import KantoPokedex from "../../../_components_/_generation_/_kanto_/KantoPokedex";
import { StyledKanto } from "./styles";

const Kanto = () => {
  return (
    <StyledKanto>
      <div id="screen">
        <KantoPokedex />
      </div>
    </StyledKanto>
  );
};

export default Kanto;
