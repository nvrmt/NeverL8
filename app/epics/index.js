import {combineEpics} from 'redux-observable';
import {StartupEpic} from './StartupEpic';

export const rootEpic = combineEpics(
	StartupEpic
);