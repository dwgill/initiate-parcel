import { Reducer as ReduxReducer } from 'redux';
import { Action } from '~actions/types';
import { InitiateStore } from './store';
import { ThunkDispatch, ThunkAction as RawThunkAction } from 'redux-thunk';
import { TypedUseSelectorHook } from 'react-redux';
import { PickByValue } from 'utility-types';

export { Action, ActionType as ActionTypes } from '~actions/types';

export type Dispatch = InitiateStore['dispatch'];
export type UseSelector = TypedUseSelectorHook<RootState>;

export type ThunkAction<R = void> = Dispatch extends ThunkDispatch<
    infer S,
    infer E,
    infer A
>
    ? RawThunkAction<R, S, E, A>
    : never;

type Dict<V> = {
    [key: string]: V;
};

export interface RootState {
    guyProperties: {
        /** record of all the initiative rolls of the combatants. */
        init: Dict<number | null>;
        /** Dict<ll the armor classes of the combatants. */
        ac: Dict<number | null>;
        /** Dict<he HP of the combatants. */
        hp: Dict<number | null>;
        /** Dict<he combatants' names. */
        name: Dict<string>;
        /** Dict<otes on each combatant. */
        note: Dict<string>;
    };
    guyOrdering: string[];
    settings: {
        autoSort: boolean;
    };
}

// This type represents the official "name" of a property of a guy
export type GuyProp = keyof RootState['guyProperties'];

type GuyPropWithVal<V> = keyof PickByValue<RootState['guyProperties'], Dict<V>>;
export type NumGuyProp = GuyPropWithVal<number | null>;
export type StrGuyProp = GuyPropWithVal<string>;

// This type represents the type of a value corresponding to a given guy prop.
// e.g. GuyPropVal<'note'> is 'string' because a note must be a string
// e.g. GuyPropVal<'init'> is number | null since initative is a nullable number
export type GuyPropVal<
    P extends GuyProp
> = RootState['guyProperties'][P][string];
// The type of key corresponding to a given prop

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
 * }
 * ```
 */
export type Guy = { [P in GuyProp]: GuyPropVal<P> };

export type Reducer = ReduxReducer<RootState, Action>;
export type Transducer = (reducer: Reducer) => Reducer;
export type Transformer = (state: RootState) => RootState;

export const initialState: RootState = {
    guyProperties: {
        ac: {},
        hp: {},
        init: {},
        name: {},
        note: {},
    },
    guyOrdering: [],
    settings: {
        autoSort: true,
    },
};

// A set of all the possible guy property names.
export const allGuyProps = Object.keys(initialState.guyProperties) as [GuyProp];
