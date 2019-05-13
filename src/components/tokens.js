class SizeUnit {
  constructor(pxValue) {
    this.value = pxValue;
  }

  toString() {
    return `${this.value / 16}rem`;
  }

  add(unit) {
    let newValue = this.value;
    if (typeof unit === "number") {
      newValue += unit;
    } else {
      newValue += unit.value;
    }
    return new SizeUnit(newValue);
  }

  times(factor = 1) {
    if (factor === 1) {
      return this;
    }

    return new SizeUnit(this.value * factor);
  }

  get asPx() {
    return `${this.value}px`;
  }
}

class Shadow {
  constructor({
    inset = false,
    x = 0,
    y = 0,
    blur = 0,
    spread = 0,
    color = "#000"
  } = {}) {
    this.inset = inset;
    this.x = x;
    this.y = y;
    this.spread = spread;
    this.blur = blur;
    this.color = color;
  }

  toString() {
    return `${this.inset ? "inset" : ""} ${this.x} ${this.y} ${this.blur} ${
      this.spread
    } ${this.color}`.trim();
  }

  get asDrop() {
    return `drop-shadow(${this.x} ${this.y} ${this.blur} ${this.color})`;
  }
}

class ShadowList {
  constructor(...shadows) {
    this.shadows = shadows;
  }

  toString() {
    return this.shadows.join(", ");
  }

  get asDrop() {
    return this.shadows.map(s => s.asDrop).join(" ");
  }
}

function interpretColor(color) {
  if (typeof color === "string") {
    // color is a hex code
    return {
      r: parseInt(color.slice(1, 3), 16),
      g: parseInt(color.slice(3, 5), 16),
      b: parseInt(color.slice(5, 7), 16),
      a: 1
    };
  }

  if (Array.isArray(color)) {
    // color is an array of rgba components
    return {
      r: color[0],
      g: color[1],
      b: color[2],
      a: color[3] || 1
    };
  }

  throw new Error(`${JSON.parse(color)} is not a valid color value`);
}

class Color {
  constructor(color = "#ffffff") {
    const { r, g, b, a } = interpretColor(color);
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }

  transparentize(alpha) {
    return new Color([this.r, this.g, this.b, alpha]);
  }

  toString() {
    return this.a === 1 ? this.asHex : this.asRgba;
  }

  get asHex() {
    const [r, g, b] = [this.r, this.g, this.b].map(c => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    });

    return `#${r}${g}${b}`;
  }

  get asRgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
}

const spacingScale = {
  "2xs": 4,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 32,
  "2xl": 48,
  "3xl": 64,
  "4xl": 96,
  "5xl": 144
};
export const spacing = Object.keys(spacingScale).reduce((map, label) => {
  map[label] = new SizeUnit(spacingScale[label]);
  return map;
}, {});

export const maxWidths = {
  narrower: "42rem",
  narrow: "66rem",
  normal: "78rem",
  wide: "80rem"
};

const textScale = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  "2xl": 32,
  "3xl": 48,
  "4xl": 80,
  "5xl": 96
};
export const textSizes = Object.keys(textScale).reduce((map, label) => {
  map[label] = new SizeUnit(textScale[label]);
  return map;
}, {});

export const leading = {
  none: 1,
  tight: 1.25,
  normal: 1.5,
  double: 2
};

export const tracking = {
  tight: "-0.05em",
  none: "0em",
  wide: "0.05em"
};

export const measure = {
  normal: "32em"
};

const serifFamily = "Spectral, Georgia, Times, serif";
const sansFamily =
  "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";

const monoFamily = "Inconsolata, Consolas, 'Courier New', Courier, monospace";

export const fontFamilies = {
  body: serifFamily,
  heading: sansFamily,
  mono: monoFamily
};

export const colors = {
  // Greyscale
  black: new Color("#090b0c"),
  "grey-darkest": new Color("#3d4852"),
  "grey-darker": new Color("#606f7b"),
  "grey-dark": new Color("#8795a1"),
  grey: new Color("#b8c2cc"),
  "grey-light": new Color("#dae1e7"),
  "grey-lighter": new Color("#f1f5f8"),
  "grey-lightest": new Color("#f8fafc"),
  white: new Color("#ffffff"),
  // Brand colors
  purple: new Color("#5B25EF"),
  "purple-light": new Color("#7344F4"),
  "purple-lightest": new Color("#D4C8F4"),
  "orange-darkest": new Color("#2d1a02"),
  "orange-darker": new Color("#87500a"),
  orange: new Color("#F08700"),
  "yellow-dark": new Color("#e4a944"),
  yellow: new Color("#FFD471"),
  "yellow-light": new Color("#fddc92"),
  blue: new Color("#8CB6F2")
};

export const shadows = {
  sm: new Shadow({ y: "2px", blur: "4px", color: "rgba(0,0,0,0.10)" }),
  md: new ShadowList(
    new Shadow({ y: "4px", blur: "8px", color: "rgba(0,0,0,0.12)" }),
    new Shadow({ y: "2px", blur: "4px", color: "rgba(0,0,0,0.08)" })
  ),
  lg: new ShadowList(
    new Shadow({ y: "15px", blur: "30px", color: "rgba(0,0,0,0.11)" }),
    new Shadow({ y: "5px", blur: "15px", color: "rgba(0,0,0,0.08)" })
  ),
  inner: new Shadow({
    inset: true,
    y: "2px",
    blur: "4px",
    color: "rgba(0,0,0,0.06)"
  })
};

const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};
export const screens = Object.keys(breakpoints).reduce((map, label) => {
  map[label] = `(min-width: ${breakpoints[label] / 16}em)`;
  return map;
}, {});

export default {
  screens,
  colors,
  spacing,
  textSizes,
  fontFamilies,
  leading,
  tracking,
  maxWidths
};
