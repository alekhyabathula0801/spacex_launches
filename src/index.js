import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PersistGate as ReduxPersistGate } from "redux-persist/integration/react";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";
import store, { persistor } from "./dataLayer/store";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import ThemeWrapper from "./theme/ThemeWrapper";

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ReduxPersistGate loading={null} persistor={persistor}>
        <ThemeWrapper>
          <RouterProvider router={router} />
        </ThemeWrapper>
      </ReduxPersistGate>
    </ReduxProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
