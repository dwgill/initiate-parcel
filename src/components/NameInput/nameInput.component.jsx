import React, { useCallback } from 'react';
import { useName } from '~hooks/useGuyProp';
import styles from './nameInput.styles.css';
import useAutoFocusRef from '~hooks/useAutoFocusRef';

const NameInput = ({ guyId }) => {
    const [name, setName] = useName(guyId);
    // prettier-ignore
    const handleChangeName = useCallback(
        e => setName(e.target.value),
        [setName]
    );
    const inputRef = useAutoFocusRef();

    return (
        <input
            type="text"
            value={name}
            onChange={handleChangeName}
            className={styles.nameInput}
            ref={inputRef}
        />
    );
};

export default NameInput;
