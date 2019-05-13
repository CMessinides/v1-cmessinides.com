import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import ProjectGallery from "../components/homepage/project-gallery";
import About from "../components/homepage/about";
import Endorsement from "../components/homepage/endorsement";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <ProjectGallery />
      <About />
      <Endorsement />
    </Layout>
  );
};

export default IndexPage;
