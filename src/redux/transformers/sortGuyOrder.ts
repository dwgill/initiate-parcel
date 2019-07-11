import existy from '~logic/existy';
import getGuyProp from '~redux/selectors/getGuyProp';
import getInitiativeIsSorted from '~redux/selectors/getInitiativeIsSorted';
import { Transformer } from '~redux/types';

const sortGuyOrder: Transformer = prevState => {
    if (prevState.guyOrdering.ordering.length <= 0) {
        return prevState;
    }

    if (getInitiativeIsSorted(prevState)) {
        return prevState;
    }

    const newOrdering = [...prevState.guyOrdering.ordering].sort(
        (aGuyId, bGuyId) => {
            let aGuyInit = getGuyProp('init', aGuyId)(prevState);
            aGuyInit = existy(aGuyInit) ? aGuyInit : Number.MAX_SAFE_INTEGER;

            let bGuyInit = getGuyProp('init', bGuyId)(prevState);
            bGuyInit = existy(bGuyInit) ? bGuyInit : Number.MAX_SAFE_INTEGER;

            const [aFirst, bFirst, abEqual] = [-1, 1, 0];
            if (aGuyInit < bGuyInit) {
                return bFirst;
            } else if (aGuyInit > bGuyInit) {
                return aFirst;
            } else {
                return abEqual;
            }
        },
    );

    return {
        ...prevState,
        guyOrdering: {
            ordering: newOrdering,
            active: prevState.guyOrdering.active,
        },
    };
};

export default sortGuyOrder;
