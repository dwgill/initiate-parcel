import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Flipped } from 'react-flip-toolkit';
import NameInput from '~components/NameInput/nameInput.component';
import styles from './guyCard.styles.css';
import NumPropInput from '~components/NumPropInput/numPropInput.component';

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
                        <span className={styles.name}>
                            <NameInput guyId={guyId} />
                        </span>
                        <span className={styles.initiative}>
                            {/* <NumPropInput
                                title="Initiative"
                                prop={'init'}
                                id={guyId}
                            /> */}
                        </span>
                        <span className={styles.health}>
                            {/* <NumPropInput
                                title="Health"
                                prop={'hp'}
                                id={guyId}
                            /> */}
                        </span>

                        <span className={styles.armorClass}>
                            {/* <NumPropInput
                                title="Armor Class"
                                prop={'ac'}
                                id={guyId}
                            /> */}
                        </span>
                        <span className={styles.notes} />
                        <span className={styles.buttons} />
                    </div>
                </Flipped>
            )}
        </Draggable>
    );
};

export default GuyCard;
