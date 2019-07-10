import {
    FontAwesomeIcon,
    Props as FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome';
import * as React from 'react';
import * as styles from './cardDetailBtn.styles.css';

type Props = {
    icon: FontAwesomeIconProps['icon'];
    active: boolean | undefined;
    onClick: React.DOMAttributes<HTMLButtonElement>['onClick'];
};

const CardDetailBtn: React.FC<Props> = ({ onClick, icon, active }) => {
    return (
        <button onClick={onClick} className={styles.btn}>
            <FontAwesomeIcon
                icon={icon}
                size="lg"
                className={active ? styles.activeIcon : styles.icon}
            />
        </button>
    );
};

export default CardDetailBtn;
