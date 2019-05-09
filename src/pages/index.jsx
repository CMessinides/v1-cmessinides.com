import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero";
import PostersProject from "../components/homepage/posters-project";
import CollegianWebProject from "../components/homepage/collegian-web-project";
import CollegianMagazineProject from "../components/homepage/collegian-mag-project";
import OtherProjects from "../components/homepage/other-projects";

const IndexPage = () => {
  return (
    <Layout>
      <SEO />
      <Hero />
      <PostersProject />
      <CollegianWebProject />
      <CollegianMagazineProject />
      <OtherProjects />
    </Layout>
  );
};

export default IndexPage;
