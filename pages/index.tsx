import React from "react";
import { Provider } from "react-redux";
import App from "../src/App";
import store from "../src/core/reducers";
import reportWebVitals from "../src/reportWebVitals";
import Layout from '../src/ui/components/Layout/Layout'

export default function Home() {
  return (
 
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
   
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
reportWebVitals();
