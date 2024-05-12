import { createRoot } from "react-dom/client";
import React from "react";
import "../scss/style.scss";
import { bukaDatabase } from "./indexedDB";

import App from "./component/App";

const app = document.getElementById("app");
const root = createRoot(app);
bukaDatabase()
  .then((db) => {
    root.render(<App />);
  })
  .catch((e) => console.error("error : ", e));
