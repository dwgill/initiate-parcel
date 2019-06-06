import existy from '~logic/existy';
import { GuyProp, GuyPropKey, initialState, Transformer } from '../types';

const unsetGuyProp = <P extends GuyProp>(
    prop: P,
    id: GuyPropKey<P>,
): Transformer => (prevState = initialState) => {
    if (!existy(prevState[prop])) {
        return prevState;
    }

    const newState = {
        ...prevState,
        [prop]: {
            ...prevState[prop],
        },
    };

    delete newState[prop][id];

    return newState;
};

export default unsetGuyProp;
