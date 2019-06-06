import { NewGuyAction } from '~actions/newGuy';
import { RootState } from '~/redux/types';
export { type } from '~actions/newGuy';
import setGuyProp from '~redux/transformers/setGuyProp';
import composeTransformers from '~redux/transformers/composeTransformers';

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
