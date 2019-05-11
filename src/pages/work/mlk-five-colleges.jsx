import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function MLKFiveColleges({ location }) {
  const data = useStaticQuery(graphql`
    query MLKFiveCollegesQuery {
      project: projectsYaml(slug: { eq: "mlk-five-colleges" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "mlk-web-thumb.jpg" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy location={location} {...data}>
      <h1>MLK Five Colleges</h1>
    </CaseStudy>
  );
}
