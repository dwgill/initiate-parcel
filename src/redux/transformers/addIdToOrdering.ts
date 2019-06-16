import { Transformer } from '~redux/types';

type AddIdToOrdering = (id: string) => Transformer;

const addIdToOrdering: AddIdToOrdering = id => prevState => {
    return {
        ...prevState,
        guyOrdering: [id, ...prevState.guyOrdering],
    };
};

export default addIdToOrdering;
