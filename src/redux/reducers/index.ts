import { Reducer, RootState, initialState } from '~redux/types';
import * as newGuy from './newGuy';
import * as deleteGuy from './deleteGuy';
import * as editGuy from './editGuy';

export const coreReducer: Reducer = (state = initialState, action) => {
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

const defaultCase = (state: RootState, _: never) => state;
