import React from "react";
import Section from "../section";
import styled from "styled-components";
import ProjectIllustration from "../project-illustration";
import {
  ProjectHeading,
  ProjectButton,
  useProjectTheme,
  ProjectBlurb
} from "./project";
import { maxWidths, screens, colors, textSizes, spacing } from "../tokens";
import { useContainerPadding } from "../container";
import { useStaticQuery, graphql } from "gatsby";

const OtherProjectsList = styled.div`
  margin: 0 auto;
  max-width: ${maxWidths.normal};

  @media (min-width: 36em) {
    display: flex;
    flex-wrap: wrap;
  }

  @media ${screens.lg} {
    flex-wrap: nowrap;
  }
`;

const OtherProject = styled(Section)`
  ${useProjectTheme("default")};
  ${useContainerPadding};

  & + & {
    border-top: 1px ${colors["grey-light"]} solid;
  }

  @media (min-width: 36em) {
    display: flex;
    flex-direction: column;

    &:first-child {
      width: 100%;
      flex-direction: row;
    }

    &:not(:first-child) {
      width: 50%;
    }

    &:nth-child(n + 3) {
      border-left: 1px ${colors["grey-light"]} solid;
    }
  }

  @media ${screens.lg} {
    &:first-child,
    &:not(:first-child) {
      width: 33.33%;
      flex-direction: column;
    }

    & + & {
      border-top: none;
      border-left: 1px ${colors["grey-light"]} solid;
    }
  }
`;

OtherProject.Summary = styled.div`
  padding-top: ${spacing.md};
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 36em) and (max-width: 61.99em) {
    ${OtherProject}:first-child & {
      padding-top: 0;
      margin-left: ${spacing.lg.times(2).add(1).asPx};
      flex-grow: 0;
      width: 50%;
    }
  }

  @media ${screens.md} and (max-width: 61.99em) {
    ${OtherProject}:first-child & {
      margin-left: ${spacing["2xl"].times(2).add(1).asPx};
    }
  }
`;

OtherProject.Heading = styled(ProjectHeading)`
  font-size: ${textSizes.lg};
  margin-top: 0;
`;

OtherProject.Blurb = styled(ProjectBlurb)`
  margin-bottom: auto;
`;

const IllustrationWrapper = styled.div`
  @media (min-width: 36em) and (max-width: 61.99em) {
    width: 50%;
    align-self: center;
  }
`;

export default function OtherProjects() {
  const data = useStaticQuery(graphql`
    fragment OtherProjectThumb on File {
      image: childImageSharp {
        resize(width: 768) {
          src
        }
      }
    }

    query OtherProjectsQuery {
      logo: file(relativePath: { eq: "collegian-logo/logo-full-thumb.png" }) {
        ...OtherProjectThumb
      }

      magazine: file(
        relativePath: { eq: "collegian-magazine-print/magazine-thumb.jpg" }
      ) {
        ...OtherProjectThumb
      }

      mlk: file(relativePath: { eq: "mlk-five-colleges/mlk-full-thumb.png" }) {
        ...OtherProjectThumb
      }
    }
  `);

  return (
    <OtherProjectsList>
      <OtherProject as="article">
        <IllustrationWrapper>
          <ProjectIllustration>
            <ProjectIllustration.Transformation height="100%" top="0" left="0">
              <ProjectIllustration.Image
                src={data.logo.image.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
          </ProjectIllustration>
        </IllustrationWrapper>
        <OtherProject.Summary>
          <OtherProject.Heading>The Kenyon Collegian Logo</OtherProject.Heading>
          <OtherProject.Blurb>
            Refreshing the Kenyon newspaper&rsquo;s brand on the occassion of
            its 160th anniversary.
          </OtherProject.Blurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </OtherProject.Summary>
      </OtherProject>
      <OtherProject as="article">
        <ProjectIllustration>
          <ProjectIllustration.Transformation height="100%" top="0" left="0">
            <ProjectIllustration.Image
              src={data.magazine.image.resize.src}
              shadow="lg"
            />
          </ProjectIllustration.Transformation>
        </ProjectIllustration>
        <OtherProject.Summary>
          <OtherProject.Heading>
            The Collegian Magazine (Spring 2017)
          </OtherProject.Heading>
          <OtherProject.Blurb>
            Telling stories of politics, creativity, and life on the Hill.
          </OtherProject.Blurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </OtherProject.Summary>
      </OtherProject>
      <OtherProject as="article">
        <ProjectIllustration>
          <ProjectIllustration.Transformation height="100%" top="0" left="0">
            <ProjectIllustration.Image
              src={data.mlk.image.resize.src}
              shadow="lg"
            />
          </ProjectIllustration.Transformation>
        </ProjectIllustration>
        <OtherProject.Summary>
          <OtherProject.Heading>
            Web Exhibit: MLK and Student Newspapers at the Five Colleges of Ohio
          </OtherProject.Heading>
          <OtherProject.Blurb>
            Unearthing the coverage of King&rsquo;s assassination at some of
            Ohio&rsquo;s liberal arts colleges.
          </OtherProject.Blurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </OtherProject.Summary>
      </OtherProject>
    </OtherProjectsList>
  );
}
