/**
 * UTM CFSA Component Library
 *
 * This file contains all the styling for the button
 * @author Zhaoyu Guo
 */

const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "400",
    borderRadius: 14, // <-- border radius is same for all variants and sizes
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      px: 4, // <-- px is short for paddingLeft and paddingRight
      py: 3, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    outline: {
      border: "2px solid",
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "lg",
  },
};

export default Button;
