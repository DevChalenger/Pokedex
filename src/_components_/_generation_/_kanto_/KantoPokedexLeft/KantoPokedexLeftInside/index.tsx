import { KantoContext } from "../../../../../_utils_/_context_/kanto";

import {
  StyledKantoPokedexLeftInside,
  StyledKantoPokedexBorderInside,
  StyledKantoPokedexLeftScreen,
  StyledKantoPokedexLeftScreenBorder,
  StyledKantoPokedexLeftScreenInside,
  StyledKantoPokedexLeftRoundedButton,
  StyledKantoPokedexLeftArrowKey,
  StyledKantoPokedexLeftLed,
  StyledKantoPokedexLeftPad,
} from "./styles";

import { useState, useContext } from "react";

/**
 * @function KantoPokedexLeftInside
 * @returns The inside of the left side of the pokedex
 */

const KantoPokedexLeftInside = () => {
  const [padState, setPadState] = useState(false);

  const sound = useContext(KantoContext);

  const ClickButton = () => {
    sound.current.currentTime = 0;
    sound.current.play();
  };

  interface ArrowProps {
    setKeyControl: any;
    direction: string;
  }

  const ArrowButton = ({ setKeyControl, direction }: ArrowProps) => {
    return (
      <div
        className={`arrow ${direction}`}
        onClick={() => {
          setKeyControl({ isClicked: true, direction: direction });
          ClickButton();
        }}
      >
        <div className="border left"></div>
        <div className="border right"></div>
        <div className="border top"></div>
      </div>
    );
  };

  const [keyControl, setKeyControl] = useState({
    isClicked: false,
    direction: "",
  });

  const RoundedButton = () => {
    let elements = [];
    for (let index = 0; index < 50; index++) {
      elements.push(index);
    }
    return elements.map((index) => (
      <div key={index} className={`rounded-button`}></div>
    ));
  };

  return (
    <StyledKantoPokedexLeftInside>
      <StyledKantoPokedexBorderInside />
      {/*Screen*/}
      <>
        <StyledKantoPokedexLeftScreen id="left-screen">
          <StyledKantoPokedexLeftScreenInside id="left-screen-inside" />
          <div id="left-screen-top-led">
            <div className="left-screen-led"></div>
            <div className="left-screen-led"></div>
          </div>
          <div id="left-screen-bottom-led"></div>
          <div id="left-screen-sound">
            <div className="left-screen-sound-output"></div>
            <div className="left-screen-sound-output"></div>
            <div className="left-screen-sound-output"></div>
            <div className="left-screen-sound-output"></div>
          </div>
        </StyledKantoPokedexLeftScreen>
        <StyledKantoPokedexLeftScreenBorder>
          <div className="border left"></div>
          <div className="border right"></div>
          <div className="border top"></div>
          <div className="border bottom"></div>
          <div className="border diagonale"></div>
        </StyledKantoPokedexLeftScreenBorder>
      </>
      {/*Controlers*/}
      <>
        <StyledKantoPokedexLeftRoundedButton
          isClicked={padState}
          onClick={() => {
            setPadState(true);
            ClickButton();
          }}
          onAnimationEnd={() => {
            setPadState(false);
          }}
        >
          <div className="rounded-container">{RoundedButton()}</div>
          <div className="rounded-pad"></div>
        </StyledKantoPokedexLeftRoundedButton>
        <StyledKantoPokedexLeftArrowKey
          keyControl={keyControl}
          onAnimationEnd={() =>
            setKeyControl({ isClicked: false, direction: "" })
          }
        >
          <div className="center"></div>
          <ArrowButton setKeyControl={setKeyControl} direction="left" />
          <ArrowButton setKeyControl={setKeyControl} direction="right" />
          <ArrowButton setKeyControl={setKeyControl} direction="top" />
          <ArrowButton setKeyControl={setKeyControl} direction="bottom" />
        </StyledKantoPokedexLeftArrowKey>
        <StyledKantoPokedexLeftLed>
          <div className="led red"></div>
          <div className="led blue"></div>
        </StyledKantoPokedexLeftLed>
        <StyledKantoPokedexLeftPad />
      </>
    </StyledKantoPokedexLeftInside>
  );
};

export default KantoPokedexLeftInside;
