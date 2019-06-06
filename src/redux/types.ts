import { Reducer as ReduxReducer } from 'redux';
import { Action } from '~actions/types';
import { InitiateStore } from './store';

export { Action, ActionType as ActionTypes } from '~actions/types';

export type ThunkAction<R> = (
    dispatch: InitiateStore['dispatch'],
    getState: InitiateStore['getState'],
) => R;

export type GuyId = string;

export type RootState = {
    /** record of all the initiative rolls of the combatants. */
    init: Record<GuyId, number | null>;
    /** record of all the armor classes of the combatants. */
    ac: Record<GuyId, number | null>;
    /** record of the HP of the combatants. */
    hp: Record<GuyId, number | null>;
    /** record of the combatants' names. */
    name: Record<GuyId, string>;
    /** record of notes on each combatant. */
    note: Record<GuyId, string>;
    /** record of bias used for breaking ties in initiative. */
    bias: Record<GuyId, number>;
};

// This type represents the official "name" of a property of a guy
export type GuyProp = keyof RootState;
// This type represents the type of a value corresponding to a given guy prop.
// e.g. GuyPropVal<'note'> is 'string' because a note must be a string
// e.g. GuyPropVal<'init'> is number | null since initative is a nullable number
export type GuyPropVal<P extends GuyProp> = RootState[P][GuyPropKey<P>];
// The type of key corresponding to a given prop
export type GuyPropKey<P extends GuyProp> = keyof RootState[P];

/**
 * If you were to collect the properties of a guy into an object,
 * it would look like this:
 * ```
 * {
 *     init: number | null;
 *     ac: number | null;
 *     hp: number | null;
 *     name: string;
 *     note: string;
 *     bias: number;
 * }
 * ```
 */
export type Guy = { [P in GuyProp]: GuyPropVal<P> };

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
