import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { TweenMax, Power4 } from "gsap";
import {
  colors,
  spacing,
  textSizes,
  leading,
  shadows,
  screens,
  fontFamilies,
  tracking
} from "./tokens";
import Container from "./container";
import Layout from "./layout";
import SEO from "./seo";
import { ProjectName, ProjectBlurb } from "./project";
import { ArrowLeft } from "react-feather";

const HeaderImage = styled(Img)`
  position: relative;
  top: ${spacing.lg};
  filter: ${shadows.md.asDrop};

  @media (min-width: 36em) {
    top: ${spacing.xl};
  }
`;

const HeaderHeading = styled(Container).attrs(() => {
  return {
    maxWidth: "narrower"
  };
})`
  font-size: ${textSizes.lg};

  @media (min-width: 36em) {
    font-size: ${textSizes.xl};
    line-height: ${leading.tight};
  }
`;

const Header = styled.header`
  padding-top: ${spacing["2xl"]};
  background-color: ${props => (props.theme ? props.theme : colors.black)};
  color: ${props => (props.text ? props.text : colors.white)};

  @media ${screens.md} {
    padding-top: ${spacing["4xl"]};
  }
`;

const NavLink = styled(AniLink)`
  text-decoration: none;
  color: inherit;
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
`;

const NavBar = ({ theme, text }) => {
  return (
    <nav
      style={{ backgroundColor: theme, color: text, paddingTop: spacing.md }}
    >
      <Container maxWidth="narrower">
        <NavLink to="/" cover direction="left" bg={theme} duration={0.8}>
          <ArrowLeft width={16} style={{ marginRight: spacing.sm.asPx }} /> See
          All Projects
        </NavLink>
      </Container>
    </nav>
  );
};

const Body = styled.div`
  padding: ${spacing.lg.times(2)} 0 ${spacing.lg};

  @media (min-width: 36em) {
    padding-top: ${spacing.lg.add(spacing.xl)};
  }
`;

export default function CaseStudy({ project, thumbnail, children }) {
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const bodyRef = useRef(null);

  useLayoutEffect(() => {
    [headingRef, imageRef, bodyRef].forEach((ref, i) => {
      TweenMax.from(ref.current, 1, {
        y: 10,
        opacity: 0,
        delay: 0.5 + i * 0.25,
        ease: Power4.easeOut
      });
    });
  }, []);

  return (
    <Layout>
      <SEO title={project.name} description={project.blurb} />
      <NavBar theme={project.themeColor} text={project.textColor} />
      <article>
        <Header theme={project.themeColor} text={project.textColor}>
          <HeaderHeading ref={headingRef}>
            <ProjectName as="h1">{project.name}</ProjectName>
            <ProjectBlurb color="inherit" style={{ opacity: "0.75" }}>
              {project.blurb}
            </ProjectBlurb>
          </HeaderHeading>
          <Container maxWidth="narrow" ref={imageRef}>
            <HeaderImage alt="" fluid={thumbnail.childImageSharp.fluid} />
          </Container>
        </Header>
        <Body ref={bodyRef}>{children}</Body>
      </article>
    </Layout>
  );
}

export const query = graphql`
  fragment CaseStudyProject on ProjectsYaml {
    name
    blurb
    date
    category
    themeColor
    textColor
  }

  fragment CaseStudyThumbnail on File {
    childImageSharp {
      fluid(maxWidth: 768) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`;
