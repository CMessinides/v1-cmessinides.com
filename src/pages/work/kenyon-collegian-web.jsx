import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function KenyonCollegianWeb({ location }) {
  const data = useStaticQuery(graphql`
    query KenyonCollegianWebQuery {
      project: projectsYaml(slug: { eq: "kenyon-collegian-web" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "kc-web-thumb.png" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy location={location} {...data}>
      <h1>Kenyon Collegian Web</h1>
    </CaseStudy>
  );
}
