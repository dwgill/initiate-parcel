import { Transformer } from '~redux/types';

const addIdToOrdering = (id: string): Transformer => prevState => {
    return {
        ...prevState,
        guyOrdering: {
            ordering: [id, ...prevState.guyOrdering.ordering],
            active: prevState.guyOrdering.active,
        },
    };
};

export default addIdToOrdering;
