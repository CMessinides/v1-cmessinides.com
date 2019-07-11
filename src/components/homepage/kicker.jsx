import React from "react";
import styled from "styled-components";
import Section from "../section";
import {
	spacing,
	fontFamilies,
	textSizes,
	leading,
	colors,
	screens,
	maxWidths
} from "../tokens";
import { useContainerPadding } from "../container";
import { Mail, Phone } from "react-feather";
import Link from "../link";

const KickerContactLink = styled(Link)`
	display: flex;
	border: none;
	font-family: ${fontFamilies.heading};

	& + & {
		margin-top: ${spacing.lg};
	}

	svg {
		margin-right: ${spacing.md.asPx};
		stroke: ${colors["purple-light"]};
	}
`;

const KickerHeading = styled.strong`
	display: block;
	font-weight: 700;
	font-family: ${fontFamilies.heading};
	font-size: ${textSizes["2xl"]};
	line-height: ${leading.tight};

	@media (min-width: 30em) {
		font-size: ${textSizes["3xl"]};
	}

	@media ${screens.lg} {
		font-size: ${textSizes["4xl"]};
	}
`;

const KickerSubheading = styled.em`
	display: block;
	font-style: italic;
	font-size: ${textSizes.lg};
	color: ${colors["grey-darker"]};

	@media (min-width: 30em) {
		font-size: ${textSizes.xl};
	}
`;

const KickerSection = styled(Section)`
	${useContainerPadding};
	max-width: ${maxWidths.normal};
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	> :first-child {
		margin-bottom: ${spacing.xl};
	}

	@media ${screens.md} {
		flex-direction: row;
		align-items: center;

		> :first-child {
			width: 50%;
			margin-bottom: 0;
			margin-right: ${spacing["2xl"]};
		}

		> :last-child {
			margin-right: auto;
		}
	}
`;

export default function Kicker() {
	return (
		<KickerSection>
			<div>
				<KickerHeading>Interested?</KickerHeading>
				<KickerSubheading>Please feel free to get in touch.</KickerSubheading>
			</div>
			<div>
				<KickerContactLink to="mailto:me@cmessinides.com">
					<Mail /> <span>me@cmessinides.com</span>
				</KickerContactLink>
				<KickerContactLink to="tel:+1-803-729-0177">
					<Phone /> <span>+1 (803) 729-0177</span>
				</KickerContactLink>
			</div>
		</KickerSection>
	);
}
