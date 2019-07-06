import { type as SET_GUY_INDEX, SetGuyIndexAction } from '~actions/setGuyIndex';
import { RootState } from '~redux/types';
import setGuyOrderIndex from '~redux/transformers/setGuyOrderIndex';

export const type = SET_GUY_INDEX;

export const reducer = (
    prevState: RootState,
    action: SetGuyIndexAction,
): RootState => {
    const { id, index } = action.payload;
    return setGuyOrderIndex(id, index)(prevState);
};
