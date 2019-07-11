import * as React from 'react';
import * as styles from './notesInput.styles.css';
import TextareaAutosize from 'react-autosize-textarea';
import { useNote } from '~hooks/useGuyProp';

type Props = {
    guyId: string;
};

const style: React.CSSProperties = {
    lineHeight: '1.20',
    fontSize: '1.10rem',
    paddingTop: '0.1rem',
    paddingBottom: '0.1rem',
};

const NotesInput: React.FC<Props> = ({ guyId }) => {
    const [note, setNote] = useNote(guyId);
    const handleChange = React.useCallback(
        (event: React.FormEvent<HTMLTextAreaElement>) => {
            setNote(event.currentTarget.value);
        },
        [setNote],
    );

    return (
        <div className={styles.container}>
            <TextareaAutosize
                className={styles.textArea}
                value={note}
                onChange={handleChange}
                placeholder="Write some notes..."
                style={style}
            />
        </div>
    );
};

export default NotesInput;
