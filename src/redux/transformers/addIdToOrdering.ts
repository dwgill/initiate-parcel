import { GuyId, Transformer } from '~redux/types';
import produce from 'immer';

type AddIdToOrdering = (id: GuyId) => Transformer;

const addIdToOrdering: AddIdToOrdering = id => prevState => {
    const newState = produce(prevState, draft => {
        draft.guyOrdering.push(id);
    });

    return newState;
};

export default addIdToOrdering;
