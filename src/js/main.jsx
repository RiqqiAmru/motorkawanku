import { createRoot } from "react-dom/client";
import React from "react";
import "../../public/favicon.ico";
import "../scss/style.scss";
import { bukaDatabase } from "./indexedDB";
import logo from "../../public/kotaPekalongan.png";
import img2 from "../../public/pekalongan-night.jpg";
import App from "./component/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const app = document.getElementById("app");
const root = createRoot(app);

const learn = document.getElementById("learn-more");
learn.addEventListener("click", () => {
  bukaDatabase()
    .then((db) => {
      root.render(
        <QueryClientProvider client={new QueryClient()}>
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      );
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
