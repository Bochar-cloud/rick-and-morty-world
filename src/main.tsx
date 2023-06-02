// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import Fonts from './styles/fonts';
import GlobalStyles from './styles/global';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    // <StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />

            <Fonts />
            <GlobalStyles />
        </BrowserRouter>
    </Provider>
    // </StrictMode>
);
