import styled from "styled-components";
import {
  colors,
  fontFamilies,
  leading,
  measure,
  spacing,
  textSizes,
  tracking
} from "../tokens";
import { ButtonLink } from "../button";

const themes = {
  default: {
    text: "grey-darker",
    textStrong: "black",
    bg: "white",
    accent: "blue"
  },
  dark: {
    text: "grey",
    textStrong: "white",
    bg: "black",
    accent: "grey-darkest"
  },
  purple: {
    text: "purple-lightest",
    textStrong: "white",
    bg: "purple",
    accent: "purple-light"
  },
  yellow: {
    text: "orange-darker",
    textStrong: "orange-darkest",
    bg: "yellow",
    accent: "yellow-light"
  }
};

export const ProjectKicker = styled.time`
  display: block;
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;

export const ProjectHeading = styled.h2`
  font-size: ${textSizes.xl};
  line-height: ${leading.tight};
  margin: ${spacing.sm} 0;

  em {
    font-style: italic;
  }
`;

export const ProjectBlurb = styled.p`
  max-width: ${measure.normal};
`;

export const ProjectButton = styled(ButtonLink)`
  ${ProjectBlurb} + & {
    margin-top: ${spacing.sm};
  }
`;

export function useProjectTheme(themeName = "default") {
  const { text, textStrong, bg, accent } =
    themes[themeName] || themes["default"];
  return `
    color: ${colors[text]};
    background-color: ${colors[bg]};

    & ${ProjectHeading} {
      color: ${colors[textStrong]};
    }

    & ${ProjectButton} {
      color: ${colors[bg]};
      background-color: ${colors[textStrong]};

      &:focus {
        box-shadow: 0 0 0 4px ${colors[textStrong].transparentize(0.33)};
      }
    }

    & svg {
      fill: ${colors[accent]};
    }
  `;
}
