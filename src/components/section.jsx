import styled from "styled-components";
import { spacing, screens, colors, textSizes } from "./tokens";

const Section = styled.section`
  padding: ${spacing.xl} 0;

  @media ${screens.md} {
    padding: ${spacing["2xl"]} 0;
  }
`;

Section.Heading = styled.h2`
  font-size: ${textSizes.lg};
  font-weight: 700;

  ::before {
    content: "\\2015\\2003";
    color: ${props => (props.accent ? colors[props.accent] : colors.purple)};
  }
`;

export default Section;
