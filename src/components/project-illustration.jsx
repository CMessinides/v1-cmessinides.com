import React from "react";
import styled, { css } from "styled-components";
import { shadows } from "./tokens";

const ProjectIllustration = styled.div.attrs(() => {
  return {
    "aria-hidden": "true"
  };
})`
  position: relative;
  padding-top: ${props => {
    const [w, h] = (props.aspectRatio || "16:9").split(":");
    const pct = (h / w) * 100;
    return `${pct.toFixed(2)}%`;
  }};
  perspective: 400px;
`;

const hasBoxShadow = css`
  ${props => props.shadow && "box-shadow: " + shadows[props.shadow]};
`;

const hasDropShadow = css`
  ${props => props.shadow && "filter: " + shadows[props.shadow].asDrop}
`;

ProjectIllustration.Transformation = styled.div.attrs(
  ({
    x = 0,
    y = 0,
    z = 0,
    angle = "0deg",
    rotate = "0deg",
    scale = 1,
    translateX = 0,
    translateY = 0
  }) => {
    return {
      transformation: `rotate3d(${[x, y, z, angle].join(
        ", "
      )}) rotate(${rotate}) scale(${scale}) translate(${translateX}, ${translateY})`
    };
  }
)`
  position: absolute;
  ${({ top }) => top !== undefined && "top: " + top};
  ${({ right }) => right !== undefined && "right: " + right};
  ${({ bottom }) => bottom !== undefined && "bottom: " + bottom};
  ${({ left }) => left !== undefined && "left: " + left};
  height: ${props => props.height || "100%"};
  width: ${props => props.width || "auto"};
  transform: ${props => props.transformation};
  transform-origin: ${props => props.origin || "center"};
  transform-style: preserve-3d;
  ${({ order }) => order !== undefined && "z-index: " + order};
`;

ProjectIllustration.Image = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  width: auto;
  user-select: none;
  ${hasBoxShadow}
`;

const PlaceholderImg = styled.img`
  display: block;
  max-width: 100%;
  height: 100%;
  width: auto;
  user-select: none;
  ${hasBoxShadow}
`;

ProjectIllustration.PlaceholderImage = ({
  dimensions,
  collection = 181581,
  ...otherProps
}) => {
  let url = `https://source.unsplash.com/collection/${collection}`;
  let width, height;

  if (Array.isArray(dimensions) && dimensions.length >= 2) {
    [width, height] = dimensions;
    url = url + `/${width}x${height}`;
  }

  return (
    <PlaceholderImg
      alt=""
      src={url}
      height={height !== undefined ? height : false}
      width={width !== undefined ? width : false}
      {...otherProps}
    />
  );
};

const Svg = styled.svg`
  ${({ h }) => h !== undefined && "height: " + h};
  ${({ w }) => w !== undefined && "width: " + w};
  ${hasDropShadow}
`;

const Circle = styled.circle``;

ProjectIllustration.Circle = ({
  radius = 20,
  h = "100%",
  w = "auto",
  shadow,
  svgProps = {},
  ...otherProps
}) => {
  return (
    <Svg
      viewBox={`0 0 ${radius * 2} ${radius * 2}`}
      h={h}
      w={w}
      shadow={shadow}
      {...svgProps}
    >
      <Circle cx={radius} cy={radius} r={radius} {...otherProps} />
    </Svg>
  );
};

export default ProjectIllustration;
