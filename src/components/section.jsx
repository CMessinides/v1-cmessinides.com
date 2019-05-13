import styled from "styled-components";
import {
  spacing,
  screens,
  colors,
  textSizes,
  fontFamilies,
  tracking
} from "./tokens";

const Section = styled.section`
  padding: ${spacing.xl} 0;

  @media ${screens.md} {
    padding: ${spacing["3xl"]} 0;
  }

  @media ${screens.xl} {
    padding: ${spacing["4xl"]} 0;
  }
`;

Section.Heading = styled.h2`
  font-family: ${fontFamilies.heading};
  font-size: ${textSizes.md};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  margin-bottom: ${spacing.xl};

  ::before {
    content: "\\2015\\2003";
    color: ${props => (props.accent ? colors[props.accent] : colors.purple)};
  }

  @media ${screens.md} {
    margin-bottom: ${spacing["2xl"]};
  }
`;

export default Section;
