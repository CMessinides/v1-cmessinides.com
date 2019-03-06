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
            <main className="application__main">{children}</main>
            <footer className="application__footer footer">
              <div className="container footer__container">
                <span className="footer__copyright">
                  Copyright © {new Date().getFullYear()} Cameron Messinides
                </span>
                <span className="footer__credit">
                  Built with{" "}
                  <a
                    className="footer__link"
                    href="https://www.gatsbyjs.org"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Gatsby
                  </a>
                </span>
              </div>
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
