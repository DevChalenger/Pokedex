interface Props {
  count: number;
  width: number;
}

export const RoundedColumnStyle = ({ count, width }: Props) => {
  let elements = "";
  const faceDeg = 360 / count;
  const position = width / 3.14 / 2;

  for (let index = 0; index < count; index++) {
    elements += `
      &:nth-child(${index + 1}){
        transform: rotateY(calc(${faceDeg}deg * ${
      index + 1
    })) translateZ(${position}px);
      };
      `;
  }

  return elements;
};

export const ClipPathBody =
  "clip-path: polygon(58.5% 7.5%,76% 0px,100% 0,100% 100%,0% 100%,0px 100%,0px 7.5%);";
