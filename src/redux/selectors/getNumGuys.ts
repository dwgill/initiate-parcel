import { RootState } from '~redux/types';

const getNumGuys = (state: RootState): number => {
    return state.guyOrdering.length;
};

export default getNumGuys;
