import { EditGuyAction } from '~actions/editGuy';
import { RootState, GuyProp } from '~/redux/types';
export { type } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';

export const reducer = <P extends GuyProp>(
    prevState: RootState,
    action: EditGuyAction<P>,
): RootState => {
    const { id, prop, value } = action.payload;

    return setGuyProp(prop, id, value)(prevState);
};
