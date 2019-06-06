import { GuyId } from '~redux/types';

export const type = 'DELETE_GUY';
export interface DeleteGuyAction {
    type: typeof type;
    payload: GuyId;
}

export const create = (id: GuyId): DeleteGuyAction => ({
    type,
    payload: id,
});

export default create;
