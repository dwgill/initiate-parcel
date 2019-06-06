import { Action } from '~actions/types';
import { Reducer as ReduxReducer } from 'redux';

export { Action, ActionTypes } from '~actions/types';

export type GuyId = string;

export type RootState = {
    init: Record<GuyId, number | null>;
    ac: Record<GuyId, number | null>;
    hp: Record<GuyId, number | null>;
    name: Record<GuyId, string>;
    note: Record<GuyId, string>;
    bias: Record<GuyId, number>;
};

// This type represents the official "name" of a property of a guy
export type GuyProp = keyof RootState;
// This type represents the type of a value corresponding to a given guy prop.
// e.g. GuyPropVal<'note'> is 'string' because a note must be a string
// e.g. GuyPropVal<'init'> is number | null since initative is a nullable number
export type GuyPropVal<P extends GuyProp> = RootState[P][GuyId];

export type Guy = {
    init: number | null;
    ac: number | null;
    hp: number | null;
    name: string;
    note: string;
    bias: number;
};

export type Reducer = ReduxReducer<RootState, Action>;
export type Transducer = (reducer: Reducer) => Reducer;
export type Transformer = (state: RootState) => RootState;

export const initialState: RootState = {
    ac: {},
    bias: {},
    hp: {},
    init: {},
    name: {},
    note: {},
};

// A set of all the possible guy property names.
export const allGuyProps = Object.keys(initialState) as [GuyProp];
