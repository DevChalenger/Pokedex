import { useState, useContext } from "react";

import {
  StyledKantoPokedexRightInside,
  StyledKantoPokedexRightInsideBothBlackLed,
  StyledKantoPokedexRightInsideBothPad,
  StyledKantoPokedexRightInsideBottomSection,
  StyledKantoPokedexRightInsideButtonBothWrapperLeft,
  StyledKantoPokedexRightInsideButtonItems,
  StyledKantoPokedexRightInsideButtonWrapper,
} from "./style";

import { KantoContext } from "../../../../../_utils_/_context_/kanto";

interface PropsWrapper {
  number: number;
}

interface PropsItem {
  item: number;
}

const ButtonItem = ({ item }: PropsItem) => {
  const [isClicked, setIsCliked] = useState(false);

  const sound = useContext(KantoContext);

  const ClickButton = () => {
    sound.current.currentTime = 0;
    sound.current.play();
    setIsCliked(true);
  };

  return (
    <>
      <StyledKantoPokedexRightInsideButtonItems
        onClick={() => ClickButton()}
        onAnimationEndCapture={() => setIsCliked(false)}
        className={`${isClicked ? "isClicked" : ""}`}
      >
        <div className="border left"></div>
        <div className="border right"></div>
        <div className="border top"></div>
        <div className="border bottom"></div>
      </StyledKantoPokedexRightInsideButtonItems>
    </>
  );
};
const ButtonItemWrapper = ({ number }: PropsWrapper) => {
  const elements = [];

  for (let index = 0; index < number; index++) {
    elements.push(index);
  }
  return (
    <StyledKantoPokedexRightInsideButtonWrapper className="button-wrapper">
      {elements.map((item, index) => (
        <ButtonItem key={index} item={item} />
      ))}
    </StyledKantoPokedexRightInsideButtonWrapper>
  );
};

const ButtonBothWrapper = ({ number }: PropsWrapper) => {
  const elements = [];

  for (let index = 0; index < number; index++) {
    elements.push(index);
  }

  return (
    <StyledKantoPokedexRightInsideButtonBothWrapperLeft>
      {elements.map((item, index) => (
        <ButtonItem item={item} key={index}></ButtonItem>
      ))}
    </StyledKantoPokedexRightInsideButtonBothWrapperLeft>
  );
};

const KantoPokedexRightInside = () => {
  return (
    <StyledKantoPokedexRightInside>
      <div className="screen-top"></div>
      {ButtonItemWrapper({ number: 10 })}
      <StyledKantoPokedexRightInsideBottomSection>
        {ButtonBothWrapper({ number: 2 })}
        <StyledKantoPokedexRightInsideBothBlackLed>
          <div className="led"></div>
          <div className="led"></div>
        </StyledKantoPokedexRightInsideBothBlackLed>
        <StyledKantoPokedexRightInsideBothPad>
          <div className="pad"></div>
          <div className="pad"></div>
        </StyledKantoPokedexRightInsideBothPad>
      </StyledKantoPokedexRightInsideBottomSection>
    </StyledKantoPokedexRightInside>
  );
};

export default KantoPokedexRightInside;
