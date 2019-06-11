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
        store.dispatch(createNewGuyAction('archideld'));
        store.dispatch(editGuy('archideld', 'init', 15));
        store.dispatch(editGuy('archideld', 'name', 'archideld has 15 init'));
        store.dispatch(createNewGuyAction('foobar'));
        store.dispatch(editGuy('foobar', 'init', 10));
        store.dispatch(editGuy('foobar', 'name', 'foobar has 10 init'));
        store.dispatch(createNewGuyAction('barfoo'));
        store.dispatch(editGuy('barfoo', 'init', 8));
        store.dispatch(editGuy('barfoo', 'name', 'barfoo has 8 init'));
    }, []);

    return <Provider<Action> store={store}>{children}</Provider>;
};

export default ReduxProvider;
