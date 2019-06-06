import { RootState } from '~/redux/types';
import { NewGuyAction } from '~actions/newGuy';
import composeTransformers from '~redux/transformers/composeTransformers';
import setGuyProp from '~redux/transformers/setGuyProp';

export { type } from '~actions/newGuy';

export const reducer = (
    prevState: RootState,
    action: NewGuyAction,
): RootState => {
    const newGuyId = action.payload;

    return composeTransformers(
        setGuyProp('init', newGuyId, null),
        setGuyProp('ac', newGuyId, null),
        setGuyProp('hp', newGuyId, null),
        setGuyProp('name', newGuyId, ''),
        setGuyProp('note', newGuyId, ''),
        setGuyProp('bias', newGuyId, 0),
    )(prevState);
};
