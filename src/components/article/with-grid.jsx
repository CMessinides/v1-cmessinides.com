import styled, { css } from "styled-components";

export default function withGrid(component) {
  return (...args) => {
    return styled(component)`
      @supports (display: grid) {
        ${css(...args)};
      }
    `;
  };
}
