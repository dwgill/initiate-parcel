import produce from 'immer';
import { GuyProp, GuyPropKey, GuyPropVal, Transformer } from '../types';

type SetGuyProp = <P extends GuyProp>(
    prop: P,
    id: GuyPropKey<P>,
    val: GuyPropVal<P>,
) => Transformer;

const setGuyProp: SetGuyProp = (prop, id, val) => prevState => {
    const newState = produce(prevState, draft => {
        draft.guyProperties[prop][id] = val;
    });

    return newState;
};

export default setGuyProp;
