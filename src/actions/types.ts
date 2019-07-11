import { type as deleteGuy, DeleteGuyAction } from './deleteGuy';
import { type as editGuy, EditGuyAction } from './editGuy';
import { type as newGuy, NewGuyAction } from './newGuy';
import { type as setAutoSort, SetAutoSortAction } from './setAutoSort';
import { type as setGuyIndex, SetGuyIndexAction } from './setGuyIndex';
import { type as nextGuy, NextGuyAction } from './nextGuy';
import { GuyProp } from '~redux/types';

export type ActionCreatorMap = {
    [deleteGuy]: DeleteGuyAction;
    [editGuy]: EditGuyAction<GuyProp>;
    [newGuy]: NewGuyAction;
    [setAutoSort]: SetAutoSortAction;
    [setGuyIndex]: SetGuyIndexAction;
    [nextGuy]: NextGuyAction;
};

export type ActionType = keyof ActionCreatorMap;
export type Action = ActionCreatorMap[keyof ActionCreatorMap];
export type ActionForType<A extends ActionType> = ActionCreatorMap[A];
