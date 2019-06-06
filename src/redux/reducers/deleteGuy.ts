import { RootState } from '~/redux/types';
import { DeleteGuyAction } from '~actions/deleteGuy';
import composeTransformers from '~redux/transformers/composeTransformers';
import unsetGuyProp from '~redux/transformers/unsetGuyProp';

export { type } from '~actions/deleteGuy';

export const reducer = (
    prevState: RootState,
    action: DeleteGuyAction,
): RootState => {
    const newGuyId = action.payload;

    return composeTransformers(
        unsetGuyProp('init', newGuyId),
        unsetGuyProp('ac', newGuyId),
        unsetGuyProp('hp', newGuyId),
        unsetGuyProp('name', newGuyId),
        unsetGuyProp('note', newGuyId),
        unsetGuyProp('bias', newGuyId),
    )(prevState);
};
