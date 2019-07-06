import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { Dispatch } from '~/redux/types.ts';
import deleteGuy from '~actions/deleteGuy';
import * as styles from './closeBtn.styles.css';

type Props = {
    id: string;
};

const CloseBtn: React.FC<Props> = React.memo(({ id }) => {
    const dispatch = useDispatch<Dispatch>();
    const handleClick = React.useCallback(() => dispatch(deleteGuy(id)), [id]);

    return (
        <button onClick={handleClick} className={styles.btn}>
            <FontAwesomeIcon icon={faTimes} size="lg" className={styles.icon} />
        </button>
    );
});

export default CloseBtn;
