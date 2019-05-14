import React from "react";
import CaseStudy from "../../components/case-study";
import { graphql } from "gatsby";

export default function KenyonCollegianWeb({ data, pageContext, location }) {
  return (
    <CaseStudy location={location} thumbnail={data.thumbnail} {...pageContext}>
      <h1>Kenyon Collegian Web</h1>
    </CaseStudy>
  );
}

export const query = graphql`
  query($thumbnailPath: String!) {
    thumbnail: file(absolutePath: { eq: $thumbnailPath }) {
      ...CaseStudyThumbnail
    }
  }
`;
