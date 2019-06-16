import newGuyId from '~logic/newGuyId';

export const type = 'NEW_GUY';
export interface NewGuyAction {
    type: typeof type;
    payload: string;
}

const newGuy = (id: NonNullable<string> = newGuyId()): NewGuyAction => {
    return {
        type,
        payload: id,
    };
};

export const create = newGuy;

export default newGuy;
