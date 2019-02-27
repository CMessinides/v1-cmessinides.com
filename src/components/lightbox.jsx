import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import { X, ArrowRight, ArrowLeft } from "react-feather";
import FocusTrap from "focus-trap-react/dist/focus-trap-react";

const Lightbox = ({
  slide,
  isOpen,
  alertMsg,
  closeLightbox,
  goToPrevSlide,
  goToNextSlide,
  onKeyUp,
  slideRef
}) => {
  return (
    <FocusTrap active={isOpen}>
      <div
        id="lightbox"
        className={classnames("lightbox", { "lightbox--closed": !isOpen })}
        role="dialog"
        aria-label={slide && slide.label}
        onKeyUp={onKeyUp}
      >
        <div className="lightbox__alert visually-hidden" role="alert">
          {alertMsg}
        </div>

        <div className="lightbox__top-bar">
          <button
            className="btn btn--round btn--white lightbox__button lightbox__button--close"
            type="button"
            aria-controls="lightbox"
            aria-expanded={isOpen}
            aria-label="Close lightbox"
            onClick={closeLightbox}
          >
            <X className="btn__icon icon" aria-hidden="true" size="16" />
          </button>
        </div>

        {/* Render the provided slide node in a focusable container */}
        <div
          className="lightbox__slide"
          ref={slideRef}
          role="group"
          tabIndex="-1"
          style={{ outline: "none" }}
        >
          {slide && slide.node}
        </div>

        <div className="lightbox__bottom-bar">
          {slide && (
            <p className="lightbox__counter">
              <span className="visually-hidden">Slide</span> {slide.position} of{" "}
              {slide.total}
            </p>
          )}
          {/* If this isn't the first slide, render a button to go back to the previous slide */}
          {slide && slide.position !== 1 && (
            <button
              className="btn btn--round btn--white lightbox__button lightbox__button--prev"
              type="button"
              aria-controls="lightbox"
              aria-label="Go to previous slide"
              onClick={goToPrevSlide}
            >
              <ArrowLeft
                className="btn__icon icon"
                aria-hidden="true"
                size="16"
              />
            </button>
          )}

          {/* If this isn't the last slide, render a button to advance to the next slide */}
          {slide && slide.position !== slide.total && (
            <button
              className="btn btn--round btn--white lightbox__button lightbox__button--next"
              type="button"
              aria-controls="lightbox"
              aria-label="Go to next slide"
              onClick={goToNextSlide}
            >
              <ArrowRight
                className="btn__icon icon"
                aria-hidden="true"
                size="16"
              />
            </button>
          )}
        </div>
      </div>
    </FocusTrap>
  );
};

/** @type {SlideshowMap} */
const DEFAULT_SLIDESHOWS = {};

/** @type {Cursor} */
const DEFAULT_CURSOR = {
  slideshow: null,
  index: 0
};

/** @type {(React.RefObject|null)} */
const DEFAULT_RETURN_REF = null;

const DEFAULT_CONTEXT = {
  slideshows: DEFAULT_SLIDESHOWS,
  isOpen: false,
  openLightbox() {},
  addSlideshowToLightbox() {}
};

export const LightboxContext = React.createContext(DEFAULT_CONTEXT);

const LightboxProvider = ({ children }) => {
  const [isOpen, updateIsOpen] = React.useState(DEFAULT_CONTEXT.isOpen);
  const [cursor, updateCursor] = React.useState(DEFAULT_CURSOR);
  const [slideshows, updateSlideshows] = React.useState(DEFAULT_SLIDESHOWS);
  const [returnRef, updateReturnRef] = React.useState(DEFAULT_RETURN_REF);
  const [shouldFocusSlide, updateShouldFocusSlide] = React.useState(false);
  const [alertMsg, updateAlertMsg] = React.useState("");

  const slideRef = React.useRef();

  // When the lightbox is open, prevent scroll on the root element
  React.useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "scroll";
    }
  }, [isOpen]);

  // When the lightbox has closed, return focus to the initiating element.
  // If there is no initiating element, focus on the <body> element.
  React.useEffect(() => {
    if (!isOpen) {
      if (
        returnRef &&
        returnRef.current &&
        typeof returnRef.current.focus === "function"
      ) {
        returnRef.current.focus();
      } else {
        document.body.focus();
      }
    }
  }, [isOpen]);

  // When the lightbox is open and the slide element needs focus, focus on it.
  React.useEffect(() => {
    if (isOpen && shouldFocusSlide) {
      slideRef.current.focus();
      updateShouldFocusSlide(false);
    }
  }, [shouldFocusSlide]);

  const currentSlide = cursor.slideshow && {
    ...slideshows[cursor.slideshow][cursor.index],
    position: cursor.index + 1,
    total: slideshows[cursor.slideshow].length
  };

  /**
   * Opens the lightbox
   * @param {string} slideshow - The key of the slideshow to open
   * @param {number} [index=0] - The index of the slide to open to (defaults to 0)
   * @param {(React.RefObject|null)} [returnRef=null] - A React ref that refers to the element that focus should be returned to once the lightbox has closed. If no ref is provided, the <body> element is focused.
   */
  const openLightbox = (slideshow, index = 0, returnRef = null) => {
    updateIsOpen(true);
    updateCursor({
      slideshow,
      index
    });
    updateReturnRef(returnRef);
    updateShouldFocusSlide(true);
    updateAlertMsg(`Lightbox is open.`);
  };

  const advanceSlidesBy = (amount = 0, onDone) => {
    if (amount === 0) return;

    updateCursor(cursor => {
      return {
        ...cursor,
        index: cursor.index + amount
      };
    });

    updateShouldFocusSlide(true);

    if (typeof onDone === "function") onDone();
  };

  const goToPrevSlide = () => {
    if (currentSlide && currentSlide.position === 1) return;

    advanceSlidesBy(-1, () =>
      updateAlertMsg("Lightbox has switched to previous slide.")
    );
  };

  const goToNextSlide = () => {
    if (currentSlide && currentSlide.position === currentSlide.total) return;

    advanceSlidesBy(1, () =>
      updateAlertMsg("Lightbox has switched to next slide.")
    );
  };

  /**
   * Closes the lightbox
   */
  const closeLightbox = () => {
    updateIsOpen(false);
    updateAlertMsg("Lightbox is closed.");
  };

  const handleKeyUp = e => {
    switch (e.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        goToPrevSlide();
        break;
      case "ArrowRight":
        goToNextSlide();
        break;
      default:
        break;
    }
  };

  /**
   * Adds a slideshow that can be displayed in the lightbox
   * @param {string} key - A unique key for this set of slides
   * @param {Slide[]} slides - The slides for this slideshow
   */
  const addSlideshowToLightbox = (key, slides = []) => {
    updateSlideshows(slideshows => {
      return {
        ...slideshows,
        [key]: slides
      };
    });
  };

  const value = {
    slideshows,
    isOpen,
    openLightbox,
    addSlideshowToLightbox
  };

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <Lightbox
        slide={currentSlide}
        isOpen={isOpen}
        alertMsg={alertMsg}
        closeLightbox={closeLightbox}
        goToPrevSlide={goToPrevSlide}
        goToNextSlide={goToNextSlide}
        onKeyUp={handleKeyUp}
        slideRef={slideRef}
      />
    </LightboxContext.Provider>
  );
};

LightboxProvider.propTypes = {
  children: PropTypes.node
};

export default LightboxProvider;

/**
 * A slide for display in the lightbox
 * @typedef {Object} Slide
 * @property {string} label - A label describing this slide for screen readers
 * @property {React.ReactNode} node - A React node that can be rendered in the lightbox
 */

/**
 * A collection of slideshows
 * @typedef {Object.<string, Slide[]>} SlideshowMap
 */

/**
 * Marks the current slideshow and slide displayed in the lightbox
 * @typedef {Object} Cursor
 * @property {(string|null)} slideshow - The key of the current slideshow
 * @property {number} index - The index of the current slide
 */
