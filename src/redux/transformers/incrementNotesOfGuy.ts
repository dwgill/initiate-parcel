import { Transformer } from '~redux/types';
import existy from '~logic/existy';
import getGuyProp from '~redux/selectors/getGuyProp';
import incrementNotes from '~logic/incrementNotes';
import setGuyProp from './setGuyProp';

const incrementNotesOfGuy = (
    guyId: string | null,
): Transformer => prevState => {
    if (!existy(guyId)) {
        return prevState;
    }

    const prevNotes = getGuyProp('note', guyId)(prevState);
    if (!existy(prevNotes)) {
        return prevState;
    }

    const newNotes = incrementNotes(prevNotes);

    return setGuyProp('note', guyId, newNotes)(prevState);
};

export default incrementNotesOfGuy;
