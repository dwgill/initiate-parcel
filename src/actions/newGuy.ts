import { GuyId } from '~redux/types';
import existy from '~logic/existy';
import newGuyId from '~logic/newGuyId';

export const type = 'NEW_GUY';
export interface NewGuyAction {
    type: typeof type;
    payload: GuyId;
}

const newGuy = (id: NonNullable<GuyId> = newGuyId()): NewGuyAction => {
    return {
        type,
        payload: id,
    };
};

export const create = newGuy;

export default newGuy;
