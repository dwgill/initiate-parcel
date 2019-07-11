import { Transformer } from '~redux/types';
import produce from 'immer';
import existy from '~logic/existy';

const loopActiveGuy: Transformer = prevState => {
    return produce(prevState, draft => {
        if (existy(draft.guyOrdering.active)) {
            draft.guyOrdering.active =
                draft.guyOrdering.active % draft.guyOrdering.ordering.length;
        }
    });
};

export default loopActiveGuy;
