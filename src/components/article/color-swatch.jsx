import React from "react";
import styled from "styled-components";
import { shadows, fontFamilies, tracking } from "../tokens";

const Swatch = styled.div`
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.hex || "#000000"};
  color: ${props => props.textColor || "#ffffff"};
  width: 128px;
  height: 128px;
  border-radius: 100%;
  box-shadow: ${shadows.inner};
`;

export default function ColorSwatch({
  hex = "#000000",
  textColor = "#ffffff"
}) {
  return (
    <Swatch hex={hex} textColor={textColor}>
      {hex}
    </Swatch>
  );
}
