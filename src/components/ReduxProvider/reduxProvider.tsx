import * as React from 'react';
import { Provider } from 'react-redux';
import newGuy from '~actions/newGuy';
import { Action } from '~actions/types';
import store from '~redux/store';
import getNumGuys from '~redux/selectors/getNumGuys';

type Props = {
    children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => {
    React.useEffect(() => {
        if (getNumGuys(store.getState()) === 0) {
            store.dispatch(newGuy());
        }
    }, []);

    return <Provider<Action> store={store}>{children}</Provider>;
};

export default ReduxProvider;
