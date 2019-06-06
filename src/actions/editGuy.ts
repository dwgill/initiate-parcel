import { GuyProp, GuyPropVal, GuyId, GuyPropKey } from '../redux/types';

export const type = 'EDIT_GUY';

export interface EditGuyAction<P extends GuyProp> {
    type: typeof type;
    payload: {
        id: GuyPropKey<P>;
        prop: P;
        value: GuyPropVal<P>;
    };
}

export const create = <P extends GuyProp>(
    id: GuyId,
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

export default create;
