import React from "react";
import { StyledHomeButtonConfirm } from "./styles";

interface Props {
  value: string;
  onClick: any;
  isConfirmed: boolean;
}

const ButtonConfirm = ({ value, onClick, isConfirmed }: Props) => {
  return (
    <StyledHomeButtonConfirm onClick={onClick} isConfirmed={isConfirmed}>
      <span>{value}</span>
    </StyledHomeButtonConfirm>
  );
};

export default ButtonConfirm;
