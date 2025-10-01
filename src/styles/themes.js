// src/styles/themes.js
const lightTheme = {
  name: "light",
  background: "#ffffff",
  backgroundOpacity: "rgba(255, 255, 255, 0.85)",
  textPrimary: "#333333",
  textSecondary: "#999999",
  textLink: "#007bff",
  border: "#012622",
  borderHover: "#5eead4",
  buttonBackground: "#012622",
  buttonColor: "#5eead4",
  buttonHover: "#5eead4",
  inputBackground: "#ffffff",
  inputText: "#333333",
  inputBorder: "#012622",
  inputBorderHover: "#5eead4",
  shadow: "rgba(0,0,0,0.3)",
  overlay: "rgba(0,0,0,0.3)"
};

const darkTheme = {
  name: "dark",
  background: "#333333",
  backgroundOpacity: "rgba(51, 51, 51, 0.85)", // usado nos containers
  textPrimary: "#ffffff",
  textSecondary: "#cccccc",
  textLink: "#5eead4",
  border: "#548687",
  borderHover: "#5eead4",
  buttonBackground: "#548687",
  buttonColor: "#333333",
  buttonHover: "#5eead4",
  inputBackground: "#333333",
  inputText: "#ffffff",
  inputBorder: "#548687",
  inputBorderHover: "#5eead4",
  shadow: "rgba(255,255,255,0.1)",
  overlay: "rgba(0,0,0,0.7)"
};

export { lightTheme, darkTheme };

/*

USANDO A NOMENCLATURA DAS CORES DIRETAMENTE (NÃO RECOMENDADO)

// src/styles/themes.js
import colors from "./colors.js";

const lightTheme = {
  name: "light",
  background: colors.white,
  backgroundOpacity: "rgba(255, 255, 255, 0.85)",
  textPrimary: colors.grayDark,
  textSecondary: colors.grayMedium,
  textLink: colors.link,
  border: colors.tealDark,
  borderHover: colors.tealLight,
  buttonBackground: colors.tealDark,
  buttonColor: colors.tealLight,
  buttonHover: colors.tealLight,
  inputBackground: colors.white,
  inputText: colors.grayDark,
  inputBorder: colors.tealDark,
  inputBorderHover: colors.tealLight,
  shadow: "rgba(0,0,0,0.3)",
  overlay: "rgba(0,0,0,0.3)"
};

const darkTheme = {
  name: "dark",
  background: colors.grayDark,
  backgroundOpacity: "rgba(51, 51, 51, 0.85)",
  textPrimary: colors.white,
  textSecondary: colors.grayLight,
  textLink: colors.tealLight,
  border: colors.tealMedium,
  borderHover: colors.tealLight,
  buttonBackground: colors.tealMedium,
  buttonColor: colors.grayDark,
  buttonHover: colors.tealLight,
  inputBackground: colors.grayDark,
  inputText: colors.white,
  inputBorder: colors.tealMedium,
  inputBorderHover: colors.tealLight,
  shadow: "rgba(255,255,255,0.1)",
  overlay: "rgba(0,0,0,0.7)"
};

export { lightTheme, darkTheme };
*/
