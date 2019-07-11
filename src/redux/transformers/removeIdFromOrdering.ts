import { Transformer } from '~redux/types';

const removeIdFromOrdering = (id: string): Transformer => prevState => {
    const newState: typeof prevState = {
        ...prevState,
        guyOrdering: {
            ordering: prevState.guyOrdering.ordering.filter(
                otherId => otherId !== id,
            ),
            active: prevState.guyOrdering.active,
        },
    };

    return newState;
};

export default removeIdFromOrdering;
