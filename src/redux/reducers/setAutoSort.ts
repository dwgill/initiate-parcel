import { SetAutoSortAction, type as autoSortType } from '~actions/setAutoSort';
import iff from '~logic/iff';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import flowTransformers from '~redux/transformers/flowTransformers';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';
import setAutoSort from '~redux/transformers/setAutoSort';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';
import { RootState } from '~redux/types';

export const type = autoSortType;

export const reducer = (
    prevState: RootState,
    action: SetAutoSortAction,
): RootState => {
    const shouldSort = action.payload;

    // prettier-ignore
    return flowTransformers(
        setAutoSort(shouldSort),
        iff(shouldSort)(
            sortGuyOrder
        ),
        iff(shouldSort)(
            setActiveGuyById(getActiveGuy(prevState))
        ),
    )(prevState);
};
