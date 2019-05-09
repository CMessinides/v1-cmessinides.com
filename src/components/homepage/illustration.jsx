import React from "react";
import ProjectIllustration from "../project-illustration";

export const Circles = ({ children }) => {
  return (
    <>
      <ProjectIllustration.Transformation
        top="50%"
        left="50%"
        translateX="-50%"
        translateY="-50%"
      >
        <ProjectIllustration.Circle shadow="md" />
      </ProjectIllustration.Transformation>
      {children}
    </>
  );
};

export const Circle = ({
  size,
  offsetX = 0,
  offsetY = 0,
  anchorX = "left",
  anchorY = "top",
  shadow = "md",
  order,
  ...otherProps
}) => {
  let translateX = -50;
  let translateY = -50;

  if (anchorX === "right") {
    translateX *= -1;
  }

  if (anchorY === "bottom") {
    translateY *= -1;
  }
  return (
    <ProjectIllustration.Transformation
      height={`${size}%`}
      top={anchorY === "top" && `${offsetY}%`}
      right={anchorX === "right" && `${offsetX}%`}
      bottom={anchorY === "bottom" && `${offsetY}%`}
      left={anchorX === "left" && `${offsetX}%`}
      translateX={translateX}
      translateY={translateY}
      order={order}
    >
      <ProjectIllustration.Circle shadow={shadow} {...otherProps} />
    </ProjectIllustration.Transformation>
  );
};

export default {
  Circle,
  Circles
};
