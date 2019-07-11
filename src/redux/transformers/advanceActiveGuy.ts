import { Transformer } from '~redux/types';
import getNumGuys from '~redux/selectors/getNumGuys';

const advanceActiveGuy: Transformer = prevState => {
    if (getNumGuys(prevState) <= 0) {
        return prevState;
    }

    const oldOrdering = prevState.guyOrdering.active || 0;
    const newOrdering =
        (1 + oldOrdering) % prevState.guyOrdering.ordering.length;
    return {
        ...prevState,
        guyOrdering: {
            ...prevState.guyOrdering,
            active: newOrdering,
        },
    };
};

export default advanceActiveGuy;
