import { RootState } from '~/redux/types';
import { DeleteGuyAction } from '~actions/deleteGuy';
import flowTransformers from '~redux/transformers/composeTransformers';
import unsetGuyProp from '~redux/transformers/unsetGuyProp';
import removeIdFromOrdering from '~redux/transformers/removeIdFromOrdering';

export { type } from '~actions/deleteGuy';

export const reducer = (
    prevState: RootState,
    action: DeleteGuyAction,
): RootState => {
    const guyId = action.payload;

    return flowTransformers(
        unsetGuyProp('init', guyId),
        unsetGuyProp('ac', guyId),
        unsetGuyProp('hp', guyId),
        unsetGuyProp('name', guyId),
        unsetGuyProp('note', guyId),
        removeIdFromOrdering(guyId),
    )(prevState);
};
