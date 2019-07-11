import { faCaretRight } from '@fortawesome/free-solid-svg-icons/faCaretRight';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import nextGuy from '~actions/nextGuy';
import InitiativePanelButton from '~components/InitiativePanelButton/initiativePanelButton.component';

const NextGuyBtn = () => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => dispatch(nextGuy()), [dispatch]);
    return <InitiativePanelButton icon={faCaretRight} onClick={handleClick} />;
};

export default NextGuyBtn;
