import React, { useContext } from "react";
import {
  data,
  footerKriteria,
  TdPercentFormatFooter,
} from "./TabelKumuhAwalAkhir";
import { decimaltoPercent, pembulatanDesimal } from "../util";
import { KumuhTerpilih } from "./App";

const Baseline = () => {
  const kumuhTerpilih = useContext(KumuhTerpilih);
  let dataKumuh = [];
  if (kumuhTerpilih.dataKumuh) {
    dataKumuh = kumuhTerpilih.dataKumuh && kumuhTerpilih.dataKumuh;
  }
  return (
    <div
      className="tab-pane fade show active"
      id="baseline-tab-pane"
      role="tabpanel"
      aria-labelledby="baseline-tab"
      tabIndex="0"
    >
      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th>ASPEK</th>
            <th>KRITERIA</th>
            <th>VOLUME</th>
            <th>SATUAN</th>
            <th>PROSEN</th>
            <th>NILAI</th>
          </tr>
        </thead>
        {dataKumuh && (
          <tbody>
            {data.map((d, i) => (
              <tr key={i}>
                {d.ratarata ? (
                  <>
                    <th
                      colSpan={4}
                      style={{ backgroundColor: "#05fff3" }}
                      className="text-center"
                    >
                      {d.ratarata}
                    </th>
                    <td
                      className="text-center"
                      style={{ backgroundColor: "#ffbb05" }}
                    >
                      {decimaltoPercent(dataKumuh[d.id])}
                    </td>
                    <td style={{ backgroundColor: "#05fff3" }}></td>
                  </>
                ) : (
                  <>
                    {d.aspekSpan ? (
                      <th rowSpan={d.aspekSpan}>{d.aspek}</th>
                    ) : null}
                    <td>{d.kriteria}</td>
                    <td className="text-center">
                      {pembulatanDesimal(dataKumuh[`${d.id}v`] || 0)}
                    </td>
                    <td>{d.satuan}</td>
                    <td className="text-center">
                      {decimaltoPercent(dataKumuh[`${d.id}p`] || 0)}
                    </td>
                    <td className="text-center ">{dataKumuh[`${d.id}n`]}</td>
                  </>
                )}
              </tr>
            ))}
            {Object.keys(footerKriteria).map((k, i) => (
              <tr key={i}>
                <th colSpan={2}>{footerKriteria[k]}</th>
                <TdPercentFormatFooter kriteria={k} data={dataKumuh[k]} />
              </tr>
            ))}
          </tbody>
        )}
        <tfoot className="text-center">
          <tr>
            <td colSpan={6}></td>
          </tr>
          <tr>
            <td colSpan={2} rowSpan={4}>
              BATAS AMBANG NILAI TINGKAT KEKUMUHAN
            </td>
            <td className="bg-danger" colSpan={4}>
              60 - 80 KUMUH BERAT
            </td>
          </tr>
          <tr>
            <td className="bg-warning" colSpan={4}>
              38 - 59 KUMUH SEDANG
            </td>
          </tr>
          <tr>
            <td className="bg-kuning" colSpan={4}>
              16 - 37 KUMUH RINGAN
            </td>
          </tr>
          <tr>
            <td className="bg-success" colSpan={4}>
              &lt; 16 TIDAK KUMUH
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
export default Baseline;
