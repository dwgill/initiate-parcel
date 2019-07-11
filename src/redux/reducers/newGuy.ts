import { RootState } from '~/redux/types';
import { NewGuyAction } from '~actions/newGuy';
import iff from '~logic/iff';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import getAutoSort from '~redux/selectors/getAutoSort';
import addIdToOrdering from '~redux/transformers/addIdToOrdering';
import flowTransformers from '~redux/transformers/flowTransformers';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';
import setGuyProp from '~redux/transformers/setGuyProp';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';

export { type } from '~actions/newGuy';

export const reducer = (
    prevState: RootState,
    action: NewGuyAction,
): RootState => {
    const newGuyId = action.payload;

    return flowTransformers(
        setGuyProp('init', newGuyId, null),
        setGuyProp('ac', newGuyId, null),
        setGuyProp('hp', newGuyId, null),
        setGuyProp('name', newGuyId, ''),
        setGuyProp('note', newGuyId, ''),
        addIdToOrdering(newGuyId),
        iff(getAutoSort(prevState))(sortGuyOrder),
        setActiveGuyById(getActiveGuy(prevState)),
    )(prevState);
};
