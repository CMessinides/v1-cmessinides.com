import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GitHub, ExternalLink } from "react-feather";
import remark from "remark";
import remark2react from "remark-react";

const ProjectLink = ({ href, icon: Icon, children }) => {
  return (
    <a
      className={`project__link project__link--${Icon.name.toLowerCase()}`}
      href={href}
      target="_blank"
      rel="noreferrer noopener"
    >
      <Icon className="project__link-icon" size={12} aria-hidden="true" />
      <span className="project__link-text">{children}</span>
    </a>
  );
};

const Projects = () => {
  return (
    <StaticQuery
      query={graphql`
        query ProjectsQuery {
          projects: file(
            sourceInstanceName: { eq: "data" }
            base: { eq: "projects.yaml" }
          ) {
            childrenProjectsYaml {
              slug
              title
              description
              links {
                live
                github
              }
            }
          }
        }
      `}
      render={data => {
        const projects = data.projects.childrenProjectsYaml.map(p => {
          return (
            <li className="projects__item" key={p.slug}>
              <article className="project">
                <h3 className="project__title">{p.title}</h3>
                <div className="project__links">
                  {p.links.live && (
                    <ProjectLink href={p.links.live} icon={ExternalLink}>
                      See the project
                    </ProjectLink>
                  )}
                  {p.links.github && (
                    <ProjectLink href={p.links.github} icon={GitHub}>
                      See the source
                    </ProjectLink>
                  )}
                </div>
                <div className="project__description">
                  {
                    remark()
                      .use(remark2react, {
                        remarkReactComponents: {
                          a: ({ href, children }) => {
                            return (
                              <a
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                {children}
                              </a>
                            );
                          }
                        }
                      })
                      .processSync(p.description).contents
                  }
                </div>
              </article>
            </li>
          );
        });

        return (
          <section className="section section--projects">
            <div className="section__item container">
              <h2 className="section__heading">Projects</h2>
            </div>
            <ul className="section__item container projects">{projects}</ul>
          </section>
        );
      }}
    />
  );
};

export default Projects;
