import { RootState } from '~redux/types';
import existy from '~logic/existy';

const getOrderIndexOfGuy = (guyId: string | null) => (
    state: RootState,
): number | null => {
    if (!existy(guyId)) {
        return null;
    }

    const index = state.guyOrdering.ordering.indexOf(guyId);

    return index < 0 ? null : index;
};

export default getOrderIndexOfGuy;
