import { EditGuyAction } from '~actions/editGuy';
import { State } from '~/redux/types';
export { type } from '~actions/editGuy';
import setGuyProp from '~redux/transformers/setGuyProp';

export const reducer = (prevState: State, action: EditGuyAction): State => {
    const { id, prop, value } = action.payload;

    return setGuyProp(prop, id, value)(prevState);
}