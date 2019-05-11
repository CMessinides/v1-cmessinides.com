import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";

export default function KenyonReview() {
  const data = useStaticQuery(graphql`
    query KenyonReviewQuery {
      project: projectsYaml(slug: { eq: "kenyon-review" }) {
        ...CaseStudyProject
      }

      thumbnail: file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "kr-posters-thumb.png" }
      ) {
        ...CaseStudyThumbnail
      }
    }
  `);

  return (
    <CaseStudy {...data}>
      <h1>Kenyon Review</h1>
    </CaseStudy>
  );
}
