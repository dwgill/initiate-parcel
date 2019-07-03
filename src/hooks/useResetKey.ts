import { useState, useEffect } from 'react';

/**
 * This is a function that handles the logic of generating a keyvalue that
 * immediately updates after mount.
 */
function useResetKey<K extends number | string>(
    [firstKeyVal, secondKeyVal]: [K, K],
    timeout: number = 10,
): K {
    const [keyState, setKeyState] = useState(firstKeyVal);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setKeyState(secondKeyVal);
        }, timeout);

        return () => clearTimeout(timeoutId);
    }, [secondKeyVal, timeout]);

    return keyState;
}

export default useResetKey;
