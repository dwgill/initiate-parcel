import { EditGuyAction } from '~actions/editGuy';
import { RootState } from '~/redux/types';
export { type } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';

export const reducer = (
    prevState: RootState,
    action: EditGuyAction,
): RootState => {
    const { id, prop, value } = action.payload;

    return setGuyProp(prop, id, value)(prevState);
};
