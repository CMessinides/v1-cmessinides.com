import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import LightboxProvider, { LightboxContext } from "./lightbox";

const Layout = ({ children }) => {
  return (
    <LightboxProvider>
      <LightboxContext.Consumer>
        {lightbox => (
          <div
            className="application"
            aria-hidden={lightbox.isOpen ? "true" : null}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </footer>
          </div>
        )}
      </LightboxContext.Consumer>
    </LightboxProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
