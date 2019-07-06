export const type = 'SET_AUTO_SORT';
export interface SetAutoSortAction {
    type: typeof type;
    payload: boolean;
}

const setAutoSort = (shouldSort: boolean): SetAutoSortAction => {
    return {
        type,
        payload: shouldSort,
    };
};

export const create = setAutoSort;

export default setAutoSort;
