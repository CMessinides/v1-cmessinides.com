import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";
import Section from "../../components/section";
import Text, { Figure, Link } from "../../components/article/text";
import Img from "gatsby-image";
import Container from "../../components/container";
import styled from "styled-components";
import { spacing, screens } from "../../components/tokens";

const MobileGallery = styled(Container).attrs({
  maxWidth: "narrow"
})`
  display: flex;
  flex-wrap: wrap;

  @media ${screens.md} {
    flex-wrap: nowrap;
  }
`;

const MobileGalleryItem = styled(Figure)`
  padding-bottom: ${spacing.lg};
  width: 50%;

  &:last-child,
  &:nth-last-child(2) {
    padding-bottom: 0;
  }

  &:nth-child(2n) {
    padding-left: ${spacing.lg.times(0.5).asPx};
  }

  &:nth-child(2n + 1) {
    padding-right: ${spacing.lg.times(0.5).asPx};
  }

  @media ${screens.md} {
    width: 25%;
    padding: 0 !important;
    margin-right: ${spacing.xl.asPx};

    &:last-child {
      margin-right: 0;
    }
  }
`;

const DetailsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0;
`;

const DetailsGridItem = styled(Figure)`
  width: 50%;

  @media ${screens.sm} {
    width: 25%;
  }
`;

export default function CollegianMagazineWeb({ location }) {
  const data = useStaticQuery(graphql`
    query CollegianMagazineWebQuery {
      project: projectsYaml(slug: { eq: "collegian-magazine-web" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cm-web-thumb.png" }
      ) {
        ...CaseStudyThumbnail
      }

      img1: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cm-web/001.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      mobileImgs: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "cm-web/00+(2|3|4|5).png" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }

      img2: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cm-web/006.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 2560) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      detailImgs: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "cm-web/0+(07|08|09|10).png" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            name
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);

  return (
    <CaseStudy location={location} {...data}>
      <Text>
        <p>
          Since its first issue in 2014, the <em>Collegian Magazine</em> has
          published investigative journalism, longform articles, interviews,
          photo essays, and about Kenyon, Knox County, and the surrounding area.
          The magazine won a Pacemaker Award in 2015 for its print publication,
          but until 2017, the <em>Magazine</em> had no platform for sharing its
          stories online. Then-editor-in-chief Julia Waldow approached me that
          year to design and build a custom website for the <em>Magazine</em> to
          reach its readers online.
        </p>
        <p>
          I knew my toughest challenge would be translating the{" "}
          <em>Magazine</em>&rsquo;s stories from print to digital. The{" "}
          <em>Magazine</em> produces beautiful print design with creative
          layouts, especially for its photo essays, that conveyed narratives
          through visuals alone. I didn&rsquo;t want to lose those stories in
          translation, so I designed a content management system that would
          allow editors to upload a wide range of stories without compromising
          on flexible layouts.
        </p>
      </Text>
      <Img fluid={data.img1.childImageSharp.fluid} />
      <Text>
        <p>
          At the same time, <em>Magazine</em> readers needed to have a seamless
          experience on mobile devices as well, so I took pains to ensure every
          design decision, from navigation menus to gallery layouts, scaled down
          without a hitch.
        </p>
      </Text>
      <MobileGallery>
        {data.mobileImgs.edges.map(({ node }) => {
          return (
            <MobileGalleryItem key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </MobileGalleryItem>
          );
        })}
      </MobileGallery>
      <Text>
        <p>
          The website&rsquo;s minimal design rests on a foundation of solid
          typography and the occasional touch of the <em>Magazine</em>&rsquo;s
          brand yellow and blue.{" "}
          <Link to="https://www.dstype.com/fonts/acta-display">
            Acta Display
          </Link>
          , a sharp serif typeface designed for newspapers and magazines,
          anchors the page around titles and headings. The softer{" "}
          <Link to="https://typofonderie.com/fonts/le-monde-journal-family/">
            Le Monde Journal
          </Link>
          , also designed for newspaper use, makes for breezy reading through
          long passages of text. A touch of the warm geometric sans{" "}
          <Link to="https://www.type-together.com/soleil-font">Soleil</Link>{" "}
          adds contrast for buttons, navigation links, and other bits of accent
          text.
        </p>
      </Text>
      <Img fluid={data.img2.childImageSharp.fluid} />
      <DetailsGrid>
        {data.detailImgs.edges.map(({ node }) => {
          return (
            <DetailsGridItem key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </DetailsGridItem>
          );
        })}
      </DetailsGrid>
      <Text>
        <em>
          See the website live at{" "}
          <Link to="https://www.thecollegianmagazine.com">
            www.thecollegianmagazine.com
          </Link>
        </em>
        .
      </Text>
    </CaseStudy>
  );
}
