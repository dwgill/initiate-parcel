import { GuyProp, GuyPropVal } from '../redux/types';

export const type = 'EDIT_GUY';

export interface EditGuyAction<P extends GuyProp> {
    type: typeof type;
    payload: {
        id: string;
        prop: P;
        value: GuyPropVal<P>;
    };
}

const editGuy = <P extends GuyProp>(
    id: string,
    prop: P,
    value: GuyPropVal<P>,
): EditGuyAction<P> => ({
    type,
    payload: {
        id,
        prop,
        value,
    },
});

export const create = editGuy;

export default editGuy;
