import React from 'react';
import {Navigation} from "react-native-navigation";

// Screens
import Launch from './LaunchScreen';
import Home from './HomeScreen';
import _Map from './MapScreen';
import Icon from "react-native-vector-icons/FontAwesome";

export const LAUNCH_SCREEN = 'neverl8.LaunchScreen';
export const HOME_SCREEN = 'neverl8.HomeScreen';
export const MAP_SCREEN = 'neverl8.MapScreen';

export const Screens = new Map();
Screens.set(LAUNCH_SCREEN, Launch);
Screens.set(HOME_SCREEN, Home);
Screens.set(MAP_SCREEN, _Map);

export const startApp = () => {

	return Navigation.setRoot({
		root: {
			component: {
				name: LAUNCH_SCREEN,
			}
		}
	});
};

export async function mainScreen() {

	let homeIcon = await getIcon("home");
	let mapIcon = await getIcon("map");

	return Navigation.setRoot({
		root: {
			bottomTabs: {
				id: 'BottomTabsId',
				children: [
					{
						component: {
							name: HOME_SCREEN,
							options: {
								bottomTab: {
									fontSize: 12,
									text: 'Home',
									icon: homeIcon
								}
							}
						},
					},
					{
						component: {
							name: MAP_SCREEN,
							options: {
								bottomTab: {
									text: 'Live Map',
									fontSize: 12,
									icon: mapIcon
								}
							}
						},
					},
				],
			}
		}
	})
}

async function getIcon(name) {
	return await Icon.getImageSource(name);
}

//TODO Install reactotron, rxjs, redux observables