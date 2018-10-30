import React from 'react';
import {connect} from 'react-redux';
import {createStackNavigator} from 'react-navigation';
import {reduxifyNavigator, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

import {SCREENS} from "../constants";

const middleware = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
);

const MainStack = createStackNavigator(
    {
        Splash: {screen: SCREENS.SPLASH},
        Auth: {screen: AuthScreen},
        Home: {screen: HomeScreen},
    },
    {
        // Default config for all screens
        headerMode: 'none',
        initialRouteName: 'Splash',
        navigationOptions: {
            headerStyle: null
        }
    }
);

const RootNavigator = createStackNavigator(
    {
        Main: {
            screen: MainStack,
        },
        Modal: {
            screen: null,
        }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        cardStyle:{
            backgroundColor: "transparent",
            opacity: 1
        }
    }
);

const AppWithNavigationState = reduxifyNavigator(RootNavigator, 'root');

const mapStateToProps = state => ({
    state: state.nav,
});

const AppNavigator = connect(mapStateToProps)(AppWithNavigationState);

export {RootNavigator, AppNavigator, middleware};