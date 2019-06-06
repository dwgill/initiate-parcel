import { NewGuyAction } from '~actions/newGuy';
import { State } from '~/redux/types';
export { type } from '~actions/newGuy';
import setGuyProp from '~redux/transformers/setGuyProp';
import { flowT } from '~redux/util';

export const reducer = (prevState: State, action: NewGuyAction): State => {
    const newGuyId = action.payload;

    return flowT(
        setGuyProp('init', newGuyId, null),
        setGuyProp('ac', newGuyId, null),
        setGuyProp('hp', newGuyId, null),
        setGuyProp('name', newGuyId, ''),
        setGuyProp('note', newGuyId, ''),
        setGuyProp('bias', newGuyId, 0),
    )(prevState);
};
