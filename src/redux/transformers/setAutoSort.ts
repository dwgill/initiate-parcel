import produce from 'immer';
import { Transformer } from '../types';

const setAutoSort = (shouldSort: boolean): Transformer => prevState => {
    const newState: typeof prevState = produce(prevState, draft => {
        draft.settings.autoSort = shouldSort;
    });

    return newState;
};

export default setAutoSort;
