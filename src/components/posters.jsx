import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { sortBy, reverse } from "lodash";
import { LightboxContext } from "./lightbox";
import { Maximize2 } from "react-feather";

const POSTERS_SLIDESHOW_KEY = "posters";

const PosterLightboxSlide = ({ description, date, fluid }) => {
  return (
    <div className="poster-slide">
      <figure className="poster-slide__container container">
        {fluid && <Img fluid={fluid} className="poster-slide__image" />}
        <figcaption className="poster-slide__details">
          <p className="poster-slide__description">{description}</p>
          <p className="poster-slide__date">
            {new Date(date).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric"
            })}
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

const PosterItem = ({ description, fluid, index }) => {
  const lightbox = React.useContext(LightboxContext);
  const buttonRef = React.useRef();

  const handleClick = () =>
    lightbox.openLightbox(POSTERS_SLIDESHOW_KEY, index, buttonRef);

  return (
    <li className="poster" onClick={handleClick}>
      {fluid && (
        <Img alt={description} className="poster__thumbnail" fluid={fluid} />
      )}
      <button
        className="btn btn--round btn--glass poster__expand-button"
        type="button"
        aria-controls="lightbox"
        aria-expanded={lightbox.isOpen}
        aria-label="See more about this poster"
        ref={buttonRef}
        onClick={handleClick}
      >
        <Maximize2 className="btn__icon" size={16} aria-hidden="true" />
      </button>
    </li>
  );
};

const PosterList = ({ posters }) => {
  return (
    <ul className="posters">
      {posters.map((poster, index) => {
        return (
          <PosterItem
            key={poster.slug}
            date={poster.date}
            slug={poster.slug}
            description={poster.description}
            fluid={poster.image && poster.image.node.childImageSharp.fluid}
            index={index}
          />
        );
      })}
    </ul>
  );
};

const Posters = () => {
  const lightbox = React.useContext(LightboxContext);

  return (
    <StaticQuery
      query={graphql`
        query PostersQuery {
          blurb: file(
            sourceInstanceName: { eq: "content" }
            base: { eq: "posters.md" }
          ) {
            childMarkdownRemark {
              html
            }
          }

          posters: file(
            sourceInstanceName: { eq: "data" }
            base: { eq: "posters.yaml" }
          ) {
            childrenPostersYaml {
              slug
              date
              description
            }
          }

          posterImages: allFile(
            filter: {
              sourceInstanceName: { eq: "images" }
              relativeDirectory: { eq: "posters" }
            }
          ) {
            edges {
              node {
                base
                childImageSharp {
                  fluid(maxWidth: 960) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const posters = reverse(
          sortBy(data.posters.childrenPostersYaml, ["date", "slug"])
        ).map(poster => {
          const image = data.posterImages.edges.find(edge => {
            return edge.node.base.includes(poster.slug);
          });
          return {
            ...poster,
            image
          };
        });

        if (!lightbox.slideshows[POSTERS_SLIDESHOW_KEY]) {
          lightbox.addSlideshowToLightbox(
            POSTERS_SLIDESHOW_KEY,
            posters.map(poster => {
              return {
                label: poster.description,
                node: (
                  <PosterLightboxSlide
                    description={poster.description}
                    date={poster.date}
                    fluid={
                      poster.image && poster.image.node.childImageSharp.fluid
                    }
                  />
                )
              };
            })
          );
        }

        return (
          <section className="section section--posters">
            <div className="section__item container">
              <h2 className="section__heading">Poster design</h2>
              <div
                className="section__blurb section__blurb--formatted"
                dangerouslySetInnerHTML={{
                  __html: data.blurb.childMarkdownRemark.html
                }}
              />
            </div>
            <div className="section__item container container--wide">
              <PosterList posters={posters} />
            </div>
          </section>
        );
      }}
    />
  );
};

export default Posters;
