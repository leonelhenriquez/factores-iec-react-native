/*
 * Config File Theme
 */

import { configureFonts, DefaultTheme } from 'react-native-paper';

const fontConfig = {
	default: {
		regular: {
			fontFamily: 'Poppins-Regular',
			fontWeight: 'normal',
		},
		medium: {
			fontFamily: 'Poppins-Bold',
			fontWeight: 'normal',
		},
		light: {
			fontFamily: 'Poppins-Light',
			fontWeight: 'normal',
		},
		thin: {
			fontFamily: 'Poppins-Thin',
			fontWeight: 'normal',
		},
	},
};

const AppTheme = {
	theme: {
		...DefaultTheme,
		dark: true,
		roundness: 25,
		colors: {
			...DefaultTheme.colors,
			primary: '#3F51B5',
			accent: '#3F51B5',
			background: '#34495E',
			text: '#FFFFFF',
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
		colors: {
			...DefaultTheme.colors,
			primary: '#F5F5F5',
			accent: '#F5F5F5',
			background: '#33475b',
			text: '#F5F5F5',
			placeholder: '#E0E0E0',
			error: '#F44336',
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
      primary: "#FFFFFF",
      accent: "#FFFFFF",
      background: "#33475B",
      text: "#FFFFFF",
      placeholder: "#FFFFFF",
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
