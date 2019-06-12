import * as React from 'react';
import { useSelector } from 'react-redux';
import GuyCard from '~components/GuyCard/guyCard.component.jsx';
import getInitiativeOrder from '~redux/selectors/getInitiativeOrder.ts';
import styles from './guyCardList.styles.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useGuyCardDragEnd from '~hooks/useDragEnd';
import { Flipper } from 'react-flip-toolkit';

const GuyCardList = () => {
    const guyIds = useSelector(getInitiativeOrder);
    const handleDragEnd = useGuyCardDragEnd();
    // const handleDragEnd = () => {};
    // const handleDragStart = () => {};
    // const handleDragUpdate = () => {};
    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
            // onDragStart={handleDragStart}
            // onDragUpdate={handleDragUpdate}
        >
            <Flipper flipKey={guyIds.join('')}>
                <Droppable droppableId="initiative-list">
                    {provided => (
                        <div
                            className={styles.list}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {guyIds.map((guyId, index) => (
                                <GuyCard key={guyId} id={guyId} index={index} />
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </Flipper>
        </DragDropContext>
    );
};

export default GuyCardList;
