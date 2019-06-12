import { GuyProp, RootState } from '~/redux/types';
import { EditGuyAction, type as editGuyType } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';
import flowTransformers from '~redux/transformers/composeTransformers';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';
import getAutoSort from '~redux/selectors/getAutoSort';

export const type = editGuyType;

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id, prop, value } = action.payload;

    return flowTransformers(
        setGuyProp(prop, id, value),
        sortGuyOrder(prop === 'init' && getAutoSort(prevState)),
    )(prevState);
};
