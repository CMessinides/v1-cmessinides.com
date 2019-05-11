import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function CollegianMagazineWeb() {
  const data = useStaticQuery(graphql`
    query CollegianMagazineWebQuery {
      project: projectsYaml(slug: { eq: "collegian-magazine-web" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "cm-web-thumb.png" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy {...data}>
      <h1>Collegian Magazine Web</h1>
    </CaseStudy>
  );
}
