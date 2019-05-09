import React from "react";
import FeaturedProject from "./featured-project";
import ProjectIllustration from "../project-illustration";
import Illustration from "./illustration";
import { useStaticQuery, graphql } from "gatsby";
import { colors } from "../tokens";
import {
  ProjectKicker,
  ProjectHeading,
  ProjectBlurb,
  ProjectButton
} from "./project";

export default function PostersProject() {
  const data = useStaticQuery(graphql`
    query HomepagePostersQuery {
      baker: file(relativePath: { eq: "posters/baker.png" }) {
        childImageSharp {
          resize(width: 400) {
            src
          }
        }
      }

      abdurraqib: file(relativePath: { eq: "posters/abdurraqib-et-al.png" }) {
        childImageSharp {
          resize(width: 400) {
            src
          }
        }
      }
    }
  `);

  return (
    <FeaturedProject theme="yellow">
      <FeaturedProject.Container>
        <FeaturedProject.Illustration>
          <ProjectIllustration>
            <ProjectIllustration.Transformation
              x="-0.15"
              y="0.75"
              angle="10deg"
              rotate="-2deg"
              bottom="5%"
              left="5%"
              height="90%"
              order="2"
            >
              <ProjectIllustration.Image
                src={data.baker.childImageSharp.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
            <ProjectIllustration.Transformation
              x="0.1"
              y="-0.7"
              angle="8deg"
              rotate="4deg"
              top="5%"
              right="5%"
              height="80%"
              order="3"
            >
              <ProjectIllustration.Image
                src={data.abdurraqib.childImageSharp.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
            <Illustration.Circles>
              <Illustration.Circle
                offsetX={14}
                offsetY={-3}
                anchorX="right"
                size={14}
                order="4"
                style={{ fill: colors["purple"] }}
              />
              <Illustration.Circle
                offsetY={9}
                offsetX={3}
                anchorY="bottom"
                size={8}
                order="4"
                style={{ fill: colors.orange }}
              />
            </Illustration.Circles>
          </ProjectIllustration>
        </FeaturedProject.Illustration>
        <FeaturedProject.Summary>
          <ProjectKicker>Fall 2016 &ndash; Spring 2019</ProjectKicker>
          <ProjectHeading>The Kenyon Review Reading Series</ProjectHeading>
          <ProjectBlurb>
            Highlighting unique literary voices through three years of custom
            posters.
          </ProjectBlurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </FeaturedProject.Summary>
      </FeaturedProject.Container>
    </FeaturedProject>
  );
}
