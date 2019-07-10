import * as React from 'react';
import { NumGuyProp } from '~redux/types';
import { useNumPropInput } from './hooks';
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
    } = useNumPropInput(prop, id);

    const iconElement = React.useMemo(
        () => (
            <FontAwesomeIcon
                icon={icon}
                size="lg"
                color={flashing ? styles.flashColor : 'black'}
            />
        ),
        [icon, flashing],
    );

    return (
        <span
            className={flashing ? styles.flashingContainer : styles.container}
            onClick={onFocus}
        >
            {iconElement}
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
