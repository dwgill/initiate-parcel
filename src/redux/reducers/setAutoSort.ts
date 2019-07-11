import { SetAutoSortAction, type as autoSortType } from '~actions/setAutoSort';
import flowTransformers from '~redux/transformers/composeTransformers';
import setAutoSort from '~redux/transformers/setAutoSort';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';
import { RootState } from '~redux/types';
import iff from '~logic/iff';

export const type = autoSortType;

export const reducer = (
    prevState: RootState,
    action: SetAutoSortAction,
): RootState => {
    const shouldSort = action.payload;

    // prettier-ignore
    return flowTransformers(
        setAutoSort(shouldSort),
        iff(shouldSort)(sortGuyOrder),
    )(prevState);
};
