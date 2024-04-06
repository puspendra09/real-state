import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './components/Router'

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;
