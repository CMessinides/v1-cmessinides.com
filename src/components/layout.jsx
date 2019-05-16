import React from "react";
import PropTypes from "prop-types";
import CSSReset from "./css-reset";
import styled from "styled-components";
import { colors, textSizes, leading, fontFamilies } from "./tokens";
import Footer from "./footer";

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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const LayoutMain = styled.main`
  flex: 1 auto;
  ${props =>
    props.centerContent &&
    `
    display: flex;
    flex-direction: column;
    justify-content: center;
  `};
`;

const Layout = ({ centerContent = false, children }) => {
  return (
    <LayoutWrapper>
      <CSSReset />
      <LayoutMain centerContent={centerContent}>{children}</LayoutMain>
      <Footer />
    </LayoutWrapper>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
