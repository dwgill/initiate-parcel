import { GuyId } from "~redux/types";

export const type = 'DELETE_GUY';
export type Type = typeof type;
export type Payload = GuyId;
export type DeleteGuyAction = { type: Type, payload: Payload }

export default (id: GuyId): DeleteGuyAction => ({
    type,
    payload: id
});