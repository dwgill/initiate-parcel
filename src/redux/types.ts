import { Actions } from '../actions/types';

export type GuyId = string;

export type State = {
    init: Record<GuyId, number | null>
    ac: Record<GuyId, number | null>
    hp: Record<GuyId, number | null>
    name: Record<GuyId, string>
    note: Record<GuyId, string>
    bias: Record<GuyId, number>
}

export type GuyProp = keyof State;
export type GuyPropVal<P extends GuyProp> = State[P][GuyId];

export type Guy = {
    init: number | null
    ac: number | null
    hp: number | null
    name: string
    note: string
    bias: number
}

export type Reducer = (state: State, action: Actions[keyof Actions]) => State;
export type Transducer = (reducer: Reducer) => Reducer;
export type Transformer = (state: State) => State;

export const initialState: State = {
    ac: {},
    bias: {},
    hp: {},
    init: {},
    name: {},
    note: {},
};