import React from 'react';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import {Store} from "../store/Store";

interface Props {
    store: Store
}

function App(props: Props) {
    const { store } = props;
    return (
        <Provider store={store}>
            <AppRoutes />
        </Provider>
    );
}

export default App;
