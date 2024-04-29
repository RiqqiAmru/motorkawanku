import React from "react";

import { createRoot } from "react-dom/client";
import { NavTabbedPane } from "./component/navTabbedPane.jsx";
const domNod = document.getElementById("nav");
const root = createRoot(domNod);

root.render(<NavTabbedPane />);
