import { GuyProp, RootState } from '~/redux/types';
import { EditGuyAction, type as editGuyType } from '~actions/editGuy';
import iff from '~logic/iff';
import getAutoSort from '~redux/selectors/getAutoSort';
import flowTransformers from '~redux/transformers/flowTransformers';
import setGuyProp from '~redux/transformers/setGuyProp';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';

export const type = editGuyType;

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id: editedGuy, prop, value } = action.payload;

    const activeGuy = getActiveGuy(prevState);

    return flowTransformers(
        setGuyProp(prop, editedGuy, value),
        iff(prop === 'init' && getAutoSort(prevState))(sortGuyOrder),
        iff(prop === 'init' && editedGuy !== activeGuy)(
            setActiveGuyById(activeGuy),
        ),
    )(prevState);
};
