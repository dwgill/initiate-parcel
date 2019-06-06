import * as React from 'react';
import { Provider } from 'react-redux';
import store from '~redux/store';
import { Action } from '~actions/types';

type Props = {
    children: React.ReactElement;
};

const ReduxProvider: React.FC<Props> = ({ children }) => (
    <Provider<Action> store={store}>{children}</Provider>
);

export default ReduxProvider;
