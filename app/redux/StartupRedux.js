// @flow
import robodux from 'robodux';
import { createStore, combineReducers, Action } from 'redux';

interface Startup {
	updated: boolean;
}

interface State {
	startup: Startup;
}

interface StartupActions {
	checkForUpdates: (payload: boolean) => Action;
	checkForUpdates_Success: (payload: boolean) => Action;
	checkForUpdates_Failure: (payload: boolean) => Action;
}

export const StartupRedux = robodux<Startup, StartupActions, State>({
	slice: 'startup',
	initialState: {updated: false},
	actions: {
		checkForUpdates: (state: Startup, payload: boolean) => {
		},
		checkForUpdates_Success: (state: Startup, payload: boolean) => {
			state.updated = payload;
		},
		checkForUpdates_Failure: (state: Startup, payload: boolean) => {
			state.updated = payload;
		},
	}
});

// Selectors

export const reducer = StartupRedux.reducer;