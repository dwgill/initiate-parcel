import { useRef, useState, useCallback, useEffect } from 'react';
import { NumGuyProp } from '~redux/types';
import { useGuyProp } from '~hooks/useGuyProp';
import existy from '~logic/existy';

const asStr = (val: number | null | undefined): string => {
    return existy(val) ? String(val) : '';
};

const asNum = (val: string, preVal: number | null = null): number | null => {
    if (val === '') {
        return null;
    }

    const newNumVal = parseInt(val, 10);
    return !isNaN(newNumVal) ? newNumVal : existy(preVal) ? preVal : null;
};

export const useInputRef = () => {
    const ref = useRef<HTMLInputElement>(null);

    return ref;
};

export const useInput = (prop: NumGuyProp, id: string) => {
    const ref = useRef<HTMLInputElement>(null);
    const [reduxPropVal, setReduxPropVal] = useGuyProp(prop, id);
    const [inputVal, setInputVal] = useState(asStr(reduxPropVal));
    const [isFocused, setFocus] = useState(false);

    const handleFocus = useCallback(() => {
        setFocus(true);
    }, [setFocus]);

    const handleBlur = useCallback(() => {
        const newReduxVal = asNum(inputVal, reduxPropVal);
        if (newReduxVal !== reduxPropVal) {
            setReduxPropVal(newReduxVal);
        }

        setFocus(false);
    }, [setFocus, setReduxPropVal, reduxPropVal, inputVal]);

    useEffect(() => {
        if (!isFocused) {
            const reduxPropValStr = asStr(reduxPropVal);
            if (inputVal !== reduxPropValStr) {
                setInputVal(reduxPropValStr);
            }
        }
    }, [isFocused, reduxPropVal, inputVal, setInputVal]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter') {
                if (existy(ref.current)) {
                    ref.current.blur();
                }
            }
        },
        [handleBlur],
    );

    return {
        onFocus: handleFocus,
        onBlur: handleBlur,
        value: [inputVal, setInputVal] as [typeof inputVal, typeof setInputVal],
        onKeyDown: handleKeyDown,
        inputRef: ref,
    };
};
