import { useRef, useEffect, MutableRefObject } from 'react';
import existy from '~logic/existy';

const useAutoFocusRef = (): React.MutableRefObject<NonNullable<any>> => {
    const ref: MutableRefObject<any> = useRef(null);
    useEffect(() => {
        if (existy(ref.current)) {
            ref.current.focus();
        }
    }, []);

    return ref;
};

export default useAutoFocusRef;
