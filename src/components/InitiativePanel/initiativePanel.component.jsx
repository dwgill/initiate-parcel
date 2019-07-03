import React from 'react';
import styles from './initiativePanel.styles.css';
import GuyCardList from '~components/GuyCardList/guyCardList.component';
import SortGuysBtn from '~components/SortGuysBtn/sortGuysbtn.component';
import NewGuyBtn from '~components/NewGuyBtn/newGuyBtn.component';

const InitiativePanel = () => {
    return (
        <section className={styles.container}>
            <div className={styles.spacing} />
            <div className={styles.panel}>
                <div className={styles.bar}>
                    <span className={styles.barElement}>
                        <NewGuyBtn />
                    </span>
                    <span className={styles.barElement}>
                        <SortGuysBtn />
                    </span>
                </div>
                <GuyCardList />
            </div>
            <div className={styles.spacing} />
        </section>
    );
};

export default InitiativePanel;
