import { faCommentAlt } from '@fortawesome/free-solid-svg-icons/faCommentAlt';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons/faShieldAlt';
import { faTimes } from '@fortawesome/free-solid-svg-icons/faTimes';
import React, { useCallback, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Flipped } from 'react-flip-toolkit';
import { useDispatch } from 'react-redux';
import deleteGuy from '~actions/deleteGuy';
import CardDetailBtn from '~components/CardDetailBtn/cardDetailBtn.component';
import NameInput from '~components/NameInput/nameInput.component';
import NumPropInput from '~components/NumPropInput/numPropInput.component';
import styles from './guyCard.styles.css';

const GuyCard = ({ guyId, index }) => {
    const dispatch = useDispatch();
    const handleDeleteGuy = useCallback(() => dispatch(deleteGuy(guyId)), [
        guyId,
    ]);

    const [displayNotes, setDisplayNotes] = useState(false);
    const toggleNotes = useCallback(
        () => setDisplayNotes(prevNotes => !prevNotes),
        [setDisplayNotes],
    );

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
                        <span className={styles.close}>
                            <CardDetailBtn
                                onClick={handleDeleteGuy}
                                icon={faTimes}
                            />
                        </span>
                        <span className={styles.notesBtn}>
                            <CardDetailBtn
                                onClick={toggleNotes}
                                icon={faCommentAlt}
                                active={displayNotes}
                            />
                        </span>
                        <div className={styles.cardInterior}>
                            <span className={styles.name}>
                                <NameInput guyId={guyId} />
                            </span>
                            <span className={styles.initiative}>
                                <NumPropInput
                                    icon={faHistory}
                                    prop={'init'}
                                    id={guyId}
                                />
                            </span>
                            <span className={styles.health}>
                                <NumPropInput
                                    icon={faHeart}
                                    prop={'hp'}
                                    id={guyId}
                                />
                            </span>

                            <span className={styles.armorClass}>
                                <NumPropInput
                                    icon={faShieldAlt}
                                    prop={'ac'}
                                    id={guyId}
                                />
                            </span>
                            <span className={styles.notes}>
                                {displayNotes && 'notes!'}
                            </span>
                        </div>
                    </div>
                </Flipped>
            )}
        </Draggable>
    );
};

export default GuyCard;
