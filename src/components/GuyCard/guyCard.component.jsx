import React, { memo, useCallback, useRef, useEffect } from 'react';
import {
    useAc,
    useBias,
    useHp,
    useInit,
    useName,
    useNote,
} from '~hooks/useGuyProp';
import * as styles from './guyCard.styles.css';

const GuyCard = ({ id }) => {
    const [name, setName] = useName(id);
    const handleChangeName = useCallback(e => setName(e.target.value), [
        setName,
    ]);
    const nameRef = useRef(null);
    useEffect(() => nameRef.current.focus(), []);

    return (
        <div className={styles.card}>
            <input
                type="text"
                value={name}
                onChange={handleChangeName}
                className={styles.cardTitle}
                ref={nameRef}
            />
        </div>
    );
};

export default GuyCard;
