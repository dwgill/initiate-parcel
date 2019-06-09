import * as React from 'react';
import ReduxProvider from '~components/ReduxProvider/reduxProvider';
import PageHeader from '~components/PageHeader/pageHeader.component';
import './app.styles.css';

const App: React.FC = () => (
    <ReduxProvider>
        <PageHeader />
    </ReduxProvider>
);

export default App;
