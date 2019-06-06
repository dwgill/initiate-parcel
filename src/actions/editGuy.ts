import { GuyProp, GuyPropVal, GuyId } from '../redux/types';

export const type = 'EDIT_GUY';
export type Type = typeof type;

export type Payload<P extends GuyProp> = {
    id: GuyId;
    prop: P;
    value: GuyPropVal<P>;
};

export type EditGuyAction<P extends GuyProp> = {
    type: Type;
    payload: Payload<P>;
};

export default <P extends GuyProp>(
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
