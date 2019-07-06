import produce from 'immer';
import { Transformer } from '../types';

type SetAutoSort = (shouldSort: boolean) => Transformer;

const setAutoSort: SetAutoSort = shouldSort => prevState => {
    const newState: typeof prevState = produce(prevState, draft => {
        draft.settings.autoSort = shouldSort;
    });

    return newState;
};

export default setAutoSort;
