import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./AppContext";

ReactDOM.render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);
