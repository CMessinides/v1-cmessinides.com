/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createPages = async function({ actions, graphql }) {
  const { data } = await graphql(`
    query CaseStudies {
      thumbnails: allFile(
        filter: {
          sourceInstanceName: { eq: "images" }
          relativeDirectory: { eq: "thumbnails" }
        }
      ) {
        edges {
          node {
            name
            absolutePath
          }
        }
      }
      projects: allProjectsYaml {
        edges {
          node {
            name
            slug
            blurb
            themeColor
            textColor
          }
        }
      }
    }
  `);

  const thumbnailMap = data.thumbnails.edges.reduce((map, edge) => {
    const { name, absolutePath } = edge.node;
    map[name] = absolutePath;
    return map;
  }, {});

  data.projects.edges.forEach((edge, i, edges) => {
    const project = edge.node;
    const nextProject =
      i === edges.length - 1 ? edges[0].node : edges[i + 1].node;
    const thumbnailPath = thumbnailMap[project.slug];

    actions.createPage({
      path: `/work/${project.slug}`,
      component: require.resolve(
        `./src/components/case-studies/${project.slug}.jsx`
      ),
      context: {
        thumbnailPath,
        project,
        nextProject
      }
    });
  });
};
