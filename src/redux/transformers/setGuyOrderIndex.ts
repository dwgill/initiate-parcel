import { Transformer } from '~redux/types';
import produce from 'immer';

const setGuyOrderIndex = (
    guyId: string,
    newIndex: number,
): Transformer => prevState => {
    const newState = produce(prevState, draft => {
        const prevIndex = draft.guyOrdering.ordering.indexOf(guyId);
        draft.guyOrdering.ordering.splice(prevIndex, 1);
        draft.guyOrdering.ordering.splice(newIndex, 0, guyId);
    });

    return newState;
};

export default setGuyOrderIndex;
