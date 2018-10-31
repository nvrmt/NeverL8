import { Navigation } from 'react-native-navigation';
import { Screens, startApp } from './screens/index';
import {Provider, connect} from 'react-redux';

require('./config');

import createStore from './redux';

const store = createStore();

Screens.forEach((screen, key) => {
	Navigation.registerComponentWithRedux(key, () => screen, Provider, store);
});

Navigation.events().registerAppLaunchedListener(() => {
	startApp();
});

Navigation.events().registerComponentDidAppearListener(({componentId, componentName}) => {
});

Navigation.events().registerComponentDidDisappearListener(({componentId, componentName}) => {

});

Navigation.events().registerCommandListener(({name, params}) => {

});

Navigation.events().registerCommandCompletedListener(({commandId, completionTime, params}) => {

});

Navigation.events().registerBottomTabSelectedListener(({selectedTabIndex, unselectedTabIndex}) => {

});

Navigation.events().registerNavigationButtonPressedListener(({buttonId}) => {

});