import { initialState, Reducer, RootState } from '~redux/types';
import * as deleteGuy from './deleteGuy';
import * as editGuy from './editGuy';
import * as newGuy from './newGuy';
import * as setAutoSort from './setAutoSort';
import * as setGuyIndex from './setGuyIndex';
import * as nextGuy from './nextGuy';

export const coreReducer: Reducer = (state = initialState, action) => {
    switch (action.type) {
        case newGuy.type:
            return newGuy.reducer(state, action);
        case deleteGuy.type:
            return deleteGuy.reducer(state, action);
        case editGuy.type:
            return editGuy.reducer(state, action);
        case setAutoSort.type:
            return setAutoSort.reducer(state, action);
        case setGuyIndex.type:
            return setGuyIndex.reducer(state, action);
        case nextGuy.type:
            return nextGuy.reducer(state, action);
        default:
            return unacceptableDefault(state, action);
    }
};

const acceptableDefault = (state: RootState, _: any) => state;
const unacceptableDefault = (state: RootState, _: never) => state;
