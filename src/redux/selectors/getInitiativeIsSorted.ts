import { RootState } from '~redux/types';
import getInitiativeOrder from './getInitiativeOrder';
import getGuyProp from './getGuyProp';
import existy from '~logic/existy';
import chunk from '~logic/chunk';

const getInitiativeIsSorted = (state: RootState): boolean => {
    const initOrder = getInitiativeOrder(state);
    const initiativeScores = initOrder.map(id => getGuyProp('init', id)(state));

    for (let [first, second] of chunk(initiativeScores)) {
        first = existy(first) ? first : Number.MAX_SAFE_INTEGER;
        second = existy(second) ? second : Number.MAX_SAFE_INTEGER;

        if (first < second) {
            return false;
        }
    }

    return true;
};

export default getInitiativeIsSorted;
