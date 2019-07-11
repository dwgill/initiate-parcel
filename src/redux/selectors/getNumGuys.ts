import { RootState } from '~redux/types';

const getNumGuys = (state: RootState): number => {
    return state.guyOrdering.ordering.length;
};

export default getNumGuys;
