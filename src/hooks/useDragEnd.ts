import { useDispatch } from 'react-redux';
import setGuyIndex from '~actions/setGuyIndex';
import existy from '~logic/existy';
import { OnDragEndResponder } from 'react-beautiful-dnd';
import { Dispatch } from '~redux/types';

const useGuyCardDragEnd = (): OnDragEndResponder => {
    const dispatch = <Dispatch>useDispatch();

    return result => {
        const { source, destination, draggableId } = result;

        if (!existy(destination)) {
            return;
        }

        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        dispatch(setGuyIndex(draggableId, destination.index));
    };
};

export default useGuyCardDragEnd;
