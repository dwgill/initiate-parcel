import { Transformer, GuyProp, GuyId } from '../types';

type UnsetGuyProp = (prop: GuyProp, id: GuyId) => Transformer;

const unsetGuyProp: UnsetGuyProp = (prop, id) => prevState => {
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
