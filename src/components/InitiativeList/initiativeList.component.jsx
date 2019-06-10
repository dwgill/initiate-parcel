import * as React from 'react';
import * as styles from './initiativeList.styles.css';
import { useSelector } from 'react-redux';
import getGuyIds from '~redux/selectors/getGuyIds';
import GuyCard from '~components/GuyCard/guyCard';

const arraysAreEqual = (first, second) => {
    if (first.length !== second.length) {
        return false;
    }

    for (let i = 0; i++; i < first.length) {
        if (first[i] !== second[i]) {
            return false;
        }
    }

    return true;
};

const InitiativeList = () => {
    const guyIds = useSelector(getGuyIds, arraysAreEqual);
    return (
        <div className={styles.list}>
            {guyIds.map(guyId => (
                <GuyCard key={guyId} id={guyId} />
            ))}
        </div>
    );
};

export default InitiativeList;
