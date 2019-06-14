import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Flipped } from 'react-flip-toolkit';
import NameInput from '~components/NameInput/nameInput.component';
import styles from './guyCard.styles.css';

const GuyCard = ({ guyId, index }) => {
    return (
        <Draggable draggableId={guyId} index={index}>
            {provided => (
                <Flipped flipId={guyId}>
                    <div
                        className={styles.card}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <NameInput guyId={guyId} />
                    </div>
                </Flipped>
            )}
        </Draggable>
    );
};

export default GuyCard;
