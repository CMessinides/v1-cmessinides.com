import styled, { css } from "styled-components";
import { maxWidths, spacing, screens } from "./tokens";

export const useContainerPadding = css`
  padding-left: ${spacing.lg.asPx};
  padding-right: ${spacing.lg.asPx};

  @media ${screens.md} {
    padding-left: ${spacing["2xl"].asPx};
    padding-right: ${spacing["2xl"].asPx};
  }
`;

const Container = styled.div`
  max-width: ${maxWidths.normal};
  margin: 0 auto;
  ${useContainerPadding};
`;

export const NarrowContainer = styled(Container)`
  max-width: ${maxWidths.narrow};
`;

export const WideContainer = styled(Container)`
  max-width: ${maxWidths.wide};
`;

export default Container;
