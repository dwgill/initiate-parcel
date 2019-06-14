import arraysAreEqual from '~logic/arraysAreEqual';
import existy from '~logic/existy';
import getGuyProp from '~redux/selectors/getGuyProp';
import { Transformer } from '~redux/types';

type SortGuyOrder = (shouldSort?: boolean) => Transformer;

const sortGuyOrder: SortGuyOrder = (shouldSort = true) => prevState => {
    if (!shouldSort) {
        return prevState;
    }

    const newOrdering = [...prevState.guyOrdering]
        .sort((aGuyId, bGuyId) => {
            let aGuyInit = getGuyProp('init', aGuyId)(prevState);
            aGuyInit = existy(aGuyInit) ? aGuyInit : Number.MAX_SAFE_INTEGER;

            let bGuyInit = getGuyProp('init', bGuyId)(prevState);
            bGuyInit = existy(bGuyInit) ? bGuyInit : Number.MAX_SAFE_INTEGER;

            if (aGuyInit < bGuyInit) {
                return -1;
            } else if (aGuyInit > bGuyInit) {
                return +1;
            } else {
                const aGuyBias = getGuyProp('bias', aGuyId)(prevState) || 0;
                const bGuyBias = getGuyProp('bias', bGuyId)(prevState) || 0;
                if (aGuyBias < bGuyBias) {
                    return -1;
                } else if (bGuyBias > bGuyBias) {
                    return +1;
                } else {
                    return 0;
                }
            }
        })
        .reverse();

    if (arraysAreEqual(newOrdering, prevState.guyOrdering)) {
        return prevState;
    }

    return {
        ...prevState,
        guyOrdering: newOrdering,
    };
};

export default sortGuyOrder;
