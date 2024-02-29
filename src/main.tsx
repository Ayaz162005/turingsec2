import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CurrentUserProvider } from "./context/CurrentUser.tsx";
import QueryContext from "./context/QueryContext.tsx";

// import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryContext>
      <CurrentUserProvider>
        {/* <ThemeProvider> */}

        <App />
      </CurrentUserProvider>
    </QueryContext>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
