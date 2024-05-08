import React from "react";
import Baseline from "./Baseline";
import Investasi from "./Investasi";
import KumuhAkhir from "./KumuhAkhir";

const TabPane = ({ children, clickAwalAkhir }) => {
  return (
    <>
      <ul className="nav nav-tabs mb-2" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="baseline-tab"
            data-bs-toggle="tab"
            data-bs-target="#baseline-tab-pane"
            type="button"
            role="tab"
            aria-controls="baseline-tab-pane"
            aria-selected="true"
            onClick={() => clickAwalAkhir("awal")}
          >
            Baseline
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="investasi-tab"
            data-bs-toggle="tab"
            data-bs-target="#investasi-tab-pane"
            type="button"
            role="tab"
            aria-controls="investasi-tab-pane"
            aria-selected="false"
            onClick={() => clickAwalAkhir("akhir")}
          >
            investasi
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="kumuh-akhir-tab"
            data-bs-toggle="tab"
            data-bs-target="#kumuh-akhir-tab-pane"
            type="button"
            role="tab"
            aria-controls="kumuh-akhir-tab-pane"
            aria-selected="false"
            onClick={() => clickAwalAkhir("akhir")}
          >
            Kumuh Akhir
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <Baseline></Baseline>
        <Investasi></Investasi>
        {/* <KumuhAkhir></KumuhAkhir> */}
      </div>
    </>
  );
};
export default TabPane;
