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
import NotesInput from '~components/NotesInput/notesInput.component';

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
                        <div className={styles.cardInterior}>
                            <span className={styles.name}>
                                <NameInput guyId={guyId} />
                            </span>
                            <span className={styles.initiative}>
                                <NumPropInput
                                    icon={faHistory}
                                    prop={'init'}
                                    guyId={guyId}
                                />
                            </span>
                            <span className={styles.health}>
                                <NumPropInput
                                    icon={faHeart}
                                    prop={'hp'}
                                    guyId={guyId}
                                />
                            </span>

                            <span className={styles.armorClass}>
                                <NumPropInput
                                    icon={faShieldAlt}
                                    prop={'ac'}
                                    guyId={guyId}
                                />
                            </span>
                            {displayNotes && (
                                <span className={styles.notes}>
                                    <NotesInput guyId={guyId} />
                                </span>
                            )}
                        </div>
                        <span className={styles.notesBtn}>
                            <CardDetailBtn
                                onClick={toggleNotes}
                                icon={faCommentAlt}
                                active={displayNotes}
                            />
                        </span>
                        <span className={styles.close}>
                            <CardDetailBtn
                                onClick={handleDeleteGuy}
                                icon={faTimes}
                            />
                        </span>
                    </div>
                </Flipped>
            )}
        </Draggable>
    );
};

export default GuyCard;
