import React, { useCallback, memo } from 'react';
import { useName } from '~hooks/useGuyProp';
import styles from './nameInput.styles.css';
import useAutoFocusRef from '~hooks/useAutoFocusRef';
import AutosizeInput from 'react-input-autosize';
import useResetKey from '~hooks/useResetKey';

const NameInput = memo(({ guyId }) => {
    const [name, setName] = useName(guyId);
    // prettier-ignore
    const handleChangeName = useCallback(
        e => setName(e.target.value),
        [setName]
    );
    const inputRef = useAutoFocusRef();
    const key = useResetKey([0, 1]);

    return (
        <AutosizeInput
            type="text"
            value={name}
            onChange={handleChangeName}
            className={styles.nameInputContainer}
            inputClassName={styles.nameInput}
            ref={inputRef}
            placeholder="Unnamed"
            key={key}
        />
    );
});

export default NameInput;
