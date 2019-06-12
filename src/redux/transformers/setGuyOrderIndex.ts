import { GuyId, Transformer } from '~redux/types';
import produce from 'immer';

const setGuyOrderIndex = (
    guyId: GuyId,
    index: number,
): Transformer => prevState => {
    const newState = produce(prevState, draft => {
        draft.guyOrdering.splice(draft.guyOrdering.indexOf(guyId), 1);
        draft.guyOrdering.splice(index, 0, guyId);
    });

    return newState;
};

export default setGuyOrderIndex;
