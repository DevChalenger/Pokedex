import { useRef, useEffect } from "react";
import { StyledIndexItemsLink } from "./styles";
import { Link } from "react-router-dom";

interface Props {
  item: { link: string; generation: number; preview: string };
}

const IndexLinkPokedexItem = ({ item }: Props) => {
  const audioHover = useRef(
    new Audio(require("../../../_song_/Pokemon-A-Button.mp3"))
  );

  const onHover = () => {
    const audio = audioHover.current;
    audio.currentTime = 0;
    audio.play();
  };

  useEffect(() => {
    audioHover.current.pause();
  }, []);

  return (
    <>
      <StyledIndexItemsLink
        previewPokedex={item.preview}
        onMouseEnter={() => onHover()}
      >
        <Link to={"/pokedex" + item.link}>
          <span>Generation {item.generation} </span>
        </Link>
      </StyledIndexItemsLink>
    </>
  );
};

export default IndexLinkPokedexItem;
