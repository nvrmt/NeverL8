/** @format */
import { Navigation } from 'react-native-navigation';
import { Screens, startApp } from './screens/index';

Screens.forEach((screen, key) => {
	Navigation.registerComponent(key, () => screen);
});

Navigation.events().registerAppLaunchedListener(() => {
	startApp();
});
