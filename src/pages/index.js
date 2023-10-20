import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import GatsbyImage from "gatsby-image";

export default function Home({ data }) {
  console.log("DATA", data);
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Make your own</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut eu
            sem integer vitae justo. Cras pulvinar mattis nunc sed blandit
            libero volutpat sed cras. Cursus euismod quis viverra nibh cras
            pulvinar. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Arcu
            cursus vitae congue mauris rhoncus aenean vel elit. Curabitur
            gravida arcu ac tortor dignissim convallis aenean. Massa tincidunt
            nunc pulvinar sapien et. Aenean vel elit scelerisque mauris.
            Volutpat sed cras ornare arcu dui vivamus. Velit scelerisque in
            dictum non consectetur a erat nam at. Luctus accumsan tortor posuere
            ac ut consequat semper. Congue mauris rhoncus aenean vel elit. Sit
            amet consectetur adipiscing elit duis tristique sollicitudin nibh
            sit. Arcu dictum varius duis at consectetur lorem donec massa. Id
            porta nibh venenatis cras sed felis. Convallis tellus id interdum
            velit laoreet id donec ultrices. Lectus arcu bibendum at varius vel
            pharetra vel. Dui faucibus in ornare quam viverra.
          </p>
          <Link to="/projects" className={styles.btn}>
            My projects
          </Link>
        </div>
        <GatsbyImage fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  );
}

export const query = graphql`
  query image {
    file(relativePath: { eq: "work.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
