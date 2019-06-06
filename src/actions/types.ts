import { GuyProp } from '~redux/types';
import * as deleteGuy from './deleteGuy';
import * as editGuy from './editGuy';
import * as newGuy from './newGuy';

export type Actions = {
    [deleteGuy.type]: deleteGuy.DeleteGuyAction;
    [newGuy.type]: newGuy.NewGuyAction;
    [editGuy.type]: editGuy.EditGuyAction<GuyProp>;
};

export type ActionTypes = keyof Actions;
export type Action = Actions[keyof Actions];
