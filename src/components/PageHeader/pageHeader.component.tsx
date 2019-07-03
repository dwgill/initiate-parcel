import * as React from 'react';
import * as styles from './pageHeader.styles.css';

const PageHeader: React.FC = () => (
    <section className={styles.header}>
        <div className={styles.spacing} />
        <div className={styles.titles}>
            <h1 className={styles.title}>Initiate</h1>
            <p className={styles.subtitle}>A(nother) D&D initiative tracker</p>
        </div>
        <div className={styles.spacing} />
    </section>
);

export default PageHeader;
