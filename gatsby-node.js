const path = require("path");

module.exports.createPages = async function ({ graphql, actions }) {
  const { data } = await graphql(`
    query Projects {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((n) => {
    actions.createPage({
      path: `/projects/${n.frontmatter.slug}`,
      component: path.resolve("./src/templates/project-details.js"),
      context: {
        slug: n.frontmatter.slug,
      },
    });
  });
};
