import styled, { css } from "styled-components";
import {
	spacing,
	colors,
	fontFamilies,
	textSizes,
	screens,
	maxWidths
} from "../tokens";
import Container from "../container";

export const Figure = styled.figure``;

Figure.Caption = styled.figcaption`
	font-family: ${fontFamilies.mono};
	color: ${colors["grey-darker"]};
	font-size: ${textSizes.sm};
	padding: ${spacing.xs} 0;
	border-bottom: 1px ${colors["grey-light"]} solid;
`;

export const GridWithFallback = styled(Container).attrs(
	({ breakpoint = screens.md, withGrid = "normal", fallback = "narrower" }) => {
		return {
			breakpoint,
			withGrid,
			maxWidth: fallback
		};
	}
)`
	@supports (display: grid) {
		max-width: ${props => maxWidths[props.withGrid]};
		${props =>
			props.collapseBelow
				? css`
						@media ${props.collapseBelow} {
							display: grid;
						}
				  `
				: css`
						display: grid;
				  `};
	}

	& > * + * {
		margin-top: ${spacing.lg};

		@supports (display: grid) {
			${props =>
				props.collapseBelow
					? css`
							@media ${props.collapseBelow} {
								margin-top: 0;
							}
					  `
					: css`
							margin-top: 0;
					  `};
		}
	}
`;

const Text = styled(Container).attrs(() => {
	return {
		maxWidth: "narrower"
	};
})`
	em {
		font-style: italic;
	}

	strong {
		font-weight: 700;
	}

	> * + * {
		margin-top: ${spacing.md};
	}

	&:first-of-type > :first-child::first-letter {
		margin-right: ${spacing.lg.asPx};
		font-weight: 700;
		display: block;
		line-height: 1;
		font-size: 4.3em;
		float: left;
		color: var(--color-theme);
	}
`;

export default Text;
