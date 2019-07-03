import { applyMiddleware, compose as reduxCompose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import { coreReducer } from '~redux/reducers';
import { Action, initialState, RootState } from '~redux/types';
import * as reduxLocalStorageSimple from 'redux-localstorage-simple';

let composeEnhancers: typeof composeWithDevTools = reduxCompose;

if (process.env.NODE_ENV === 'development') {
    composeEnhancers = composeWithDevTools;
}

const reduxLocalStorageNamespace = 'initiate_application_state';

// prettier-ignore
const middlewareEnhancer = applyMiddleware(
    thunk as ThunkMiddleware<RootState, Action>,
    reduxLocalStorageSimple.save({
        namespace: reduxLocalStorageNamespace,
        debounce: 1000,
    }),
);

const composedStoreEnhancers = composeEnhancers(middlewareEnhancer);

const preloadedState = reduxLocalStorageSimple.load({
    namespace: reduxLocalStorageNamespace,
    preloadedState: initialState,
});

const store = createStore(coreReducer, preloadedState, composedStoreEnhancers);

export type InitiateStore = typeof store;

export default store;
