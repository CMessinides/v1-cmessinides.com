import React from "react";
import { graphql } from "gatsby";
import CaseStudy from "../../components/case-study";
import Text, { Link, GridWithFallback } from "../../components/article/text";
import Container from "../../components/container";
import Img from "gatsby-image";
import styled from "styled-components";
import { spacing } from "../../components/tokens";

const Gallery = styled(GridWithFallback).attrs(() => {
  return {
    withGrid: "narrow"
  };
})`
  grid-gap: ${spacing.lg.asPx};

  @media (min-width: 36em) {
    grid-template-columns: 3.09fr 1fr;

    & > :first-child {
      grid-column: 1;
    }

    & > :last-child {
      grid-column: 2;
    }
  }
`;

export default function FortyNorthMap({ data, pageContext, location }) {
  return (
    <CaseStudy
      location={location}
      thumbnail={data.thumbnail}
      bodyPadding="both"
      {...pageContext}
    >
      <Text>
        <p>
          In November 2018, I had the opportunity to travel with the rest of the
          American Studies senior class to the{" "}
          <Link to="https://eji.org">Equal Justice Initiative</Link>’s (EJI)
          Legacy Museum and National Memorial for Peace and Justice. The museum
          and memorial are dedicated to chronicling the history of racist
          oppression in the United States and commemorating the countless Black
          Americans who lost their lives to racist violence. This book,{" "}
          <em>40.3756° N, 82.3971° W → 32.3792° N, 86.3077° W</em> is a product
          of that trip. Using historical lynching data from EJI, this book
          charts our route from Gambier, Ohio, to Montgomery and marks the
          number of recorded racial lynchings in 320 counties along the way.
        </p>
      </Text>
      <Container maxWidth="narrow">
        <Img
          fluid={data.img1.childImageSharp.fluid}
          alt="The book, upright and unfolded to show county labels and illustrations of rivers and roads within"
        />
      </Container>
      <Text>
        <p>
          Strong typography is at the heart of the book. Bold black and crimson
          text give the design heft, counterbalanced by lighter washes of blue
          and green watercolor. Most of the text is set in{" "}
          <Link to="https://software.sil.org/gentium/">Gentium Book Basic</Link>
          , whose old-style characteristics lend themselves well to the acetone
          transfer printing process. For a sharp contrast, the title is set
          large in the more modern{" "}
          <Link to="https://fabiandesmet.com/portfolio/butler-font/">
            Butler
          </Link>
          .
        </p>
      </Text>
      <Img fluid={data.img2.childImageSharp.fluid} />
      <Text>
        In May 2019, Kenyon College purchased{" "}
        <em>40.3756° N, 82.3971° W → 32.3792° N, 86.3077° W</em> for inclusion
        in its Special Collections.
      </Text>
      <Gallery>
        <Img fluid={data.img3.childImageSharp.fluid} />
        <Img fluid={data.img4.childImageSharp.fluid} />
      </Gallery>
      <Text>
        <em>Photos courtesy of Ellen Sheffield.</em>
      </Text>
    </CaseStudy>
  );
}

export const query = graphql`
  query($thumbnailPath: String!) {
    thumbnail: file(absolutePath: { eq: $thumbnailPath }) {
      ...CaseStudyThumbnail
    }

    img1: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "forty-north-map/001.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    img2: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "forty-north-map/005.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    img3: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "forty-north-map/003.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    img4: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "forty-north-map/002.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 768) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
