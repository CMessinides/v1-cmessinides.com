import React from "react";
import { Link } from "gatsby";
import { ArrowLeft } from "react-feather";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Container from "../components/container";
import {
  fontFamilies,
  textSizes,
  colors,
  tracking,
  spacing,
  screens
} from "../components/tokens";
import { useSectionSpacing } from "../components/section";

const NotFoundWrapper = styled(Container)`
  text-align: center;
`;

const NotFoundHeading = styled.h1`
  ${useSectionSpacing({ direction: "bottom", property: "margin" })};

  > span {
    display: block;

    &:first-child {
      font-size: ${textSizes["3xl"]};
      font-family: ${fontFamilies.heading};
      font-weight: 700;

      @media ${screens.sm} {
        font-size: ${textSizes["4xl"]};
      }
    }

    &:last-child {
      color: ${colors["grey-darker"]};
      font-size: ${textSizes.lg};
      font-style: italic;

      @media ${screens.sm} {
        font-size: ${textSizes.xl};
      }
    }
  }
`;

const NotFoundLink = styled(Link)`
  text-decoration: none;
  color: ${colors.purple};
  font-family: ${fontFamilies.mono};
  display: inline-flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
  opacity: 0.5;

  &:hover,
  &:focus {
    opacity: 1;
  }

  svg {
    margin-right: ${spacing.sm};
  }
`;

const NotFoundPage = () => (
  <Layout centerContent>
    <SEO title="404: Not found" />
    <NotFoundWrapper>
      <NotFoundHeading>
        <span>404</span>
        <span>Page not found</span>
      </NotFoundHeading>
      <NotFoundLink to="/" className="_404__home-link">
        <ArrowLeft size={16} aria-hidden="true" />
        <span>Go to the homepage</span>
      </NotFoundLink>
    </NotFoundWrapper>
  </Layout>
);

export default NotFoundPage;
