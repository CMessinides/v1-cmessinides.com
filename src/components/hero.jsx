import React from "react";
import Section from "./section";
import Container from "./container";
import Link from "./link";
import styled from "styled-components";
import {
	fontFamilies,
	leading,
	textSizes,
	spacing,
	screens,
	measure,
	colors
} from "./tokens";

const HeroSection = styled(Section)`
	padding-top: ${spacing["5xl"]};
	color: ${colors["grey-darker"]};

	@media ${screens.md} {
		padding-top: ${spacing["4xl"]};
	}
`;

const HeroHeading = styled.h1`
	font-family: ${fontFamilies.heading};
	line-height: ${leading.none};
	font-weight: 700;
	font-size: ${textSizes["3xl"]};
	color: ${colors.black};
	margin-bottom: ${spacing.md};
`;

const HeroBlurb = styled.p`
	max-width: ${measure.normal};
`;

const Hero = () => {
	return (
		<HeroSection as="header">
			<Container>
				<HeroHeading>Cameron Messinides</HeroHeading>
				<HeroBlurb>
					I’m a writer, designer, and web developer currently based in Ohio.{" "}
					Recently, I&rsquo;ve built{" "}
					<Link to="https://thecollegianmagazine.com">
						thecollegianmagazine.com
					</Link>{" "}
					and <Link to="https://kenyoncollegian.com">kenyoncollegian.com</Link>,
					researched and written about race and news media, and led a newsroom
					at the{" "}
					<Link to="https://kenyoncollegian.com/author/cameronnm">
						Kenyon Collegian
					</Link>
					. I care about journalism and digital media &mdash; I’m interested in
					telling stories online through design, code, data, and words.
				</HeroBlurb>
			</Container>
		</HeroSection>
	);
};

export default Hero;
