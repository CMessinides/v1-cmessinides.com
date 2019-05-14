import React from "react";
import styled from "styled-components";
import Section from "../section";
import Container from "../container";
import { fontFamilies, spacing, colors, measure, screens } from "../tokens";
import { Move, Radio, Sun, Layers } from "react-feather";

const AboutItem = styled.li`
  margin-bottom: ${spacing.xl};

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    display: block;
    margin-bottom: ${spacing.xs};
    stroke: ${colors.purple};
  }

  strong {
    font-family: ${fontFamilies.heading};
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  p {
    max-width: ${measure.normal};
  }

  @media (min-width: 42em) {
    width: 50%;

    &:nth-last-child(2) {
      margin-bottom: 0;
    }

    &:nth-child(2n + 1) {
      padding-right: ${spacing.xl.times(0.5).asPx};
    }

    &:nth-child(2n) {
      padding-left: ${spacing.xl.times(0.5).asPx};
    }
  }

  @media ${screens.md} {
    margin-bottom: ${spacing["2xl"]};

    &:nth-child(2n + 1) {
      padding-right: ${spacing["2xl"].times(0.5).asPx};
    }

    &:nth-child(2n) {
      padding-left: ${spacing["2xl"].times(0.5).asPx};
    }

    svg {
      margin-bottom: ${spacing.sm};
    }
  }
`;

const AboutItems = styled.ul`
  @media (min-width: 42em) {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${screens.lg} {
    font-size: ${18 / 16}rem;
  }
`;

export default function About() {
  return (
    <Section>
      <Container>
        <Section.Heading>How I Can Help</Section.Heading>
        <AboutItems>
          <AboutItem>
            <Layers />
            <p>
              <strong>Design skills</strong> I have four years of design
              experience with a wide range of partners at Kenyon. Through
              exacting attention to color, typography, and detail, I help
              clients tell their stories clearly and memorably.
            </p>
          </AboutItem>
          <AboutItem>
            <Radio />
            <p>
              <strong>Communication experience</strong> I&rsquo;m as comfortable
              with words as I am with visuals. As co-editor-in-chief of the{" "}
              <em>Collegian</em> this year, I edited with the AP styleguide and
              upheld journalistic standards while meeting weekly print
              deadlines.
            </p>
          </AboutItem>
          <AboutItem>
            <Move />
            <p>
              <strong>Adaptability</strong> As a self-taught designer and
              developer, I&rsquo;m ready and eager to learn the skills necessary
              to get the job done. I take constructive criticism in stride and
              can solve problems quickly under changing circumstances.
            </p>
          </AboutItem>
          <AboutItem>
            <Sun />
            <p>
              <strong>Kindness</strong> I take my role as collaborator
              seriously, and I pride myself on being easy to work with. I can be
              not only a great designer at the Office of Communications, but a
              generous teacher and thoughtful colleague as well.
            </p>
          </AboutItem>
        </AboutItems>
      </Container>
    </Section>
  );
}
