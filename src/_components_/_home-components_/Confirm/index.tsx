import React from "react";
import { StyledConfirm, StyledConfirmAppear } from "./style";

const Confirm = () => {
  return (
    <StyledConfirm>
      <StyledConfirmAppear>
        <span>Are you ready to begin your Journey as Pokemon Trainer ?</span>
        <div>
          <button>
            <span>Yes</span>
          </button>
          <button>
            <span>No</span>
          </button>
        </div>
      </StyledConfirmAppear>
    </StyledConfirm>
  );
};

export default Confirm;
