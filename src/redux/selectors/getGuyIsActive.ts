import existy from '~logic/existy';
import { RootState } from '~redux/types';
import getActiveGuy from './getActiveGuy';

const getGuyIsActive = (guyId: string | null) => (
    state: RootState,
): boolean => {
    if (!existy(guyId)) {
        return false;
    }

    const activeGuy = getActiveGuy(state);
    if (!existy(activeGuy)) {
        return false;
    }

    return activeGuy === guyId;
};

export default getGuyIsActive;
