import { useEffect, useCallback, useState } from 'react';

const useTempTrue = (durationMs = 1000) => {
    const [isTrue, setIsTrue] = useState();
    const tempSetTrue = useCallback(() => {
        setIsTrue(true);
        setTimeout(() => setIsTrue(false), durationMs);
    }, [durationMs, setIsTrue]);

    useEffect(() => setIsTrue(false), [durationMs, setIsTrue]);

    return [isTrue, tempSetTrue] as [typeof isTrue, typeof tempSetTrue];
};

export default useTempTrue;
