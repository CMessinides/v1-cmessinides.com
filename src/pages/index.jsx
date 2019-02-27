import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Posters from "../components/posters";
import Projects from "../components/projects";
import Writing from "../components/writing";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Projects />
    <Posters />
    <Writing />
  </Layout>
);

export default IndexPage;
