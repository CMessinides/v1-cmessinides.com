import styled from "styled-components";
import { fontFamilies, tracking, colors } from "./tokens";

export const ProjectName = styled.h3`
  font-weight: 700;
`;

export const ProjectBlurb = styled.p`
  font-style: italic;
  color: ${colors["grey-darker"]};
`;

export const ProjectDetails = styled.p`
  color: ${colors["grey-darker"]};
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;
