import plus from '@fortawesome/fontawesome-free/svgs/solid/plus.svg';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import newGuy from '~actions/newGuy';
import styles from './newGuyBtn.styles.css';

const NewGuyBtn = () => {
    const dispatch = useDispatch();
    const handleClick = useCallback(() => dispatch(newGuy()), [dispatch]);
    return (
        <button className={styles.btn} onClick={handleClick}>
            <img src={plus} className={styles.icon} />
        </button>
    );
};

export default NewGuyBtn;
