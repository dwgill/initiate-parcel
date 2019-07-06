import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getAutoSort from '~redux/selectors/getAutoSort';
import setAutoSort from '~actions/setAutoSort';
import { RootState, Dispatch } from '~redux/types';

const useAutoSort = (): [boolean, (shouldSort: boolean) => void] => {
    const dispatch = useDispatch<Dispatch>();
    const autoSortOn = useSelector(getAutoSort);
    const handleSetAutoSort = useCallback(
        (shouldSort: boolean) => {
            dispatch(setAutoSort(!shouldSort));
        },
        [dispatch],
    );

    return [autoSortOn, handleSetAutoSort];
};
