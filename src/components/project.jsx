import styled from "styled-components";
import { fontFamilies, tracking, colors } from "./tokens";

export const ProjectName = styled.h3`
  font-weight: 700;
  display: inline;
  ${props => props.color && "color: " + props.color};
`;

export const ProjectBlurb = styled.p`
  font-style: italic;
  color: ${props => (props.color ? props.color : colors["grey-darker"])};
  display: inline;

  &::before {
    content: "\\2002";
  }
`;

export const ProjectDetails = styled.p`
  color: ${colors["grey-darker"]};
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;
