import * as deleteGuy from './deleteGuy'
import * as newGuy from './newGuy'
import * as editGuy from './editGuy';

export type Actions = {
    [deleteGuy.type]: deleteGuy.DeleteGuyAction
    [newGuy.type]: newGuy.NewGuyAction
    [editGuy.type]: editGuy.EditGuyAction
}
