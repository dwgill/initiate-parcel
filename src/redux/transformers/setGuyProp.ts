import produce from 'immer';
import { GuyProp, GuyPropVal, Transformer } from '../types';

type SetGuyProp = <P extends GuyProp>(
    prop: P,
    id: string,
    val: GuyPropVal<P>,
) => Transformer;

const setGuyProp: SetGuyProp = (prop, id, val) => prevState => {
    const newState = {
        ...prevState,
        guyProperties: {
            ...prevState.guyProperties,
            [prop]: {
                ...prevState.guyProperties[prop],
                [id]: val,
            },
        },
    };

    return newState;
};

export default setGuyProp;
