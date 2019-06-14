import { Transformer } from '~redux/types';

type RemoveIdFromOrdering = (id: string) => Transformer;

const removeIdFromOrdering: RemoveIdFromOrdering = id => prevState => {
    const newState: typeof prevState = {
        ...prevState,
        guyOrdering: prevState.guyOrdering.filter(otherId => otherId !== id),
    };

    return newState;
};

export default removeIdFromOrdering;
