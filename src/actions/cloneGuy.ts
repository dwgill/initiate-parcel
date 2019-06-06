import { GuyId, ThunkAction, allGuyProps } from '~redux/types';
import newGuy from './newGuy';
import editGuy from './editGuy';
import getGuyProp from '~redux/selectors/getGuyProp';
import newGuyId from '~logic/newGuyId';

export const create = (
    origId: NonNullable<GuyId>,
    newId: NonNullable<GuyId> = newGuyId(),
): ThunkAction<void> => (dispatch, getState) => {
    const state = getState();
    dispatch(newGuy(newId));
    for (const prop of allGuyProps) {
        const propVal = getGuyProp(prop, origId)(state);
        if (propVal !== undefined) {
            dispatch(editGuy(newId, prop, propVal));
        }
    }
};

export default create;
