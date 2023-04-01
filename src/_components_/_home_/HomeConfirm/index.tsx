import { useEffect, useRef, useState } from "react";
import HomeConfirmButton from "./HomeConfirmButton";
import { StyledConfirm, StyledConfirmAppear } from "./styles";

const HomeConfirm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const sound = useRef(
    new Audio(require("../../../_song_/Pokemon-Route-24.mp3"))
  );

  const audio = sound.current;

  const PlayingTheme = () => {
    setTimeout(() => {
      audio.play();
      audio.loop = true;
      audio.volume = 0.4;
      setIsConfirmed(true);
    }, 500);
  };

  useEffect(() => {
    return () => audio.pause();
  }, [audio]);

  return (
    <StyledConfirm isConfirmed={isConfirmed}>
      <StyledConfirmAppear>
        <span>Are you ready to begin your Journey as Pokemon Trainer ?</span>
        <div>
          <HomeConfirmButton
            onClick={PlayingTheme}
            value={"Yes"}
            isConfirmed={isConfirmed}
          />
          <HomeConfirmButton
            onClick={() => window.open("https://www.google.com")}
            value={"No"}
            isConfirmed={isConfirmed}
          />
        </div>
      </StyledConfirmAppear>
    </StyledConfirm>
  );
};

export default HomeConfirm;
