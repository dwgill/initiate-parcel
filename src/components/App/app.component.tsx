import * as React from 'react';
import ReduxProvider from '~components/ReduxProvider/reduxProvider';
import PageHeader from '~components/PageHeader/pageHeader.component';
import './app.styles.css';
import InitiativePanel from '~components/InitiativePanel/initiativePanel.component';
// import Init from '~components/GuyCardList/guyCardList.component';

const App: React.FC = () => (
    <ReduxProvider>
        <PageHeader />
        <InitiativePanel />
    </ReduxProvider>
);

export default App;
