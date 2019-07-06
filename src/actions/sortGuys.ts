import { ThunkAction } from '~redux/types';
import { batch } from 'react-redux';
import setAutoSort from './setAutoSort';

const sortGuys = (): ThunkAction<void> => dispatch => {
    batch(() => {
        dispatch(setAutoSort(true));
        dispatch(setAutoSort(false));
    });
};

export const create = sortGuys;

export default sortGuys;
