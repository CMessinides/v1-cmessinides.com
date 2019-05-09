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

export default function CollegianWebProject() {
  const data = useStaticQuery(graphql`
    query HomepageCollegianWebQuery {
      desktop: file(
        relativePath: { eq: "collegian-website/collegian-desktop-thumb.png" }
      ) {
        childImageSharp {
          resize(width: 600) {
            src
          }
        }
      }

      mobile: file(
        relativePath: { eq: "collegian-website/collegian-mobile-thumb.png" }
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
    <FeaturedProject theme="purple">
      <FeaturedProject.ReverseContainer>
        <FeaturedProject.Illustration>
          <ProjectIllustration>
            <ProjectIllustration.Transformation
              x="0.3"
              y="-0.7"
              angle="-8deg"
              rotate="-3deg"
              top="-5%"
              left="5%"
              height="60%"
              order="3"
            >
              <ProjectIllustration.Image
                src={data.desktop.childImageSharp.resize.src}
                shadow="lg"
              />
            </ProjectIllustration.Transformation>
            <ProjectIllustration.Transformation
              x="-0.8"
              y="1"
              angle="-7deg"
              rotate="5deg"
              bottom="-5%"
              right="5%"
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
                anchorY="bottom"
                offsetX={26}
                size={20}
                shadow="lg"
                style={{ fill: colors.orange }}
              />
              <Illustration.Circle
                anchorX="right"
                offsetX={15}
                offsetY={7}
                size={14}
                shadow="lg"
                order="4"
                style={{ fill: colors.blue }}
              />
              <Illustration.Circle
                anchorX="right"
                offsetX={22}
                size={6}
                shadow="lg"
                order="4"
                style={{ fill: colors.blue }}
              />
            </Illustration.Circles>
          </ProjectIllustration>
        </FeaturedProject.Illustration>
        <FeaturedProject.Summary>
          <ProjectKicker>Fall 2017</ProjectKicker>
          <ProjectHeading>The Kenyon Collegian Website</ProjectHeading>
          <ProjectBlurb>
            Creating a clear, engaging news experience for readers on and off
            the Hill.
          </ProjectBlurb>
          <ProjectButton href="#">Read More</ProjectButton>
        </FeaturedProject.Summary>
      </FeaturedProject.ReverseContainer>
    </FeaturedProject>
  );
}
