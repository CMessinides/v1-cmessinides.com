import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import { Link } from "gatsby";
import {
	colors,
	spacing,
	textSizes,
	leading,
	shadows,
	screens,
	fontFamilies,
	tracking
} from "./tokens";
import Container from "./container";
import Layout from "./layout";
import SEO from "./seo";
import { ProjectName, ProjectBlurb } from "./project";
import { ArrowLeft } from "react-feather";
import { graphql } from "gatsby";
import GoToNextProject from "./go-to-next-project";
import { useSectionSpacing } from "./section";

const HeaderImage = styled(Img)`
	position: relative;
	top: ${spacing.lg};
	filter: ${shadows.md.asDrop};

	@media ${screens.md} {
		top: ${spacing.xl};
	}
`;

const HeaderHeading = styled(Container).attrs(() => {
	return {
		maxWidth: "narrower"
	};
})`
	font-size: ${textSizes.lg};

	@media (min-width: 36em) {
		font-size: ${textSizes.xl};
		line-height: ${leading.tight};
	}
`;

const Header = styled.header`
	padding-top: ${spacing["2xl"]};
	background-color: ${props => (props.theme ? props.theme : colors.black)};
	color: ${props => (props.text ? props.text : colors.white)};
	margin-bottom: ${spacing.lg};

	@media ${screens.md} {
		padding-top: ${spacing["4xl"]};
		margin-bottom: ${spacing.xl};
	}
`;

const NavLink = styled(Link)`
	text-decoration: none;
	color: inherit;
	font-family: ${fontFamilies.mono};
	display: inline-flex;
	align-items: center;
	text-transform: uppercase;
	letter-spacing: ${tracking.wide};
	opacity: 0.75;

	&:hover,
	&:focus {
		opacity: 1;
	}
`;

const NavBar = ({ theme, text }) => {
	return (
		<nav
			style={{
				backgroundColor: theme,
				color: text,
				lineHeight: "0",
				paddingTop: spacing.md
			}}
		>
			<Container maxWidth="narrower">
				<NavLink to="/">
					<ArrowLeft width={16} style={{ marginRight: spacing.sm.asPx }} /> See
					All Projects
				</NavLink>
			</Container>
		</nav>
	);
};

const Body = styled.div`
	--color-theme: ${props => (props.theme ? props.theme : colors["grey-light"])};
	--color-text: ${props => (props.text ? props.text : colors.black)};
	${({ padding = "top" }) => useSectionSpacing({ direction: padding })};

	> * + * {
		${useSectionSpacing({ direction: "top", property: "margin" })};
	}

	@media (min-width: 36em) {
		font-size: ${18 / 16}rem;
	}
`;

export default function CaseStudy({
	project,
	nextProject,
	thumbnail,
	children,
	bodyPadding
}) {
	return (
		<Layout>
			<SEO title={project.name} description={project.blurb} />
			<NavBar theme={project.themeColor} text={project.textColor} />
			<article>
				<Header theme={project.themeColor} text={project.textColor}>
					<HeaderHeading>
						<ProjectName as="h1">{project.name}</ProjectName>
						<ProjectBlurb color="inherit" style={{ opacity: "0.75" }}>
							{project.blurb}
						</ProjectBlurb>
					</HeaderHeading>
					<Container maxWidth="narrow">
						<HeaderImage alt="" fluid={thumbnail.childImageSharp.fluid} />
					</Container>
				</Header>
				<Body
					theme={project.themeColor}
					text={project.textColor}
					padding={bodyPadding}
				>
					{children}
				</Body>
				<footer>
					<GoToNextProject {...nextProject} />
				</footer>
			</article>
		</Layout>
	);
}

export const query = graphql`
	fragment CaseStudyThumbnail on File {
		childImageSharp {
			fluid(maxWidth: 960) {
				...GatsbyImageSharpFluid
			}
		}
	}
`;
