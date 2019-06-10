import * as React from 'react';
import { Provider } from 'react-redux';
import store from '~redux/store';
import { Action } from '~actions/types';
import { create as createNewGuyAction } from '~actions/newGuy';

type Props = {
    children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => {
    React.useEffect(() => {
        store.dispatch(createNewGuyAction());
    }, []);

    return <Provider<Action> store={store}>{children}</Provider>;
};

export default ReduxProvider;
