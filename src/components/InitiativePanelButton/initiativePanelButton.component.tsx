import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import styles from './initiativePanelButton.styles.css';

type Props = {
    onClick: React.DOMAttributes<HTMLButtonElement>['onClick'];
    icon: IconProp;
};

const InitiativePanelButton: React.FC<Props> = React.memo(
    ({ onClick, icon }) => (
        <button className={styles.btn} onClick={onClick}>
            <FontAwesomeIcon icon={icon} size="2x" color={styles.white} />
        </button>
    ),
);

export default InitiativePanelButton;
