import Container from "../container";
import { screens, spacing } from "../tokens";
import styled from "styled-components";

export const GridItem = styled.div`
  padding-bottom: ${spacing.lg};
  width: 50%;

  &:last-child,
  &:nth-last-child(2) {
    padding-bottom: 0;
  }

  &:nth-child(2n) {
    padding-left: ${spacing.lg.times(0.5).asPx};
  }

  &:nth-child(2n + 1) {
    padding-right: ${spacing.lg.times(0.5).asPx};
  }

  @media ${screens.md} {
    padding-bottom: ${spacing.xl};
  }
`;

export const TwoWideGrid = styled(Container).attrs(
  ({ maxWidth = "narrow" }) => {
    return {
      maxWidth
    };
  }
)`
  display: flex;
  flex-wrap: wrap;

  > ${GridItem} {
    @media ${screens.md} {
      &:nth-child(2n) {
        padding-left: ${spacing.xl.times(0.5).asPx};
      }

      &:nth-child(2n + 1) {
        padding-right: ${spacing.xl.times(0.5).asPx};
      }
    }
  }
`;

export const FourWideGrid = styled(TwoWideGrid)`
  > ${GridItem} {
    @media ${screens.md} {
      width: 25%;

      &:nth-child(4n + 1) {
        padding-left: 0;
        padding-right: ${spacing.xl.times(0.75).asPx};
      }

      &:nth-child(4n + 2),
      &:nth-child(4n + 3) {
        padding-left: ${spacing.xl.times(0.375).asPx};
        padding-right: ${spacing.xl.times(0.375).asPx};
      }

      &:nth-child(4n + 4) {
        padding-left: ${spacing.xl.times(0.75).asPx};
        padding-right: 0;
      }

      &:nth-last-child(3),
      &:nth-last-child(4) {
        padding-bottom: 0;
      }
    }
  }
`;
