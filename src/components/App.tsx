import React from 'react';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import store from "../store/Store";

function App() {
  return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
}

export default App;
