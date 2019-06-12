import React from 'react';
import styles from './initiativePanel.styles.css';
import GuyCardList from '~components/GuyCardList/guyCardList.component';
import SortGuysBtn from '~components/SortGuysBtn/sortGuysbtn.component';

const InitiativePanel = () => {
    return (
        <section className={styles.panel}>
            <div className={styles.bar}>
                <SortGuysBtn />
            </div>
            <GuyCardList />
        </section>
    );
};

export default InitiativePanel;
