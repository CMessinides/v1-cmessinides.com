import React from "react";
import CaseStudy from "../case-study";
import { graphql } from "gatsby";
import Text, { Figure } from "../article/text";
import Link from "../link";
import Container from "../container";
import Img from "gatsby-image";
import styled from "styled-components";
import { spacing, screens } from "../tokens";

const VariationsGrid = styled(Container).attrs({
	maxWidth: "narrow"
})`
	display: grid;
	grid-gap: ${spacing.md.asPx};

	@media ${screens.sm} {
		grid-template-columns: 1fr 3.1fr;
	}

	@media ${screens.md} {
		grid-gap: ${spacing.xl.asPx};
		grid-template-columns: 1fr 3.3fr;
	}

	> :first-child {
		grid-column: span 2;

		@media ${screens.sm} {
			grid-column: 2;
			grid-row: span 2;
		}
	}

	> :nth-child(n + 2) {
		grid-row: 2;

		@media ${screens.sm} {
			grid-column: 1;

			&:nth-child(2) {
				grid-row: 1;
			}
		}
	}
`;

export default function KenyonCollegianLogo({ data, pageContext, location }) {
	return (
		<CaseStudy location={location} thumbnail={data.thumbnail} {...pageContext}>
			<Text>
				<p>
					To mark the 160th anniversary of the <em>Kenyon Collegian</em> in
					2016, then editor-in-chief Henry Gendreau approached me to redesign
					the newspaper&rsquo;s logo. At the time, the <em>Colegian</em>&rsquo;s
					logo was servicable, but not distinct. With a name that could
					potentially belong to any college newspaper, the <em>Collegian</em>{" "}
					needed a mark that emphasized its history, its quality, and its
					Kenyon-ness.
				</p>
			</Text>
			<Container maxWidth="narrow">
				<Figure>
					<Img fluid={data.oldLogo.childImageSharp.fluid} />
					<Figure.Caption>An example of the old logo in use</Figure.Caption>
				</Figure>
			</Container>
			<Text>
				<p>
					In the new logo, I exchanged the old slab serif for{" "}
					<Link to="https://www.fonts.com/font/bitstream/american-text/regular?SiteId=15">
						American Text
					</Link>
					, a 20th-century blackletter designed by Morris Fuller Benton. The
					typeface&rsquo;s sharp triangular forms evoke the architecture of some
					of Kenyon&rsquo;s longest-standing and most iconic buildings, like
					Ascension Hall.
				</p>
				<p>
					I reinforced the visual connection between the logo and the Kenyon
					campus with a custom icon of the Peirce Hall tower. Drawn in the same
					style as the logo&rsquo;s letterforms, the icon connects the{" "}
					<em>Collegian</em> to Peirce, the heart of campus and the location of
					the newspaper&rsquo;s historic third-floor office.
				</p>
			</Text>
			<Container maxWidth="narrow">
				<img
					src={data.fullLogo.publicURL}
					alt=""
					style={{
						display: "block",
						width: "100%",
						height: "auto",
						maxWidth: "100%"
					}}
					height="80"
					width="501"
				/>
			</Container>
			<Text>
				<p>
					A variety of secondary logos and arrangements allow the{" "}
					<em>Collegian</em> to use the logo in a wide range of print and
					digital applications. I also developed a simplified version of the
					icon for use at small sizes.
				</p>
			</Text>
			<VariationsGrid>
				{data.variations.edges.map(({ node }) => {
					return <Img key={node.name} fluid={node.childImageSharp.fluid} />;
				})}
			</VariationsGrid>
			<Text>
				<p>
					Now in its third year, the <em>Collegian</em> logo continues to
					represent the newspaper in print, on social media, and elsewhere on
					the web.
				</p>
			</Text>
			<Img fluid={data.currentUse.childImageSharp.fluid} />
		</CaseStudy>
	);
}

export const query = graphql`
	query($thumbnailPath: String!) {
		thumbnail: file(absolutePath: { eq: $thumbnailPath }) {
			...CaseStudyThumbnail
		}

		oldLogo: file(
			sourceInstanceName: { eq: "images" }
			relativePath: { eq: "kenyon-collegian-logo/old-logo-in-use.png" }
		) {
			childImageSharp {
				fluid(maxWidth: 960) {
					...GatsbyImageSharpFluid
				}
			}
		}

		fullLogo: file(
			sourceInstanceName: { eq: "images" }
			relativePath: { eq: "kenyon-collegian-logo/logo-full.svg" }
		) {
			publicURL
		}

		variations: allFile(
			filter: {
				sourceInstanceName: { eq: "images" }
				relativePath: { glob: "kenyon-collegian-logo/secondary-*.png" }
			}
			sort: { fields: name }
		) {
			edges {
				node {
					name
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}

		currentUse: file(
			sourceInstanceName: { eq: "images" }
			relativePath: { eq: "kenyon-collegian-logo/current-use.png" }
		) {
			childImageSharp {
				fluid(maxWidth: 2560) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
