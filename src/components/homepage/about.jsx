import React from "react";
import styled from "styled-components";
import Section from "../section";
import Container from "../container";
import { fontFamilies, spacing, colors, measure, screens } from "../tokens";
import { Move, Layers, Code, BookOpen } from "react-feather";

const AboutItem = styled.li`
	margin-bottom: ${spacing.xl};

	&:last-child {
		margin-bottom: 0;
	}

	svg {
		display: block;
		margin-bottom: ${spacing.xs};
		stroke: ${colors.purple};
	}

	strong {
		font-family: ${fontFamilies.heading};
		font-weight: 700;
	}

	em {
		font-style: italic;
	}

	p {
		max-width: ${measure.normal};
	}

	@media (min-width: 42em) {
		width: 50%;

		&:nth-last-child(2) {
			margin-bottom: 0;
		}

		&:nth-child(2n + 1) {
			padding-right: ${spacing.xl.times(0.5).asPx};
		}

		&:nth-child(2n) {
			padding-left: ${spacing.xl.times(0.5).asPx};
		}
	}

	@media ${screens.md} {
		margin-bottom: ${spacing["2xl"]};

		&:nth-child(2n + 1) {
			padding-right: ${spacing["2xl"].times(0.5).asPx};
		}

		&:nth-child(2n) {
			padding-left: ${spacing["2xl"].times(0.5).asPx};
		}

		svg {
			margin-bottom: ${spacing.sm};
		}
	}
`;

const AboutItems = styled.ul`
	@media (min-width: 42em) {
		display: flex;
		flex-wrap: wrap;
	}

	@media ${screens.lg} {
		font-size: ${18 / 16}rem;
	}
`;

export default function About() {
	return (
		<Section>
			<Container>
				<Section.Heading>How I can help you</Section.Heading>
				<AboutItems>
					<AboutItem>
						<Layers />
						<p>
							<strong>Design skills</strong> I have four years of design
							experience with a wide range of partners. Through exacting
							attention to color, typography, and detail, I help clients tell
							their stories clearly and memorably.
						</p>
					</AboutItem>
					<AboutItem>
						<Code />
						<p>
							<strong>Web development</strong> I have four years of experience
							with HTML, CSS, JavaScript, React, and WordPress, creating
							excellent websites that are accessible, performant, and easy to
							use.
						</p>
					</AboutItem>
					<AboutItem>
						<BookOpen />
						<p>
							<strong>Writing and editing</strong> I&rsquo;m as comfortable with
							words as I am with visuals and code. As co-editor-in-chief of the{" "}
							<em>Kenyon Collegian</em> last year, I led a staff of 30 to
							produce excellent journalism while meeting tough deadlines week in
							and week out.
						</p>
					</AboutItem>
					<AboutItem>
						<Move />
						<p>
							<strong>Adaptability</strong> As a self-taught designer and
							developer, I&rsquo;m ready and eager to learn the skills necessary
							to get the job done. I take constructive criticism in stride and
							solve problems quickly under changing circumstances.
						</p>
					</AboutItem>
				</AboutItems>
			</Container>
		</Section>
	);
}
