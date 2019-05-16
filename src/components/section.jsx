import styled from "styled-components";
import {
  spacing,
  screens,
  colors,
  textSizes,
  fontFamilies,
  tracking
} from "./tokens";

const wrapInMediaQuery = (query = null, styles) => {
  if (query === null) return styles;

  return `
    @media ${query} {
      ${styles}
    }
  `;
};

export const useSectionSpacing = ({
  direction = "both",
  property = "padding"
} = {}) => {
  const includeTop = direction === "top" || direction === "both";
  const includeBottom = direction === "bottom" || direction === "both";

  const sizes = [
    { screen: null, space: spacing.xl },
    { screen: screens.md, space: spacing["3xl"] },
    { screen: screens.lg, space: spacing["4xl"] }
  ];

  return sizes
    .map(({ screen, space }) => {
      return wrapInMediaQuery(
        screen,
        `
      ${includeTop ? property + "-top: " + space : ""};
      ${includeBottom ? property + "-bottom: " + space : ""};
    `
      );
    })
    .join(" ");
};

const Section = styled.section`
  ${useSectionSpacing()};
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
