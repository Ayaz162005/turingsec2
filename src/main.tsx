import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { CurrentUserProvider } from "./context/CurrentUser.tsx";

// import { ThemeProvider } from "./context/ThemeContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CurrentUserProvider>
      {/* <ThemeProvider> */}

      <App />
    </CurrentUserProvider>
    {/* </ThemeProvider> */}
  </React.StrictMode>
);
