import React from "react";
import TabelKumuhAwalAkhir from "./TabelKumuhAwalAkhir";

const KumuhAkhir = () => {
  return (
    <div
      className="tab-pane fade "
      id="kumuh-akhir-tab-pane"
      role="tabpanel"
      aria-labelledby="kumuh-akhir-tab"
      tabIndex="0"
    >
      <TabelKumuhAwalAkhir></TabelKumuhAwalAkhir>
    </div>
  );
};
export default KumuhAkhir;
