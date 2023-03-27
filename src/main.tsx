import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import FontStyles from './styled-components/FontStyle';
import GlobalStyles from './styled-components/GlobalStyles';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <FontStyles />
                <GlobalStyles />
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
