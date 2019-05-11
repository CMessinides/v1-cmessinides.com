import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import ProjectGallery from "../components/homepage/project-gallery";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <ProjectGallery />
    </Layout>
  );
};

export default IndexPage;
