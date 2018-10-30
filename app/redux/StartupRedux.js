// @flow
import robodux from 'robodux';
import { createStore, combineReducers, Action } from 'redux';

interface User {
	name: string;
}

interface State {
	user: User;
	counter: number;
}
interface UserActions {
	setUserName: (payload: string) => Action;
}

const user = robodux<User, UserActions, State>({
	slice: 'user', // slice is optional could be blank ''
	initialState: { name: '' },
	actions: {
		setUserName: (state: User, payload: string) => {
			state.name = payload; // mutate the state all you want with immer
		},
	}
});

const reducer = combineReducers({
	user: user.reducer,
});

const store = createStore(reducer);

store.dispatch(user.actions.setUserName('eric'));
const state = store.getState();
console.log(user.selectors.getUser(state));
