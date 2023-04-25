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
