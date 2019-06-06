import { Reducer, RootState, initialState, GuyProp } from '~redux/types';
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
            return unacceptableDefault(state, action);
    }
};

const acceptableDefault = (state: RootState, _: any) => state;
const unacceptableDefault = (state: RootState, _: never) => state;
