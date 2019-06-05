import { GuyProp, GuyPropVal, GuyId } from '../redux/types';

export const type = 'EDIT_GUY';
export type Type = typeof type;

export type Payload<P extends GuyProp> = {
    id: GuyId
    prop: P
    value: GuyPropVal<P>
};

export type EditGuyAction = {
    type: Type,
    payload: Payload<GuyProp>
}

export default <P extends GuyProp>(id: GuyId, prop: P, value: GuyPropVal<P>): EditGuyAction => ({
    type,
    payload: {
        id,
        prop,
        value
    }
});