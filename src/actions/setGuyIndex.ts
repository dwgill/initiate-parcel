import { GuyId, ThunkAction } from '~redux/types';
import setAutoSort from './setAutoSort';
import getAutoSort from '~redux/selectors/getAutoSort';

export const type = 'SET_GUY_INDEX';

export interface SetGuyIndexAction {
    type: typeof type;
    payload: {
        id: GuyId;
        index: number;
    };
}

const setGuyIndex = (id: GuyId, index: number): ThunkAction => (
    dispatch,
    getState,
) => {
    if (getAutoSort(getState())) {
        dispatch(setAutoSort(false));
    }

    dispatch({
        type,
        payload: {
            id,
            index,
        },
    });
};

export const create = setGuyIndex;

export default setGuyIndex;
