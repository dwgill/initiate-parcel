export const type = 'NEXT_GUY';

export interface NextGuyAction {
    type: typeof type;
    payload: null;
}

const nextGuy = (): NextGuyAction => ({
    type,
    payload: null,
});

export const create = nextGuy;

export default nextGuy;
