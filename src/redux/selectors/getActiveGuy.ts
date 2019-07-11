import { RootState } from '~redux/types';
import existy from '~logic/existy';
import getNumGuys from './getNumGuys';

const getActiveGuy = (state: RootState): string | null => {
    const activePosition = state.guyOrdering.active;
    if (!existy(activePosition)) {
        return null;
    }

    if (activePosition >= getNumGuys(state)) {
        return null;
    }

    return state.guyOrdering.ordering[activePosition];
};

export default getActiveGuy;
