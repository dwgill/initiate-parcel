import { Transformer } from '~redux/types';
import existy from '~logic/existy';
import getOrderIndexOfGuy from '~redux/selectors/getOrderIndexOfGuy';

const setActiveGuyById = (guyId: string | null): Transformer => prevState => {
    if (!existy(guyId)) {
        return prevState;
    }

    const guyIndex = getOrderIndexOfGuy(guyId)(prevState);
    if (!existy(guyIndex)) {
        return prevState;
    }

    return {
        ...prevState,
        guyOrdering: {
            ...prevState.guyOrdering,
            active: guyIndex,
        },
    };
};

export default setActiveGuyById;
