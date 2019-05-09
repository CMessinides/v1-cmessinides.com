import styled, { css } from "styled-components";
import { spacing, fontFamilies, leading, tracking, shadows } from "./tokens";

const sharedButtonStyles = css`
  ${props => props.textColor && "color: " + props.textColor};
  ${props => props.bgColor && "background-color: " + props.bgColor};
  box-shadow: ${shadows.sm};
  display: inline-block;
  line-height: ${leading.none};
  padding: ${spacing.xs} ${spacing.sm.asPx};
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  border-radius: 8px;
  transition: 160ms box-shadow linear,
    160ms transform cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: ${shadows.md};
    transform: translateY(-2px);
  }

  &:focus {
    outline: 5px solid transparent;
  }
`;

const Button = styled.button`
  appearance: none;
  border: none;
  background: none;
  ${sharedButtonStyles}
`;

export const ButtonLink = styled.a`
  text-decoration: none;
  ${sharedButtonStyles}
`;

export default Button;
