import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import newGuy from '~actions/newGuy';
import styles from './newGuyBtn.styles.css';

const NewGuyBtn = () => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => dispatch(newGuy()), [dispatch]);
    return (
        <button className={styles.btn} onClick={handleClick}>
            <FontAwesomeIcon icon={faPlus} size="2x" color={styles.white} />
        </button>
    );
};

export default NewGuyBtn;
