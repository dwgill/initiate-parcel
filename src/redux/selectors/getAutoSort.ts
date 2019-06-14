import { RootState } from '~redux/types';

const getAutoSort = (state: RootState): boolean => {
    return state.settings.autoSort;
};

export default getAutoSort;
