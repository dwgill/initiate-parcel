import * as React from 'react';
import * as styles from './pageHeader.styles.css';

const PageHeader: React.FC = () => (
    <section className={styles.header}>
        <div className={styles.titles}>
            <h1 className={styles.title}>Initiate</h1>
            <h2 className={styles.subtitle}>
                A(nother) D&D initiative tracker
            </h2>
        </div>
    </section>
);

export default PageHeader;
