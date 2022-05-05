import React from 'react';
import ReactDOM from 'react-dom/client';
import { AppCountry } from './AppCountry';
import { AppContextProvider } from './context/useAppContext';

import './styles/styles.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
        <AppCountry />
    </AppContextProvider>
);
