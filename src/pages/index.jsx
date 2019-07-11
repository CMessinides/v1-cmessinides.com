import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import ProjectGallery from "../components/homepage/project-gallery";
import About from "../components/homepage/about";
import Kicker from "../components/homepage/kicker";

const IndexPage = () => {
  return (
    <Layout footer={null}>
      <SEO />
      <Hero />
      <ProjectGallery />
      <About />
      <Kicker />
    </Layout>
  );
};

export default IndexPage;
