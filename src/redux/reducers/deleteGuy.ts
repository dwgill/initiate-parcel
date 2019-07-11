import { RootState } from '~/redux/types';
import { DeleteGuyAction } from '~actions/deleteGuy';
import iffElse from '~logic/iffElse';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import flowTransformers from '~redux/transformers/flowTransformers';
import loopActiveGuy from '~redux/transformers/loopActiveGuy';
import removeIdFromOrdering from '~redux/transformers/removeIdFromOrdering';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';
import unsetGuyProp from '~redux/transformers/unsetGuyProp';

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
        // prettier-ignore
        iffElse(deletedGuy === activeGuy)(
            loopActiveGuy
        )(
            setActiveGuyById(activeGuy),
        ),
    )(prevState);
};
