import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import FontStyles from './styled-components/FontStyle';
import GlobalStyles from './styled-components/GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <FontStyles />
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
