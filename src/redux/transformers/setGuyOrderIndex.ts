import { Transformer } from '~redux/types';
import produce from 'immer';

const setGuyOrderIndex = (
    guyId: string,
    index: number,
): Transformer => prevState => {
    const newState = produce(prevState, draft => {
        draft.guyOrdering.ordering.splice(
            draft.guyOrdering.ordering.indexOf(guyId),
            1,
        );
        draft.guyOrdering.ordering.splice(index, 0, guyId);
    });

    return newState;
};

export default setGuyOrderIndex;
