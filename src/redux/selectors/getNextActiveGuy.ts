import existy from '~logic/existy';
import { RootState } from '~redux/types';
import getNumGuys from './getNumGuys';

const getNextActiveGuy = (state: RootState): string | null => {
    const numGuys = getNumGuys(state);
    if (numGuys < 1) {
        return null;
    }

    const presentActivePosition = state.guyOrdering.active;

    if (numGuys === 1 || !existy(presentActivePosition)) {
        return state.guyOrdering.ordering[0];
    }

    return state.guyOrdering.ordering[(presentActivePosition + 1) % numGuys];
};

export default getNextActiveGuy;
