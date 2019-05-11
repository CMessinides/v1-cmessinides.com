import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function KenyonCollegianLogo({ location }) {
  const data = useStaticQuery(graphql`
    query KenyonCollegianLogoQuery {
      project: projectsYaml(slug: { eq: "kenyon-collegian-logo" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "kc-logo-thumb.png" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy location={location} {...data}>
      <h1>Kenyon Collegian Logo</h1>
    </CaseStudy>
  );
}
