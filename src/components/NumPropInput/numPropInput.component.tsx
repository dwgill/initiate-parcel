import * as React from 'react';
import { NumGuyProp } from '~redux/types';
import { useInput } from './hooks';
import * as styles from './numPropInput.styles.css';

type NumPropInputProps = {
    prop: NumGuyProp;
    id: string;
    title: string;
};

const NumPropInput: React.FC<NumPropInputProps> = ({ prop, id, title }) => {
    const {
        onBlur,
        onFocus,
        value: [inputVal, setInputVal],
        onKeyDown,
        inputRef,
    } = useInput(prop, id);

    return (
        <div className={styles.container}>
            <label className={styles.label}>{title}</label>
            <input
                className={styles.input}
                value={inputVal}
                onChange={e => setInputVal(e.currentTarget.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                onKeyDown={onKeyDown}
                ref={inputRef}
            />
        </div>
    );
};

export default NumPropInput;
