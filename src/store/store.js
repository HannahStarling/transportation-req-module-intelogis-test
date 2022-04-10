import { createStore } from 'redux';
import allReducers from './redusers/index';
import { composeWithDevTools } from 'redux-devtools-extension';

export const store = createStore(allReducers, composeWithDevTools());
