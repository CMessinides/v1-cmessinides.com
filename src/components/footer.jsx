import React from "react";
import styled from "styled-components";
import Container from "./container";
import {
  colors,
  spacing,
  screens,
  fontFamilies,
  tracking,
  textSizes
} from "./tokens";

const FooterContainer = styled(Container)`
  @media ${screens.sm} {
    display: flex;
  }
`;

const FooterMain = styled.footer`
  background-color: ${colors["grey-lighter"]};
  border-top: 3px ${colors["grey-light"]} solid;
  color: ${colors["grey-darker"]};
  font-family: ${fontFamilies.mono};
  font-size: ${textSizes.sm};
  padding: ${spacing.md} 0;
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;

export default function Footer() {
  return (
    <FooterMain>
      <FooterContainer>
        Copyright © {new Date().getFullYear()} Cameron Messinides
      </FooterContainer>
    </FooterMain>
  );
}
