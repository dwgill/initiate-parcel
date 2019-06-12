import React, { useCallback, useEffect, useRef } from 'react';
import { useName } from '~hooks/useGuyProp';
import * as styles from './guyCard.styles.css';
import { Draggable } from 'react-beautiful-dnd';

const GuyCard = ({ id, index }) => {
    const [name, setName] = useName(id);
    const handleChangeName = useCallback(e => setName(e.target.value), [
        setName,
    ]);
    const nameRef = useRef(null);
    useEffect(() => nameRef.current.focus(), []);

    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <div
                    className={styles.card}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <input
                        type="text"
                        value={name}
                        onChange={handleChangeName}
                        className={styles.cardTitle}
                        ref={nameRef}
                    />
                </div>
            )}
        </Draggable>
    );
};

export default GuyCard;
