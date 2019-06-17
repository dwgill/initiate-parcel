import droll from 'droll';

const evaluateDynamicNumber = (
    value: string,
    previousValue: number | null = null,
): [number | null, boolean] => {
    if (value === '') {
        return [previousValue, false];
    }

    value = value.replace(/\s/g, '');

    const parseIntVal = Math.round(Number(value));
    if (!isNaN(parseIntVal)) {
        if (value.startsWith('+') || parseIntVal < 0) {
            const prevNumVal = previousValue || 0;
            /**
             * If the prev val was 0 and the new val is negative,
             * it's not going to "feel" dynamic to the user. It feels like they just
             * set the value to a negative number.
             */
            return [
                parseIntVal + prevNumVal,
                !(prevNumVal === 0 && parseIntVal < 0),
            ];
        } else {
            return [parseIntVal, false];
        }
    }

    let rollResult: droll.DrollResult | false;
    if (
        ['+', '-'].includes(value[0]) &&
        (rollResult = droll.roll(value.substr(1))) !== false
    ) {
        if ('+' === value[0]) {
            return [(previousValue || 0) + rollResult.total, true];
        } else {
            return [(previousValue || 0) - rollResult.total, true];
        }
    } else if ((rollResult = droll.roll(value)) !== false) {
        return [rollResult.total, true];
    }

    return [previousValue, false];
};

export default evaluateDynamicNumber;
