import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import About from "../components/about";
import Posters from "../components/posters";
import Projects from "../components/projects";

const IndexPage = () => (
  <Layout>
    <SEO />
    <Hero />
    <About />
    <Projects />
    <Posters />
  </Layout>
);

export default IndexPage;
