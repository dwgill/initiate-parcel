import * as React from 'react';
import { useSelector } from 'react-redux';
import GuyCard from '~components/GuyCard/guyCard.component.jsx';
import getInitiativeOrder from '~redux/selectors/getInitiativeOrder.ts';
import * as styles from './initiativeList.styles.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useGuyCardDragEnd from '~hooks/useDragEnd';

const InitiativeList = () => {
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
        </DragDropContext>
    );
};

export default InitiativeList;
