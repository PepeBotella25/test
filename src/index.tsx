import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import {createStore, State} from "./store/Store";
import {ClientRouter} from './components/AppRoutes';
import {HelmetProvider} from "react-helmet-async";

declare global {
    interface Window {
        __APP_STORE__?: Partial<State>;
    }
}

const store = createStore(window.__APP_STORE__);

ReactDOM.hydrateRoot(
    document.getElementById('root') as HTMLElement,
    <ClientRouter>
        <HelmetProvider>
            <App store={store}/>
        </HelmetProvider>
    </ClientRouter>
);

