import { type as SET_GUY_INDEX, SetGuyIndexAction } from '~actions/setGuyIndex';
import { RootState } from '~redux/types';
import setGuyOrderIndex from '~redux/transformers/setGuyOrderIndex';
import flowTransformers from '~redux/transformers/flowTransformers';
import getActiveGuy from '~redux/selectors/getActiveGuy';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';
import iff from '~logic/iff';

export const type = SET_GUY_INDEX;

export const reducer = (
    prevState: RootState,
    action: SetGuyIndexAction,
): RootState => {
    const { id: movedGuy, index } = action.payload;

    const activeGuy = getActiveGuy(prevState);

    return flowTransformers(
        setGuyOrderIndex(movedGuy, index),
        iff(movedGuy !== activeGuy)(setActiveGuyById(activeGuy)),
    )(prevState);
};
