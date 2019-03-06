import React from "react";
import { StaticQuery, graphql } from "gatsby";

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query AboutQuery {
          about: file(
            sourceInstanceName: { eq: "content" }
            base: { eq: "about.md" }
          ) {
            childMarkdownRemark {
              html
            }
          }
        }
      `}
      render={data => {
        return (
          <section className="section">
            <div className="container">
              <div className="section__item">
                <h2 className="section__heading">About</h2>
                <div
                  className="section__blurb section__blurb--formatted"
                  dangerouslySetInnerHTML={{
                    __html: data.about.childMarkdownRemark.html
                  }}
                />
              </div>
            </div>
          </section>
        );
      }}
    />
  );
};

export default About;
