import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import newGuy from '~actions/newGuy';
import InitiativePanelButton from '~components/InitiativePanelButton/initiativePanelButton.component';

const NewGuyBtn = () => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => dispatch(newGuy()), [dispatch]);
    return <InitiativePanelButton icon={faPlus} onClick={handleClick} />;
};

export default NewGuyBtn;
