import { Transformer } from '~redux/types';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import existy from '~logic/existy';

const unsetActiveGuy: Transformer = prevState => {
    if (!existy(getActiveGuy(prevState))) {
        return prevState;
    }

    return {
        ...prevState,
        guyOrdering: {
            ...prevState.guyOrdering,
            active: null,
        },
    };
};

export default unsetActiveGuy;
