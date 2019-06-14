import { Guy, RootState } from '~redux/types';
import getPartialGuy from './getPartialGuy';

const guyIsNotPartial = (guy: Partial<Guy>): guy is Guy => {
    return Object.values(guy).every(val => val !== undefined);
};

const getGuy = (id: string) => (state: RootState): Guy | undefined => {
    const guy = getPartialGuy(id)(state);

    if (guyIsNotPartial(guy)) {
        return guy;
    }

    return undefined;
};

export default getGuy;
