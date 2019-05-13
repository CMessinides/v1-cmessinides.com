import React from "react";
import Section from "../section";
import Container from "../container";
import styled from "styled-components";
import {
  spacing,
  colors,
  textSizes,
  fontFamilies,
  tracking,
  shadows
} from "../tokens";

const quoteIcon = ({ className }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M40 80c22.091 0 40-17.909 40-40S62.091 0 40 0 0 17.909 0 40s17.909 40 40 40zm8.743-50.434c1.884-2.398 4.136-4.155 6.756-5.271L54.332 22c-4.34 2.067-7.595 4.796-9.765 8.186-2.13 3.349-3.194 7.153-3.194 11.41 0 3.35.717 6.14 2.15 8.373C45.243 52.656 47.72 54 50.954 54c2.252 0 4.156-.765 5.712-2.295C58.222 50.135 59 48.191 59 45.876c0-2.48-.778-4.444-2.334-5.892-1.515-1.488-3.419-2.232-5.712-2.232-1.678 0-3.234.558-4.667 1.674-.246-.744-.369-1.633-.369-2.666 0-2.44.942-4.837 2.825-7.194zm-21.373 0c1.883-2.398 4.136-4.155 6.756-5.271L32.959 22c-4.34 2.067-7.595 4.796-9.765 8.186C21.064 33.535 20 37.339 20 41.596c0 3.35.716 6.14 2.15 8.373C23.87 52.656 26.347 54 29.58 54a7.902 7.902 0 0 0 3.992-1.054 8.009 8.009 0 0 0 2.948-2.915c.737-1.24 1.106-2.625 1.106-4.155 0-2.48-.778-4.444-2.334-5.892-1.556-1.488-3.46-2.232-5.712-2.232-1.72 0-3.276.558-4.668 1.674-.245-.744-.368-1.633-.368-2.666 0-2.44.942-4.837 2.825-7.194z"
      />
    </svg>
  );
};

const QuoteIcon = styled(quoteIcon)`
  display: block;
  width: 40px;
  height: auto;
  margin-bottom: ${spacing.lg};
  filter: ${shadows.lg.asDrop};
  fill: ${colors.white};
`;

const Quote = styled.blockquote`
  font-style: italic;

  cite {
    display: block;
    margin-top: ${spacing.lg};
    font-family: ${fontFamilies.mono};
    text-transform: uppercase;
    letter-spacing: ${tracking.wide};
    font-style: normal;
    font-size: ${textSizes.md};
    opacity: 0.75;
  }

  @media (min-width: 30em) {
    font-size: ${textSizes.lg};
  }
`;

export default function Endorsement() {
  return (
    <Section style={{ backgroundColor: colors.purple, color: colors.white }}>
      <Container maxWidth="narrower">
        <QuoteIcon />
        <Quote>
          The Kenyon Review benefits greatly from the creative genius of Cameron
          Messinides &rsquo;19. The posters Cameron designs for the Kenyon
          Review Reading Series are known around campus as some of the most
          aesthetically sharp posters around. Always reliable, always smiling,
          and ever ready to take on the toughest design challenges and
          deadlines, Cameron Messinides is top notch.
          <cite>
            &mdash; Elizabeth Dark, Associate Director of Programs at the Kenyon
            Review
          </cite>
        </Quote>
      </Container>
    </Section>
  );
}
