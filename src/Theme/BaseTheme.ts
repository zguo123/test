/**
 * UTM CFSA Component Library
 *
 * This contains the theme file for the base theme.
 * @author Zhaoyu Guo
 */

import { extendTheme } from "@chakra-ui/react";
import Button from "./Buttons";
import IconButton from "./IconButtons";

export const theme = extendTheme({
  config: { initialColorMode: "light", useSystemColorMode: false },
  fonts: {
    heading: "Poppins",
    body: "Poppins",
  },
  colors: {
    primary: {
      100: "#5fbeff",
      200: "#55abeb",
      300: "#4a98d7",
      400: "#4086c3",
      500: "#0F51A4",
      600: "#346ead",
      700: "#21518a",
      800: "#164178",
      900: "#093166",
      default: "#0F51A4",
      dark: "#093166",
      light: "#5FBEFF",
      bg: "#F7F2FF",
      darkMode: "#32ACFF",
    },
    secondary: {
      100: "#e5ebfe",
      200: "#cbd5ec",
      300: "#b2c0da",
      400: "#99abc9",
      500: "#3C9BDB",
      600: "#6782a6",
      700: "#4d6f96",
      800: "#325c85",
      900: "#0a4a75",
      default: "#3C9BDB",
      dark: "#0A4A75",
      light: "#E5EBFE",
      bg: "#F2F5FF",
      darkMode: "#57BBFF",
    },
    error: {
      100: "#ff7878",
      200: "#ee6a68",
      300: "#dd5c59",
      400: "#cc4f4a",
      500: "#b50404",
      600: "#a65753",
      700: "#992520",
      800: "#881612",
      900: "#780101",
      default: "#b50404",
      dark: "#780101",
      light: "#FF7878",
      bg: "#FFE5E5",
      darkMode: "#FF7878",
    },
    success: {
      100: "#f2fff9",
      200: "#d9f2e2",
      300: "#c1e6cc",
      400: "#a8d9b6",
      500: "#0aab5b",
      600: "#76c08b",
      700: "#5bb376",
      800: "#3ba661",
      900: "#00994d",
      default: "#0aab5b",
      dark: "#00994D",
      light: "#F2FFF9",
      bg: "#E5FFF2",
      darkMode: "#4CFFA6",
    },
    warning: {
      100: "#ffcd42",
      200: "#e9bb39",
      300: "#d4a930",
      400: "#bf9728",
      500: "#977517",
      600: "#a87c00",
      700: "#84640e",
      800: "#705406",
      900: "#5e4500",
      default: "#a87c00",
      dark: "#5e4500",
      light: "#ffcd42",
      bg: "#F2F294",
      darkMode: "#F2F294",
    },
  },
  components: {
    Button,
    IconButton,
  },
});
