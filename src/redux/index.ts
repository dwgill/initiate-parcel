import { Reducer, State } from './types';
import * as newGuy from './reducers/newGuy';
import * as deleteGuy from './reducers/deleteGuy';
import * as editGuy from './reducers/editGuy';

export const coreReducer: Reducer = (state, action) => {
    switch (action.type) {
        case newGuy.type:
            return newGuy.reducer(state, action);
        case deleteGuy.type:
            return deleteGuy.reducer(state, action);
        case editGuy.type:
            return editGuy.reducer(state, action);
        default:
            return defaultCase(state, action);
    }
};

const defaultCase = (state: State, _: never) => state;
