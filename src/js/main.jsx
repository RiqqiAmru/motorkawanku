import { createRoot } from "react-dom/client";
import React from "react";
import "../scss/style.scss";
import { bukaDatabase } from "./indexedDB";
import logo from "../../public/kotaPekalongan.png";
import img2 from "../../public/pekalongan-night.jpg";
import favicon from "../../public/favicon.ico";

import App from "./component/App";

const app = document.getElementById("app");
const root = createRoot(app);

const learn = document.getElementById("learn-more");
learn.addEventListener("click", () => {
  bukaDatabase()
    .then((db) => {
      root.render(<App />);
    })
    .catch((e) => console.error("error : ", e));
});

const logoImg = document.getElementById("logo-pekalongan");
logoImg.src = logo;
logoImg.width = 50;

const cover = document.getElementById("cover");
cover.style.backgroundImage = `url(${img2})`;
cover.style.backgroundSize = "cover";
cover.style.backgroundPosition = "center";

const faviconLink = document.getElementById("favicon");
