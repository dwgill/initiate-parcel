import { useRef, useState, useCallback, useEffect } from 'react';
import { NumGuyProp } from '~redux/types';
import { useGuyProp } from '~hooks/useGuyProp';
import existy from '~logic/existy';
import evaluateDynamicNumber from '~logic/evaluateDynamicNumber';
import useTempTrue from '~hooks/useTempTrue';

const asStr = (val: number | null | undefined): string => {
    return existy(val) ? String(val) : '';
};

export const useNumPropInput = (prop: NumGuyProp, id: string) => {
    const ref = useRef<HTMLInputElement>(null);
    const [reduxPropVal, setReduxPropVal] = useGuyProp(prop, id);
    const [inputVal, setInputVal] = useState(asStr(reduxPropVal));
    const [isFocused, setFocus] = useState(false);
    const [flashing, flash] = useTempTrue(300);

    const handleFocus = useCallback(() => {
        setFocus(true);
    }, [setFocus]);

    const handleBlur = useCallback(() => {
        const [newReduxVal, wasDynamic] = evaluateDynamicNumber(
            inputVal,
            reduxPropVal,
        );
        if (newReduxVal !== reduxPropVal) {
            setReduxPropVal(newReduxVal);
            if (wasDynamic) {
                flash();
            }
        } else if (inputVal === '' && existy(reduxPropVal)) {
            setReduxPropVal(null);
        }

        setFocus(false);
    }, [setFocus, setReduxPropVal, reduxPropVal, inputVal]);

    const handleKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            if (event.key === 'Enter' && existy(ref.current)) {
                ref.current.blur();
            }
        },
        [],
    );

    useEffect(() => {
        if (isFocused && existy(ref.current)) {
            ref.current.select();
        }
    }, [isFocused]);

    useEffect(() => {
        if (!isFocused) {
            const reduxPropValStr = asStr(reduxPropVal);
            if (inputVal !== reduxPropValStr) {
                setInputVal(reduxPropValStr);
            }
        }
    }, [isFocused, reduxPropVal, inputVal, setInputVal]);

    return {
        onFocus: handleFocus,
        onBlur: handleBlur,
        value: [inputVal, setInputVal] as [typeof inputVal, typeof setInputVal],
        onKeyDown: handleKeyDown,
        inputRef: ref,
        flashing,
    };
};
