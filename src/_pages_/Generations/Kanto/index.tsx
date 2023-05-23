import KantoPokedex from "../../../_components_/_generation_/_kanto_/KantoPokedex";
import { KantoProvider } from "../../../_utils_/_context_/kanto";
import { StyledKanto } from "./styles";

const Kanto = () => {
  return (
    <KantoProvider>
      <StyledKanto>
        <div id="screen">
          <KantoPokedex />
        </div>
      </StyledKanto>
    </KantoProvider>
  );
};

export default Kanto;
