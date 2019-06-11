import { GuyProp, RootState } from '~/redux/types';
import { EditGuyAction } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';
import flowTransformers from '~redux/transformers/composeTransformers';
import sortGuyOrder from '~redux/transformers/sortGuyOrder';

export { type } from '~actions/editGuy';

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id, prop, value } = action.payload;

    return flowTransformers(
        setGuyProp(prop, id, value),
        sortGuyOrder(prop === 'init'),
    )(prevState);
};
