import { GuyProp, RootState } from '~/redux/types';
import { EditGuyAction, type as editGuyType } from '~actions/editGuy';
import iff from '~logic/iff';
import getAutoSort from '~redux/selectors/getAutoSort';
import flowTransformers from '~redux/transformers/composeTransformers';
import setGuyProp from '~redux/transformers/setGuyProp';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';

export const type = editGuyType;

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id, prop, value } = action.payload;

    return flowTransformers(
        setGuyProp(prop, id, value),
        iff(prop === 'init' && getAutoSort(prevState))(sortGuyOrder),
    )(prevState);
};
