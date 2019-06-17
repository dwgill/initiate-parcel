import droll from 'droll';

const constantRE = /^[0-9]*\.?[0-9]+$/;
const isConstantNumber = (str: string) => constantRE.test(str);
const isDiceRoll = (str: string) => droll.validate(str);

/**
 * @param prevValue
 * @param dynamicNum
 * @return The result, and whether it was dynamic
 */
function computeDynamicNumber(
    prevValue: number | null,
    dynamicNum: string,
): [number, boolean] {
    prevValue = prevValue || 0;
    dynamicNum = (dynamicNum || '').replace(/\s+/g, '');

    if (!dynamicNum) {
        return [prevValue, false];
    }

    if (isConstantNumber(dynamicNum)) {
        return [Number(dynamicNum), false];
    }

    if (dynamicNum[0] === '+') {
        const dynamicWithoutPlus = dynamicNum.substring(1).trim();
        if (isConstantNumber(dynamicWithoutPlus)) {
            const result = prevValue + Number(dynamicWithoutPlus);
            return [result, true];
        }

        if (isDiceRoll(dynamicWithoutPlus)) {
            const result = prevValue + droll.roll(dynamicWithoutPlus).total;
            return [result, true];
        }
    } else if (dynamicNum[0] === '-') {
        const dynamicWithoutMinus = dynamicNum.substring(1).trim();
        if (isConstantNumber(dynamicWithoutMinus)) {
            const result = prevValue - Number(dynamicWithoutMinus);
            return [result, true];
        }

        if (isDiceRoll(dynamicWithoutMinus)) {
            const result = prevValue - droll.roll(dynamicWithoutMinus).total;
            return [result, true];
        }
    }

    if (isDiceRoll(dynamicNum)) {
        const result = droll.roll(dynamicNum).total;
        return [result, true];
    }

    throw new Error('Not valid dynamic string');
}

export default computeDynamicNumber;
