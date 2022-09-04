import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import {createStore, State} from "./store/Store";
import { ClientRouter } from './components/AppRoutes';
import {HelmetProvider} from "react-helmet-async";

declare global {
    interface Window {
        __APP_STORE__?: Partial<State>;
    }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = createStore(window.__APP_STORE__);

root.render(
    <ClientRouter>
        <HelmetProvider>
            <App store={store}/>
        </HelmetProvider>
    </ClientRouter>
);

