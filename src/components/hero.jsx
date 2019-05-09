import React from "react";
import Section from "./section";
import Container from "./container";
import styled from "styled-components";
import {
  tracking,
  fontFamilies,
  leading,
  textSizes,
  spacing,
  screens,
  measure,
  colors
} from "./tokens";

const HeroSection = styled(Section)`
  padding-top: ${spacing["3xl"]};
  color: ${colors["grey-darker"]};

  @media ${screens.md} {
    padding-top: ${spacing["4xl"]};
  }
`;

const HeroKicker = styled.p`
  font-family: ${fontFamilies.mono};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;

const HeroHeading = styled.h1`
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  line-height: ${leading.none};
  font-weight: 700;
  font-size: ${textSizes["2xl"]};
  color: ${colors.black};
  margin: ${spacing.md} 0;

  @media (min-width: 24em) {
    font-size: ${textSizes["3xl"]};
  }
`;

const HeroBlurb = styled.p`
  max-width: ${measure.normal};

  strong {
    color: ${colors.black};
    font-weight: 700;
  }
`;

const Hero = () => {
  return (
    <HeroSection as="header">
      <Container>
        <HeroKicker>Graphic Designer</HeroKicker>
        <HeroHeading>Cameron Messinides</HeroHeading>
        <HeroBlurb>
          Four years of graphic design experience. A proven track record of
          hitting deadlines. Self-sufficient and quick to learn.{" "}
          <strong className="text-white">
            Ready to help the Office of Communications tell Kenyon’s story.
          </strong>
        </HeroBlurb>
      </Container>
    </HeroSection>
  );
};

export default Hero;
