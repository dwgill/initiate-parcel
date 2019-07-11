import { Transformer } from '~redux/types';
import getNumGuys from '~redux/selectors/getNumGuys';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import existy from '~logic/existy';
import getOrderIndexOfGuy from '~redux/selectors/getOrderIndexOfGuy';

const advanceActiveGuy: Transformer = prevState => {
    if (getNumGuys(prevState) <= 0) {
        return prevState;
    }

    const oldActive = getOrderIndexOfGuy(getActiveGuy(prevState))(prevState);

    let newActive: number;
    if (!existy(oldActive)) {
        newActive = 0;
    } else {
        newActive = (1 + oldActive) % prevState.guyOrdering.ordering.length;
    }

    return {
        ...prevState,
        guyOrdering: {
            ...prevState.guyOrdering,
            active: newActive,
        },
    };
};

export default advanceActiveGuy;
