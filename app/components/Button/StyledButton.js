import { Button } from "@blueprintjs/core";
import styled, { css } from "styled-components";
import { darken } from "polished";

function generateBackgroundColor(backgroundColor) {
  return css`
    background-color: ${backgroundColor};

    &:hover {
      background-color: ${darken(0.05, backgroundColor)};
    }
  `;
}

const StyledButton = styled(Button)`
    box-shadow:  none !important;
    border-radius: 0 !important;
    transition: 0.3s;

    &:not([class*="bp3-intent-"]) {
        box-shadow: 0 0 0 1px #d8d8d8 !important;
        generateBackgroundColor(white)
  }
`;
export default StyledButton;
