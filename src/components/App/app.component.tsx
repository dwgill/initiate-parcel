import * as React from 'react';
import ReduxProvider from '~components/ReduxProvider/reduxProvider';
import PageHeader from '~components/PageHeader/pageHeader.component';
import './app.styles.css';
import InitiativeList from '~components/InitiativeList/initiativeList.component';

const App: React.FC = () => (
    <ReduxProvider>
        <PageHeader />
        <InitiativeList />
    </ReduxProvider>
);

export default App;
