import { GuyProp, RootState } from '~/redux/types';
import { EditGuyAction } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';

export { type } from '~actions/editGuy';

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id, prop, value } = action.payload;

    return setGuyProp(prop, id, value)(prevState);
};
