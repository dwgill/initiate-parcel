import React, { memo, useCallback } from 'react';
import AutosizeInput from 'react-input-autosize';
import { useName } from '~hooks/useGuyProp';
import styles from './nameInput.styles.css';

const NameInput = memo(({ guyId }) => {
    const [name, setName] = useName(guyId);
    // prettier-ignore
    const handleChangeName = useCallback(
        e => setName(e.target.value),
        [setName]
    );

    return (
        <AutosizeInput
            type="text"
            value={name}
            onChange={handleChangeName}
            className={styles.nameInputContainer}
            inputClassName={styles.nameInput}
            placeholder="Unnamed"
        />
    );
});

export default NameInput;
