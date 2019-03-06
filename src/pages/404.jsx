import React from "react";
import { Link } from "gatsby";
import { ChevronLeft } from "react-feather";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="_404">
      <h1 className="_404__title">
        <span className="_404__title-status-code">404</span>
        <span className="_404__title-status-text">Page not found</span>
      </h1>
      <Link to="/" className="_404__home-link">
        <ChevronLeft
          className="_404__home-link-icon"
          size={16}
          aria-hidden="true"
        />
        <span className="_404__home-link-text">Go to the homepage</span>
      </Link>
    </div>
  </Layout>
);

export default NotFoundPage;
