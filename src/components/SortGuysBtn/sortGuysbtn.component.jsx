import React, { useCallback } from 'react';
import styles from './sortGuysBtn.styles.css';
import check from '@fortawesome/fontawesome-free/svgs/solid/check.svg';
import question from '@fortawesome/fontawesome-free/svgs/solid/question.svg';
import { useSelector, useDispatch } from 'react-redux';
import getAutoSort from '~redux/selectors/getAutoSort';
import setAutoSort from '~actions/setAutoSort';

const SortGuysBtn = () => {
    const dispatch = useDispatch();
    const autoSortOn = useSelector(getAutoSort);
    const handleClick = useCallback(() => {
        dispatch(setAutoSort(!autoSortOn));
    }, [autoSortOn, dispatch]);
    return (
        <button className={styles.button} onClick={handleClick}>
            Sort Guys
            <img src={autoSortOn ? check : question} className={styles.icon} />
        </button>
    );
};

export default SortGuysBtn;
