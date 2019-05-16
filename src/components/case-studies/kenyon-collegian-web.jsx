import React from "react";
import CaseStudy from "../../components/case-study";
import { graphql } from "gatsby";
import Text, { Figure, Link } from "../article/text";
import Container from "../container";
import Img from "gatsby-image";
import { FourWideGrid, GridItem } from "../article/grid";

export default function KenyonCollegianWeb({ data, pageContext, location }) {
  return (
    <CaseStudy
      location={location}
      thumbnail={data.thumbnail}
      bodyPadding="both"
      {...pageContext}
    >
      <Text>
        <p>
          In 2017, the <em>Kenyon Collegian</em> needed a new website. At the
          time, the existing website looked outdated, was hard to navigate, and
          had the potential to undermine the <em>Collegian</em>&rsquo;s
          reputation as a trustworthy newspaper&mdash;the site even appeared in
          Google search results as potential malware. I worked with the{" "}
          <em>Collegian</em>&rsquo;s executive staff&mdash;Bailey Blaker, Lauren
          Eller, and Gabrielle Healy&mdash;over the summer and fall to design
          and develop a revamped website that would work better for both{" "}
          <em>Collegian</em> staffers and readers.
        </p>
      </Text>
      <Container maxWidth="narrow">
        <Figure>
          <Img fluid={data.oldSite.childImageSharp.fluid} />
          <Figure.Caption>The homepage of the previous website</Figure.Caption>
        </Figure>
      </Container>
      <Text>
        <p>
          Because the project timeline spanned the summer and fall, the{" "}
          <em>Collegian</em> staff and I worked remotely for most of the process
          (I was off-campus in the fall semester). As a result, good
          communication was crucial, and I made sure to clearly relay my
          reasoning, decisions, and progress. I began the process with a{" "}
          <Link to="https://paper.dropbox.com/doc/Site-Usability-Analysis--AdNUY_gPjSPhm6RncffF12U~AQ-yKmTaYpoVMgRe94sazrAi">
            usability audit
          </Link>{" "}
          of the previous website, outlining the problem areas in need of a
          redesign. Next, I drew up{" "}
          <Link to="https://www.figma.com/file/QNpMaWZf4fsbIicF4mocvxlp/Wireframes?node-id=0%3A1">
            wireframes
          </Link>{" "}
          of critical pages and addressed how they would solve some of those
          problems. After the <em>Collegian</em> editors approved the plan, I
          set about designing and developing the new website.
        </p>
      </Text>
      <Img fluid={data.pagesImg.childImageSharp.fluid} />
      <Text>
        <p>
          The redesign focuses on using clear typography, generous whitespace,
          and occasional accents of Kenyon purple to provide a highly organized,
          readable news format for <em>Collegian</em> readers online. The
          transitional serif{" "}
          <Link to="https://open-foundry.com/fonts/libre_baskerville_regular">
            Libre Baskerville
          </Link>{" "}
          for headlines and the grotesque sans serif{" "}
          <Link to="https://www.omnibus-type.com/fonts/chivo/">Chivo</Link> for
          labels and other secondary text give the typography an established,
          but approchable character. Clearly labeled homepage modules, section
          listings, and other pages help readers find their way around the site.
        </p>
        <p>
          A large portion of those readers use the site on their mobile devices,
          reading stories shared on Facebook and Twitter, so it was important
          that every screen was functional and clear at small sizes as well.
        </p>
      </Text>
      <FourWideGrid>
        {data.mobileImgs.edges.map(({ node }) => {
          return (
            <GridItem key={node.name}>
              <Img fluid={node.childImageSharp.fluid} />
            </GridItem>
          );
        })}
      </FourWideGrid>
      <Text>
        <p>
          <em>
            See the website live at{" "}
            <Link to="https://kenyoncollegian.com">kenyoncollegian.com</Link>.
          </em>
        </p>
      </Text>
    </CaseStudy>
  );
}

export const query = graphql`
  query($thumbnailPath: String!) {
    thumbnail: file(absolutePath: { eq: $thumbnailPath }) {
      ...CaseStudyThumbnail
    }

    oldSite: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "kenyon-collegian-web/old-site.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }

    pagesImg: file(
      sourceInstanceName: { eq: "images" }
      relativePath: { eq: "kenyon-collegian-web/pages.png" }
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
        relativePath: { glob: "kenyon-collegian-web/mobile-0+(1|2|3|4).png" }
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
`;
