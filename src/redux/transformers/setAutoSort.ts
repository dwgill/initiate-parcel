import { Transformer } from '../types';

const setAutoSort = (shouldSort: boolean): Transformer => prevState => {
    return {
        ...prevState,
        settings: {
            ...prevState.settings,
            autoSort: shouldSort,
        },
    };
};

export default setAutoSort;
