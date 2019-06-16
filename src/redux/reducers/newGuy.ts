import { RootState } from '~/redux/types';
import { NewGuyAction } from '~actions/newGuy';
import flowTransformers from '~redux/transformers/composeTransformers';
import setGuyProp from '~redux/transformers/setGuyProp';
import addIdToOrdering from '~redux/transformers/addIdToOrdering';
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
        sortGuyOrder(),
    )(prevState);
};
