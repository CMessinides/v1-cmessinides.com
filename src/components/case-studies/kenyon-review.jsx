import React from "react";
import { graphql } from "gatsby";
import CaseStudy from "../case-study";
import Text, { Link } from "../article/text";
import Img from "gatsby-image";
import styled from "styled-components";
import { FourWideGrid, GridItem, TwoWideGrid } from "../article/grid";

const IllustrationGallery = styled.div`
  @media (min-width: 40em) {
    display: flex;
    align-items: flex-start;

    > * {
      width: 50%;
    }
  }
`;

export default function KenyonReview({ data, pageContext, location }) {
  return (
    <CaseStudy location={location} thumbnail={data.thumbnail} {...pageContext}>
      <Text>
        <p>
          Through its Reading Series, annual Literary Festival, and other
          events, the <em>Kenyon Review</em> brings renowned authors to campus
          to share their writing, process, and advice on campus. As the{" "}
          <em>Review</em>&rsquo;s publicity intern for the past three years,
          I&rsquo;ve created one-of-a-kind posters for a wide range of visiting
          writers, including Pulitzer Prize-winning poet Rita Dove and{" "}
          <em>New York Times</em>-bestselling poet and essayist Hanif
          Abdurraqib.
        </p>
        <p>
          With each poster, the primary challenge is balancing the
          writer&rsquo;s individual voice and the <em>Review</em>
          &rsquo;s brand. The poster should tell potential reading attendees
          what to expect from a reader:{" "}
          <em>Are they energetic? Experimental? Lyrical? Funny?</em> At the same
          time, the poster should put the <em>Review</em>&rsquo;s stamp on the
          event and signal that the literary journal&rsquo;s high standards for
          literary work mean this is a reading not to be missed.
        </p>
        <p>
          To that end, over the past year I have tried to develop rough design
          guidelines for the Reading Series posters. The only required element
          for all posters is the &ldquo;Kenyon Review Reading Series&rdquo;
          badge in the lower righthand corner, but beyond that, I&rsquo;ve
          settled on a handful of typefaces and stylistic choices to make the
          posters more coherent and consistent with each other.
        </p>
        <p>
          For up-and-coming, experimental, or more explicitly political writers,
          a bolder style works well. Deep drop shadows, overlapping text and
          imagery, and more adventurous type treatments&mdash;with heavy use of{" "}
          <Link to="https://fonts.google.com/specimen/Oswald">Oswald</Link> in
          all caps and{" "}
          <Link to="https://fabiandesmet.com/portfolio/butler-font/">
            Butler
          </Link>
          &mdash;make for posters as dynamic as the writers they represent.
        </p>
      </Text>
      <FourWideGrid>
        {data.bolderImgs.edges.map(({ node }) => {
          return (
            <GridItem key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </GridItem>
          );
        })}
      </FourWideGrid>
      <Text>
        <p>
          When high-quality photos are available, cutting out figures and
          overlaying them on text brings an engaging dimensionality to the
          posters.
        </p>
      </Text>
      <IllustrationGallery>
        {data.bolderZooms.edges.map(({ node }) => {
          return <Img key={node.name} fluid={node.childImageSharp.fluid} />;
        })}
      </IllustrationGallery>
      <Text>
        <p>
          Occasionally, custom illustration highlights a theme for the event.
          For Javier Zamora&rsquo;s reading, which focused on immigration and
          Zamora&rsquo;s status as an undocumented Salvadoran-American, I
          painted barbed wire, an image from his poem{" "}
          <Link to="https://www.poetryfoundation.org/poetrymagazine/poems/58656/saguaros">
            &ldquo;Saguaros.&rdquo;
          </Link>{" "}
          For the{" "}
          <Link to="https://www.kenyonreview.org/kr-online-issue/resistance-change-survival/">
            Resistance, Change, Survival
          </Link>{" "}
          panel, I drew inspiration from previous visuals for the
          panel&mdash;which featured{" "}
          <Link to="https://www.kenyonreview.org/wp-content/uploads/resist-sidebar-tile.jpg">
            a photo of a candlelight vigil
          </Link>
          &mdash;and painted a hand holding a candle aloft.
        </p>
      </Text>
      <Img fluid={data.illustrationImg.childImageSharp.fluid} />
      <Text>
        <p>
          For established authors or events more closely associated with{" "}
          <em>Kenyon Review</em> itself, I turn to a more traditional style.
          Along with Butler,{" "}
          <Link to="https://www.behance.net/gallery/28579883/Cormorant-an-open-source-display-font-family">
            Cormorant Garamond
          </Link>{" "}
          lends an elegant, historic quality to the posters.
        </p>
      </Text>
      <TwoWideGrid>
        {data.traditionalImgs.edges.map(({ node }) => {
          return (
            <GridItem key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </GridItem>
          );
        })}
      </TwoWideGrid>
      <Text>
        <p>
          For the Literary Festival poster, the layout and typography must be
          particularly precise in order to clearly convey the full schedule of
          events for the week.
        </p>
      </Text>
      <IllustrationGallery>
        {data.lfZooms.edges.map(({ node }) => {
          return <Img key={node.name} fluid={node.childImageSharp.fluid} />;
        })}
      </IllustrationGallery>
      <Text>
        And lastly, to go along with every print poster, I desgn an accompanying
        digital graphic for use in email newsletters and on social media.
      </Text>
      <Img fluid={data.emailHeaders.childImageSharp.fluid} />
    </CaseStudy>
  );
}

export const query = graphql`
  query($thumbnailPath: String!) {
    thumbnail: file(absolutePath: { eq: $thumbnailPath }) {
      ...CaseStudyThumbnail
    }

    bolderImgs: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "kr-posters" }
        name: { in: ["mccallum", "abdurraqib-et-al", "baker", "williams"] }
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

    bolderZooms: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "kr-posters" }
        name: { in: ["abdurraqib-zoom", "baker-zoom"] }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    illustrationImg: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "kr-posters/illustrations.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    traditionalImgs: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "kr-posters" }
        name: { in: ["fellows-2018", "lit-fest-2018"] }
      }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    lfZooms: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "kr-posters" }
        name: { glob: "lf-detail+(1|2)" }
      }
      sort: { fields: name }
    ) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }

    emailHeaders: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "kr-posters/email-headers.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 2560) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
