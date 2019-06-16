import produce from 'immer';
import { GuyProp, Transformer } from '../types';

const unsetGuyProp = <P extends GuyProp>(
    prop: P,
    id: string,
): Transformer => prevState => {
    const newState = produce(prevState, draft => {
        delete draft.guyProperties[prop][id];
    });

    return newState;
};

export default unsetGuyProp;
