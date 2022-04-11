import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import allReducers from './redusers/index';
import { composeWithDevTools } from 'redux-devtools-extension';
//import { sagaWatcher } from './saga/sagas';

const saga = createSagaMiddleware();

export const store = createStore(
  allReducers,
  compose(applyMiddleware(saga), composeWithDevTools())
);

//saga.run(sagaWatcher);
