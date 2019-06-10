import * as React from 'react';
import { Provider } from 'react-redux';
import store from '~redux/store';
import { Action } from '~actions/types';
import { create as createNewGuyAction } from '~actions/newGuy';
import editGuy from '~actions/editGuy';

type Props = {
    children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ children }) => {
    React.useEffect(() => {
        store.dispatch(createNewGuyAction('foobar'));
        store.dispatch(editGuy('foobar', 'init', 15));
        store.dispatch(editGuy('foobar', 'ac', 13));
        store.dispatch(editGuy('foobar', 'name', 'Archideld'));
    }, []);

    return <Provider<Action> store={store}>{children}</Provider>;
};

export default ReduxProvider;
