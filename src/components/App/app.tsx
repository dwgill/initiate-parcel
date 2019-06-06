import * as React from 'react';
import ReduxProvider from '~components/ReduxProvider/reduxProvider';

const App: React.FC = () => (
    <ReduxProvider>
        <p>Hello world!</p>
    </ReduxProvider>
);

export default App;
