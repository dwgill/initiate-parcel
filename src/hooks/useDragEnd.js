import { useDispatch } from 'react-redux';
import setGuyIndex from '~actions/setGuyIndex';
import existy from '~logic/existy';

const useGuyCardDragEnd = () => {
    const dispatch = useDispatch();

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
