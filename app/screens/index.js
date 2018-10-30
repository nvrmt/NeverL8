import {Navigation} from "react-native-navigation";

// Screens
import Splash from './LaunchScreen';
import Home from './HomeScreen';

export const LAUNCH_SCREEN = 'neverl8.LaunchScreen';
export const HOME_SCREEN = 'neverl8.HomeScreen';

export const Screens = new Map();
Screens.set(LAUNCH_SCREEN, Splash);
Screens.set(HOME_SCREEN, Home);

export const startApp = () => {

	return Navigation.setRoot({
		root: {
			component: {name: LAUNCH_SCREEN}
		}
	});
};
