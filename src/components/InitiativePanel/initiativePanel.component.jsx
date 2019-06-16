import React from 'react';
import styles from './initiativePanel.styles.css';
import GuyCardList from '~components/GuyCardList/guyCardList.component';
import SortGuysBtn from '~components/SortGuysBtn/sortGuysbtn.component';
import NewGuyBtn from '~components/NewGuyBtn/newGuyBtn.component';

const InitiativePanel = () => {
    return (
        <section className={styles.panel}>
            <div className={styles.bar}>
                <span className={styles.barItem}>
                    <NewGuyBtn />
                </span>
                <span className={styles.barItem}>
                    <SortGuysBtn />
                </span>
            </div>
            <GuyCardList />
        </section>
    );
};

export default InitiativePanel;
