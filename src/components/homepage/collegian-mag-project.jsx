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

export default function CollegianMagazineProject() {
  const data = useStaticQuery(graphql`
    query HomepageCollegianMagQuery {
      desktop: file(
        relativePath: { eq: "collegian-magazine/desktop-thumb.png" }
      ) {
        childImageSharp {
          resize(width: 600) {
            src
          }
        }
      }

      mobile: file(
        relativePath: { eq: "collegian-magazine/mobile-thumb.png" }
      ) {
        childImageSharp {
          resize(width: 400) {
            src
          }
        }
      }
    }
  `);
  return (
    <FeaturedProject theme="dark">
      <FeaturedProject.Container>
        <FeaturedProject.Illustration>
          <ProjectIllustration>
            <ProjectIllustration.Transformation
              x="-0.2"
              y="0.887"
              angle="-7deg"
              rotate="4deg"
              height="60%"
              bottom="-5%"
              right="5%"
              order="3"
            >
              <ProjectIllustration.Image
                src={data.desktop.childImageSharp.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
            <ProjectIllustration.Transformation
              x="0.31"
              y="-0.5"
              angle="-7deg"
              rotate="-3deg"
              top="-5%"
              left="5%"
              height="90%"
              order="3"
            >
              <ProjectIllustration.Image
                src={data.mobile.childImageSharp.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
            <Illustration.Circles>
              <Illustration.Circle
                anchorX="right"
                anchorY="bottom"
                offsetX={0}
                offsetY={0}
                size={12}
                style={{ fill: colors.blue }}
                order="4"
              />
              <Illustration.Circle
                anchorX="right"
                offsetX={25}
                size={25}
                style={{ fill: colors.yellow }}
                order="4"
              />
              <Illustration.Circle
                anchorY="bottom"
                offsetX={10}
                offsetY={10}
                size={8}
                style={{ fill: colors.orange }}
                order="4"
              />
            </Illustration.Circles>
          </ProjectIllustration>
        </FeaturedProject.Illustration>
        <FeaturedProject.Summary>
          <ProjectKicker>Summer 2017</ProjectKicker>
          <ProjectHeading>The Collegian Magazine Website</ProjectHeading>
          <ProjectBlurb>
            Bringing creative print layouts and stunning photojournalism to life
            on the web.
          </ProjectBlurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </FeaturedProject.Summary>
      </FeaturedProject.Container>
    </FeaturedProject>
  );
}
