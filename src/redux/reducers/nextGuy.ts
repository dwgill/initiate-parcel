import { RootState } from '~/redux/types';
import { NextGuyAction, type as nextGuyType } from '~actions/nextGuy';
import getNextActiveGuy from '~redux/selectors/getNextActiveGuy';
import flowTransformers from '~redux/transformers/flowTransformers';
import incrementNotesOfGuy from '~redux/transformers/incrementNotesOfGuy';
import setActiveGuyById from '~redux/transformers/setActiveGuyById';

export const type = nextGuyType;

export const reducer = (
    prevState: RootState,
    action: NextGuyAction,
): RootState => {
    const nextActiveGuy = getNextActiveGuy(prevState);
    return flowTransformers(
        setActiveGuyById(nextActiveGuy),
        incrementNotesOfGuy(nextActiveGuy),
    )(prevState);
};
