export const type = 'DELETE_GUY';
export interface DeleteGuyAction {
    type: typeof type;
    payload: string;
}

const deleteGuy = (id: string): DeleteGuyAction => ({
    type,
    payload: id,
});

export const create = deleteGuy;

export default deleteGuy;
