import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Container from "../container";
import Section from "../section";
import {
  screens,
  spacing,
  textSizes,
  colors,
  fontFamilies,
  leading,
  tracking
} from "../tokens";
import { Link, useStaticQuery, graphql } from "gatsby";

const GalleryContainer = styled(Container)`
  @media ${screens.sm} {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${screens.lg} {
    align-items: baseline;
  }
`;

const ProjectName = styled.h3`
  display: inline;
  font-weight: 700;
  color: ${colors.purple};
`;

const ProjectBlurb = styled.p`
  display: inline;
  font-style: italic;

  &::before {
    content: "\\2002";
  }
`;

const ProjectDetails = styled.p`
  font-size: ${textSizes.md};
  font-family: ${fontFamilies.mono};
  margin-top: ${spacing.xs};
  text-transform: uppercase;
  letter-spacing: ${tracking.wide};
`;

const ProjectLink = styled(Link)`
  text-decoration: none;
  color: ${colors["grey-darker"]};

  &:hover,
  &:focus {
    color: ${colors.purple};
  }
`;

const ProjectContainer = styled.article`
  font-size: ${textSizes.lg};
  margin-bottom: ${spacing["2xl"]};

  &:last-child {
    margin-bottom: 0;
  }

  @media ${screens.sm} {
    width: 50%;

    &:nth-child(2n) {
      padding-left: ${spacing.lg.times(0.5).asPx};
    }

    &:nth-child(2n + 1) {
      padding-right: ${spacing.lg.times(0.5).asPx};
    }

    &:nth-last-child(2) {
      margin-bottom: 0;
    }
  }

  @media ${screens.md} {
    &:nth-child(2n) {
      padding-left: ${spacing.xl.times(0.5).asPx};
    }

    &:nth-child(2n + 1) {
      padding-right: ${spacing.xl.times(0.5).asPx};
    }
  }

  @media ${screens.lg} {
    margin-bottom: ${spacing["3xl"]};

    &:nth-child(2n) {
      padding-left: ${spacing["2xl"].times(0.5).asPx};
    }

    &:nth-child(2n + 1) {
      padding-right: ${spacing["2xl"].times(0.5).asPx};
    }

    &:nth-child(4n + 1),
    &:nth-child(4n + 4) {
      width: 60%;
      font-size: ${textSizes.xl};
      line-height: ${leading.tight};
    }

    &:nth-child(4n + 2),
    &:nth-child(4n + 3) {
      width: 40%;
    }
  }
`;

function Project({ name, blurb, slug, category, date, thumbnailImg }) {
  return (
    <ProjectContainer>
      <ProjectLink to={`/work/${slug}`}>
        <Img fluid={thumbnailImg.fluid} alt="" />
        <div style={{ marginTop: spacing.md }}>
          <ProjectName>{name}</ProjectName>
          <ProjectBlurb>{blurb}</ProjectBlurb>
        </div>
        <ProjectDetails>
          {category}&emsp;//&emsp;<time>{date}</time>
        </ProjectDetails>
      </ProjectLink>
    </ProjectContainer>
  );
}

export default function ProjectGallery() {
  const { projects, thumbs } = useStaticQuery(graphql`
    query ProjectGalleryQuery {
      projects: allProjectsYaml {
        edges {
          node {
            name
            blurb
            thumbnail
            slug
            category
            date
          }
        }
      }

      thumbs: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativePath: { glob: "*-thumb.+(jpg|png)" }
        }
      ) {
        edges {
          node {
            base
            src: publicURL
            img: childImageSharp {
              fluid(maxWidth: 640, maxHeight: 360) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  `);

  projects.edges.forEach(({ node: project }) => {
    const thumbnail = thumbs.edges.find(
      ({ node: thumb }) => thumb.base === project.thumbnail
    );
    if (thumbnail) project.thumbnailImg = thumbnail.node.img;
  });

  return (
    <Section style={{ backgroundColor: colors["grey-lightest"] }}>
      <GalleryContainer>
        {projects.edges.map(({ node: project }) => (
          <Project key={project.slug} {...project} />
        ))}
      </GalleryContainer>
    </Section>
  );
}
