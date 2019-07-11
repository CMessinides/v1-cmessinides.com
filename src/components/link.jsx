import React from "react";
import styled, { css } from "styled-components";
import { Link as GatsbyLink } from "gatsby";
import { colors } from "./tokens";

const sharedLinkStyles = css`
	color: ${colors.purple};
	text-decoration: none;
	border-bottom: 1px ${colors.purple.transparentize(0.33)} solid;

	&:hover,
	&:focus {
		border-bottom-color: ${colors.purple};
	}
`;

const ExternalLink = styled.a.attrs({
	rel: "noreferrer noopener",
	target: "_blank"
})`
	${sharedLinkStyles}
`;

const InternalLink = styled(GatsbyLink)`
	${sharedLinkStyles};
`;

const INTERNAL_LINK_REGEX = /^\/(?!\/)/;
export default function Link({ to, children, ...props } = {}) {
	const internal = INTERNAL_LINK_REGEX.test(to);

	return internal ? (
		<InternalLink to={to} {...props}>
			{children}
		</InternalLink>
	) : (
		<ExternalLink href={to} {...props}>
			{children}
		</ExternalLink>
	);
}
