import { GuyId, Transformer } from '~redux/types';

type AddIdToOrdering = (id: GuyId) => Transformer;

const addIdToOrdering: AddIdToOrdering = id => prevState => {
    return {
        ...prevState,
        guyOrdering: [id, ...prevState.guyOrdering],
    };
};

export default addIdToOrdering;
