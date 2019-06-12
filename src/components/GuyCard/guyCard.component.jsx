import React, { useCallback, useEffect, useRef } from 'react';
import { useName } from '~hooks/useGuyProp';
import styles from './guyCard.styles.css';
import { Draggable } from 'react-beautiful-dnd';
import { Flipped } from 'react-flip-toolkit';

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
                <Flipped flipId={id}>
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
                </Flipped>
            )}
        </Draggable>
    );
};

export default GuyCard;
