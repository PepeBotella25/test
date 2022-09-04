import React from 'react';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import {Store} from "../store/Store";
import {HelmetProvider} from "react-helmet-async";

interface Props {
    store: Store
}

function App(props: Props) {
    const { store } = props;
    return (
        <Provider store={store}>
            <HelmetProvider>
                <AppRoutes />
            </HelmetProvider>
        </Provider>
    );
}

export default App;
