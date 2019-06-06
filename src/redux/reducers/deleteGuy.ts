import { DeleteGuyAction } from '~actions/deleteGuy';
export { type } from '~actions/deleteGuy';
import { State } from '~/redux/types';
import { flowT } from '~redux/util';
import unsetGuyProp from '~redux/transformers/unsetGuyProp';

export const reducer = (prevState: State, action: DeleteGuyAction): State => {
    const newGuyId = action.payload;

    return flowT(
        unsetGuyProp('init', newGuyId),
        unsetGuyProp('ac', newGuyId),
        unsetGuyProp('hp', newGuyId),
        unsetGuyProp('name', newGuyId),
        unsetGuyProp('note', newGuyId),
        unsetGuyProp('bias', newGuyId),
    )(prevState);
};
