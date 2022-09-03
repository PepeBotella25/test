import React from 'react';
import AppRoutes from "./AppRoutes";
import {Provider} from "react-redux";
import store from "../store/Store";
import {HelmetProvider} from "react-helmet-async";

function App() {
  return (
      <Provider store={store}>
          <HelmetProvider>
              <AppRoutes />
          </HelmetProvider>
      </Provider>
    );
}

export default App;
