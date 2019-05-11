import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function FortyNorthMap({ location }) {
  const data = useStaticQuery(graphql`
    query FortyNorthMapQuery {
      project: projectsYaml(slug: { eq: "forty-north-map" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "forty-north-thumb.jpg" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy location={location} {...data}>
      <h1>Forty North Map</h1>
    </CaseStudy>
  );
}
