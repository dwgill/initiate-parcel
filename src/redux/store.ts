import { applyMiddleware, compose as reduxCompose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { Action } from '~actions/types';
import { coreReducer } from '~redux/reducers';
import { initialState, RootState } from '~redux/types';

let composeEnhancers: typeof composeWithDevTools = reduxCompose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = composeWithDevTools;
}

// prettier-ignore
const middlewareEnhancer = applyMiddleware(
    thunk as ThunkMiddleware<RootState, Action>
);

let composedStoreEnhancers = composeEnhancers(middlewareEnhancer);

const store = createStore(coreReducer, initialState, composedStoreEnhancers);

export type InitiateStore = typeof store;

export default store;
