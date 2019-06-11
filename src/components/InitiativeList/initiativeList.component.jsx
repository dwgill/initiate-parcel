import * as React from 'react';
import * as styles from './initiativeList.styles.css';
import { useSelector } from 'react-redux';
import getInitiativeOrder from '~redux/selectors/getGuyIds.ts';
import GuyCard from '~components/GuyCard/guyCard.component.jsx';

const InitiativeList = () => {
    const guyIds = useSelector(getInitiativeOrder);
    return (
        <div className={styles.list}>
            {guyIds.map(guyId => (
                <GuyCard key={guyId} id={guyId} />
            ))}
        </div>
    );
};

export default InitiativeList;
