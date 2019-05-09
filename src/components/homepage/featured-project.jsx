import React from "react";
import styled from "styled-components";
import Container from "../container";
import { screens, spacing } from "../tokens";
import Section from "../section";
import { useProjectTheme } from "./project";

const ThemedSection = styled(Section)`
  ${props => useProjectTheme(props.theme)}
`;

const FeaturedProject = ({ theme = "default", children }) => {
  return (
    <ThemedSection theme={theme} as="article">
      {children}
    </ThemedSection>
  );
};

FeaturedProject.Container = styled(Container)`
  width: 100%;
  align-items: center;

  @media ${screens.md} {
    display: flex;
  }
`;

FeaturedProject.ReverseContainer = styled(FeaturedProject.Container)`
  flex-direction: row-reverse;
`;

FeaturedProject.Summary = styled.div`
  margin-top: ${spacing.md};

  @media ${screens.md} {
    margin-top: 0;
    width: 50%;

    ${FeaturedProject.Container} > & {
      margin-left: ${spacing["2xl"].asPx};
    }

    ${FeaturedProject.ReverseContainer} > & {
      margin-left: 0;
      margin-right: ${spacing["2xl"].asPx};
    }
  }

  @media ${screens.lg} {
    width: 40%;
  }
`;

FeaturedProject.Illustration = styled.div`
  padding: ${spacing.lg} 0;

  @media ${screens.md} {
    width: 50%;
  }

  @media ${screens.lg} {
    width: 60%;
  }
`;

export default FeaturedProject;
