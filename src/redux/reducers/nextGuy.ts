import advanceActiveGuy from '~/redux/transformers/advanceActiveGuy';
import { RootState } from '~/redux/types';
import { NextGuyAction, type as nextGuyType } from '~actions/nextGuy';

export const type = nextGuyType;

export const reducer = (
    prevState: RootState,
    action: NextGuyAction,
): RootState => {
    return advanceActiveGuy(prevState);
};
