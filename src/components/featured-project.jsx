import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const themes = {
  teal: {
    bg: "teal",
    text: "white"
  }
};

const defaultAppearance = {
  reverse: false,
  theme: "white"
};

const FeaturedProject = ({ graphic, heading, blurb, appearance = {} }) => {
  appearance = {
    ...defaultAppearance,
    ...appearance
  };

  return (
    <section
      className={classNames(
        "py-xl",
        `bg-${themes[appearance.theme].bg}`,
        `text-${themes[appearance.theme].text}`
      )}
    >
      <div
        className={classNames("container", "md:flex", "items-center", {
          "flex-row-reverse": appearance.reverse
        })}
      >
        <div
          className={classNames("md:w-1/2", "lg:w-3/5", {
            "md:ml-lg-px": appearance.reverse,
            "md:mr-lg-px": !appearance.reverse
          })}
        >
          {graphic}
        </div>
        <div className="md:w-1/2 lg:w-2/5">
          <h2 className="font-sans text-xl">{heading}</h2>
          <p>{blurb}</p>
        </div>
      </div>
    </section>
  );
};

FeaturedProject.propTypes = {
  graphic: PropTypes.node.isRequired,
  heading: PropTypes.node.isRequired,
  blurb: PropTypes.node.isRequired,
  appearance: PropTypes.shape({
    reverse: PropTypes.bool,
    theme: PropTypes.oneOf(["light", "dark"])
  })
};

export default FeaturedProject;
