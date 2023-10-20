import React from "react";
import Layout from "../../components/Layout";
import * as styles from "../../styles/projects.module.css";
import { Link, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

function Projects({ data }) {
  const projects = data.projects.nodes;
  const { title } = data.site.siteMetadata;

  return (
    <Layout>
      <div className={styles.portfolio}>
        <h2>Projects at {title}</h2>
        <h3>Things I created</h3>
        <div className={styles.projects}>
          {projects.map((p) => (
            <Link to={`/projects/${p.frontmatter.slug}`} key={p.id}>
              <GatsbyImage fluid={p.frontmatter.thumb.childImageSharp.fluid} />
              <div>
                <h3>{p.frontmatter.title}</h3>
                <p>{p.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          slug
          stack
          title
          thumb {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;
