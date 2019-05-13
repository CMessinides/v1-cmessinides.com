import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import Container from "../container";
import Section from "../section";
import { screens, spacing, textSizes, colors, leading } from "../tokens";
import { useStaticQuery, graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { ProjectName, ProjectBlurb, ProjectDetails } from "../project";

const GalleryContainer = styled(Container)`
  @media ${screens.sm} {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${screens.lg} {
    align-items: baseline;
  }
`;

const GalleryProjectDetails = styled(ProjectDetails)`
  color: inherit;
  font-size: ${textSizes.md};
  margin-top: ${spacing.xs};
`;

const GalleryProjectLink = styled(AniLink)`
  text-decoration: none;
  color: ${colors["grey-darker"]};

  &:hover,
  &:focus {
    color: ${colors.purple};
  }
`;

const GalleryProjectContainer = styled.article`
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

function GalleryProject({
  name,
  blurb,
  slug,
  category,
  date,
  themeColor,
  thumbnailImg
}) {
  return (
    <GalleryProjectContainer>
      <GalleryProjectLink
        to={`/work/${slug}`}
        paintDrip
        hex={themeColor}
        duration={0.8}
        state={{ fromHome: true }}
      >
        <Img fluid={thumbnailImg.fluid} alt="" />
        <div style={{ marginTop: spacing.md }}>
          <ProjectName color={colors.purple}>{name}</ProjectName>
          <ProjectBlurb color="inherit">{blurb}</ProjectBlurb>
        </div>
        <GalleryProjectDetails>
          {category}&emsp;//&emsp;<time>{date}</time>
        </GalleryProjectDetails>
      </GalleryProjectLink>
    </GalleryProjectContainer>
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
            themeColor
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
                ...GatsbyImageSharpFluid
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
      <Container>
        <Section.Heading>Projects</Section.Heading>
      </Container>
      <GalleryContainer>
        {projects.edges.map(({ node: project }) => (
          <GalleryProject key={project.slug} {...project} />
        ))}
      </GalleryContainer>
    </Section>
  );
}
