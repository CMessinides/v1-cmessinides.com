import React from "react";
import styled from "styled-components";
import { useSectionSpacing } from "./section";
import {
  colors,
  fontFamilies,
  tracking,
  spacing,
  textSizes,
  screens,
  leading
} from "./tokens";
import { ProjectName, ProjectBlurb } from "./project";
import Container from "./container";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ArrowRight } from "react-feather";

const NextProjectLink = styled(AniLink).attrs(
  ({ themeColor = colors.black, textColor = colors.white }) => {
    return {
      paintDrip: true,
      duration: 0.8,
      hex: themeColor,
      state: { hasPageTransition: true },
      themeColor,
      textColor
    };
  }
)`
  border-top: 1px ${colors["grey-light"]} solid;
  display: block;
  text-decoration: none;
  color: inherit;
  transition: 160ms color linear, 160ms background-color linear,
    160ms border-color linear;
  ${useSectionSpacing()};

  &:hover,
  &:focus {
    border-color: ${props => props.themeColor};
    background-color: ${props => props.themeColor};
    color: ${props => props.textColor};
  }
`;

const NextProjectKicker = styled.div`
  display: inline-flex;
  align-items: center;
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  opacity: 0.5;
  margin-bottom: ${spacing.lg};
  transition: 160ms opacity linear;

  ${NextProjectLink}:hover &,
  ${NextProjectLink}:focus & {
    opacity: 1;
  }
`;

const NextProjectName = styled.div`
  font-size: ${textSizes.lg};

  ${ProjectBlurb} {
    color: inherit;
    opacity: 0.75;
  }

  @media ${screens.md} {
    font-size: ${textSizes.xl};
    line-height: ${leading.tight};
  }
`;

export default function GoToNextProject({
  slug,
  name,
  blurb,
  themeColor,
  textColor
}) {
  return (
    <NextProjectLink
      to={`/work/${slug}`}
      themeColor={themeColor}
      textColor={textColor}
    >
      <Container maxWidth="narrower">
        <NextProjectKicker>
          <span>Go to next project</span>
          <ArrowRight size={16} style={{ marginLeft: spacing.sm.asPx }} />
        </NextProjectKicker>
        <NextProjectName>
          <ProjectName>{name}</ProjectName>
          <ProjectBlurb>{blurb}</ProjectBlurb>
        </NextProjectName>
      </Container>
    </NextProjectLink>
  );
}
