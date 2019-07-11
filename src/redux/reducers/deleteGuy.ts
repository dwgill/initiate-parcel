import { RootState, Transformer } from '~/redux/types';
import { DeleteGuyAction } from '~actions/deleteGuy';
import flowTransformers from '~redux/transformers/flowTransformers';
import unsetGuyProp from '~redux/transformers/unsetGuyProp';
import removeIdFromOrdering from '~redux/transformers/removeIdFromOrdering';
import loopActiveGuy from '~redux/transformers/loopActiveGuy';
import iffElse from '~logic/iffElse';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';

export { type } from '~actions/deleteGuy';

export const reducer = (
    prevState: RootState,
    action: DeleteGuyAction,
): RootState => {
    const deletedGuy = action.payload;

    const activeGuy = getActiveGuy(prevState);

    return flowTransformers(
        unsetGuyProp('init', deletedGuy),
        unsetGuyProp('ac', deletedGuy),
        unsetGuyProp('hp', deletedGuy),
        unsetGuyProp('name', deletedGuy),
        unsetGuyProp('note', deletedGuy),
        removeIdFromOrdering(deletedGuy),
        iffElse(deletedGuy === activeGuy)(loopActiveGuy)(
            setActiveGuyById(activeGuy),
        ),
    )(prevState);
};
