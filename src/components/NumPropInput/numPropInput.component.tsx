import * as React from 'react';
import { NumGuyProp } from '~redux/types';
import { useInput } from './hooks';
import * as styles from './numPropInput.styles.css';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type NumPropInputProps = {
    prop: NumGuyProp;
    id: string;
    title: string;
    icon: IconDefinition;
};

const NumPropInput: React.FC<NumPropInputProps> = ({ prop, id, icon }) => {
    const {
        onBlur,
        onFocus,
        value: [inputVal, setInputVal],
        onKeyDown,
        inputRef,
        flashing,
    } = useInput(prop, id);

    return (
        <span
            className={flashing ? styles.flashingContainer : styles.container}
            onClick={onFocus}
        >
            <FontAwesomeIcon
                icon={icon}
                size="lg"
                color={flashing ? styles.darkPurple : 'black'}
            />
            <input
                className={styles.input}
                value={inputVal}
                onChange={e => setInputVal(e.currentTarget.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                ref={inputRef}
            />
        </span>
    );
};

export default NumPropInput;
