import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import CaseStudy from "../../components/case-study";
import Text from "../../components/article/text";

export default function KenyonReview({ location }) {
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
    <CaseStudy location={location} {...data}>
      <Text>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          mollitia nam quam, rem veritatis earum ipsam error quo accusamus.
          Temporibus neque error, delectus magni velit ipsa totam maxime libero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          mollitia nam quam, rem veritatis earum ipsam error quo accusamus.
          Temporibus neque error, delectus magni velit ipsa totam maxime libero.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          mollitia nam quam, rem veritatis earum ipsam error quo accusamus.
          Temporibus neque error, delectus magni velit ipsa totam maxime libero.
        </p>
      </Text>
    </CaseStudy>
  );
}
