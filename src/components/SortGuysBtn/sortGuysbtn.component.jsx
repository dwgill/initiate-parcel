import { faRandom } from '@fortawesome/free-solid-svg-icons/faRandom';
import { faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons/faSortNumericDownAlt';
import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import setAutoSort from '~actions/setAutoSort';
import InitiativePanelButton from '~components/InitiativePanelButton/initiativePanelButton.component';
import getAutoSort from '~redux/selectors/getAutoSort';

const SortGuysBtn = () => {
    const dispatch = useDispatch();
    const autoSortOn = useSelector(getAutoSort);
    const handleClick = useCallback(() => {
        dispatch(setAutoSort(!autoSortOn));
    }, [dispatch, autoSortOn]);
    return (
        <InitiativePanelButton
            icon={autoSortOn ? faSortNumericDownAlt : faRandom}
            onClick={handleClick}
        />
    );
};

export default SortGuysBtn;
