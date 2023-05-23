import { createContext, useRef } from "react";

const KantoContext = createContext();

const KantoProvider = ({ children }) => {
  const sound = useRef(
    new Audio(require("../../../_song_/Pokemon-A-Button.mp3"))
  );

  return (
    <KantoContext.Provider value={sound}>{children}</KantoContext.Provider>
  );
};

export { KantoContext, KantoProvider };
