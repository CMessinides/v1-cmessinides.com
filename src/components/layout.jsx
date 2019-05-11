import React from "react";
import PropTypes from "prop-types";
import CSSReset from "./css-reset";
import styled from "styled-components";
import { colors, textSizes, leading, fontFamilies } from "./tokens";

const LayoutWrapper = styled.div`
  background-color: ${colors.white};
  color: ${colors.black};
  font-family: ${fontFamilies.body};
  font-size: ${textSizes.md};
  line-height: ${leading.normal};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: normal;
`;

const Layout = ({ children }) => {
  return (
    <LayoutWrapper>
      <CSSReset />
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
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
