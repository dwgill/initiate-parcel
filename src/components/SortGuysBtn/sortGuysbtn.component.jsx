import { faSortNumericDownAlt } from '@fortawesome/free-solid-svg-icons/faSortNumericDownAlt';
import { faRandom } from '@fortawesome/free-solid-svg-icons/faRandom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useCallback } from 'react';
import styles from './sortGuysBtn.styles.css';
import { useSelector, useDispatch } from 'react-redux';
import getAutoSort from '~redux/selectors/getAutoSort';
import setAutoSort from '~actions/setAutoSort';

const SortGuysBtn = () => {
    const dispatch = useDispatch();
    const autoSortOn = useSelector(getAutoSort);
    const handleClick = useCallback(() => {
        dispatch(setAutoSort(!autoSortOn));
    }, [dispatch, autoSortOn]);
    return (
        <button className={styles.btn} onClick={handleClick}>
            <FontAwesomeIcon
                icon={autoSortOn ? faSortNumericDownAlt : faRandom}
                size="2x"
                color={styles.white}
            />
        </button>
    );
};

export default SortGuysBtn;
