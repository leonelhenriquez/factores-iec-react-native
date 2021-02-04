/*
 * Config File Theme
 */

import { configureFonts, DefaultTheme } from "react-native-paper";

const fontConfig = {
  default: {
    regular: {
      fontFamily: "Poppins-Regular",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "Poppins-Bold",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "Poppins-Light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "Poppins-Thin",
      fontWeight: "normal",
    },
  },
};

const AppTheme = {
  theme: {
    ...DefaultTheme,
    dark: true,
    roundness: 50,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3F51B5",
      accent: "#3F51B5",
      background: "#34495E",
      text: "#FFFFFF",
    },
    fonts: configureFonts(fontConfig),
    animation: {
      scale: 0.5,
    },
  },
  themeInput: {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    mode: "exact",
    colors: {
      ...DefaultTheme.colors,
      primary: "#FFF",
      accent: "#FFF",
      background: "#33475b",
      text: "#FFF",
      placeholder: "#FFF",
    },
    fonts: configureFonts(fontConfig),
    animation: {
      scale: 0.5,
    },
  },

  themeButton: {
    ...DefaultTheme,
    dark: true,
    roundness: 50,
    mode: "exact",
    colors: {
      ...DefaultTheme.colors,
      primary: "#3F51B5",
      accent: "#3F51B5",
      background: "#33475B",
      text: "#3F51B5",
      placeholder: "#FFFFFF",
    },
    fonts: configureFonts(fontConfig),
    animation: {
      scale: 0.5,
    },
  },

  themeSnackbar: {
    ...DefaultTheme,
    dark: true,
    roundness: 4,
    mode: "exact",
    colors: {
      ...DefaultTheme.colors,
      accent: "#FFEBEE",
      surface: "#FFCDD2",
      onSurface: "#D32F2F",
    },
    fonts: configureFonts(fontConfig),
    animation: {
      scale: 0.5,
    },
  },
  statusBar: {
    animated: true,
    backgroundColor: "#3d4da9", // android
    barStyle: "light-content", // 'default', 'light-content', 'dark-content'
    hidden: false,
    translucent: true, // android
    /**
     * More options
     *
     * networkActivityIndicatorVisible: bool // ios
     * showHideTransition: 'fade', 'slide' // ios
     *
     */
  },
};

export default AppTheme;
