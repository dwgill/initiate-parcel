import { GuyId } from '~redux/types';

export const type = 'DELETE_GUY';
export interface DeleteGuyAction {
    type: typeof type;
    payload: GuyId;
}

const deleteGuy = (id: GuyId): DeleteGuyAction => ({
    type,
    payload: id,
});

export const create = deleteGuy;

export default deleteGuy;
