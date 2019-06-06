import existy from '~logic/existy';
import {
    GuyProp,
    GuyPropKey,
    GuyPropVal,
    initialState,
    Transformer,
} from '../types';

type SetGuyProp = <P extends GuyProp>(
    prop: P,
    id: GuyPropKey<P>,
    val: GuyPropVal<P>,
) => Transformer;

const setGuyProp: SetGuyProp = (prop, id, val) => (
    prevState = initialState,
) => {
    const prevPropDict = prevState[prop];

    if (existy(prevPropDict) && prevPropDict[id] === val) {
        return prevState;
    }

    const newPropDict = !existy(prevPropDict)
        ? { [id]: val }
        : {
              ...prevPropDict,
              [id]: val,
          };

    return {
        ...prevState,
        [prop]: newPropDict,
    };
};

export default setGuyProp;
