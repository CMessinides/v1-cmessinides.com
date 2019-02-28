import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GitHub, Instagram, Codepen, Mail, ChevronRight } from "react-feather";

const socialIcons = {
  GitHub: GitHub,
  Instagram: Instagram,
  Codepen: Codepen,
  Email: Mail
};

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query HeroQuery {
          site {
            siteMetadata {
              title
              description
              social {
                GitHub: github
                Codepen: codepen
                Instagram: instagram
                Email: email
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <header className="hero">
            <div className="container">
              <h1 className="hero__title">{data.site.siteMetadata.title}</h1>
              <p className="hero__subtitle">
                {data.site.siteMetadata.description}
              </p>
              <div className="hero__social">
                <h2 className="hero__social-heading">Elsewhere on the web</h2>
                <ul className="hero__social-list">
                  {Object.keys(data.site.siteMetadata.social).map(name => {
                    const url = data.site.siteMetadata.social[name];
                    const SocialIcon = socialIcons[name];
                    return (
                      <li className="hero__social-item" key={name}>
                        <a
                          className="hero__social-link"
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {SocialIcon && (
                            <SocialIcon
                              className="icon hero__social-icon"
                              aria-hidden="true"
                              size={16}
                            />
                          )}
                          <span className="hero__social-link-name">{name}</span>
                          <ChevronRight
                            className="icon hero__chevron-icon"
                            aria-hidden="true"
                            size={16}
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </header>
        );
      }}
    />
  );
};

export default Hero;
