import React, { useEffect } from "react";
import { getDataInvestasi } from "../indexedDB";
import { decimaltoPercent, pembulatanDesimal } from "../util";
import hitungKumuhRTAkhir from "../rumus";

function TabelKumuhAwalAkhir({ kumuhRTawal, headerRT }) {
  const [investasi, setInvestasi] = React.useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getDataInvestasi();
      setInvestasi(data);
    };
    fetchData();
  }, []);

  const kumuhRTAkhir = hitungKumuhRTAkhir(investasi, kumuhRTawal, headerRT);

  const data = [
    {
      aspek: "1. Kondisi Bangunan Gedung",
      kriteria: "a. Ketidakteraturan Bangunan",
      aspekSpan: 3,
      satuan: "Unit",
      id: "1a",
    },
    {
      aspek: "1",
      satuan: "Ha",
      kriteria: "b. Kepadatan Bangunan",
      id: "1b",
    },
    {
      id: "1c",
      aspek: "1",
      satuan: "Unit",
      kriteria: "c. Ketidaksesuaian Dengan Persy Teknis Bangunan",
    },
    { aspek: "1", id: "1r", ratarata: "Rata-rata Kondisi Bangunan Gedung" },
    {
      aspek: "2. Kondisi Jalan Lingkungan",
      kriteria: "a. Cakupan Pelayanan Jalan Lingkungan",
      satuan: "Meter",
      aspekSpan: 2,
      id: "2a",
    },
    {
      aspek: "2",
      kriteria: "b. Kualitas Permukaan Jalan Lingkungan",
      satuan: "Meter",
      id: "2b",
    },
    {
      aspek: "2",
      satuan: "Meter",
      ratarata: "Rata-rata Kondisi Jalan Lingkungan",
      id: "2r",
    },
    {
      aspek: "3. Kondisi Penyediaan Air Minum",
      satuan: "KK",
      kriteria: "a. Ketersediaan Akses Aman Air Minum",
      aspekSpan: 2,
      id: "3a",
    },
    {
      aspek: "3",
      satuan: "KK",
      kriteria: "b. Tidak Terpenuhinya Kebutuhan Air Minum",
      id: "3b",
    },
    {
      aspek: "3",
      ratarata: "Rata-rata Kondisi Penyediaan Air Minum",
      id: "3r",
    },
    {
      satuan: "Ha",
      aspek: "4. Kondisi Drainase Lingkungan",
      kriteria: "a. Ketidakmampuan Mengalirkan Limpasan Air",
      aspekSpan: 3,
      id: "4a",
    },
    {
      aspek: "4",
      satuan: "Meter",
      kriteria: "b. Ketidaktersediaan Drainase",
      id: "4b",
    },
    {
      aspek: "4",
      satuan: "Meter",
      kriteria: "c. Kualitas Konstruksi Drainase",
      id: "4c",
    },
    { aspek: "4", ratarata: "Rata-rata Kondisi Drainase Lingkungan", id: "4r" },
    {
      satuan: "KK",
      aspek: "5. Kondisi Pengelolaan Air Limbah",
      kriteria: "a. Sistem Pengelolaan Air Limbah Tidak Sesuai Standar Teknis",
      aspekSpan: 2,
      id: "5a",
    },
    {
      satuan: "KK",
      aspek: "5",
      kriteria:
        "b. Prasarana Dan Sarana Pengelolaan Air Limbah Tidak Sesuai Dengan Persyaratan Teknis",
      id: "5b",
    },
    {
      aspek: "5",
      ratarata: "Rata-rata Kondisi Pengelolaan Air Limbah",
      id: "5r",
    },
    {
      aspek: "6. Kondisi Pengelolaan Persampahan",
      satuan: "KK",
      aspekSpan: 2,
      kriteria:
        "a. Prasarana Dan Sarana Persampahan Tidak Sesuai Dengan Persyaratan Teknis",
      id: "6a",
    },
    {
      satuan: "KK",
      aspek: "6",
      kriteria:
        "b. Sistem Pengelolaan Persampahan Yang Tidak Sesuai Standar Teknis",
      id: "6b",
    },
    {
      aspek: "6",
      ratarata: "Rata-rata Kondisi Pengelolaan Persampahan",
      id: "6r",
    },
    {
      aspekSpan: 2,
      satuan: "Unit",
      aspek: "7. Kondisi Proteksi Kebakaran",
      kriteria: "a. Ketidaktersediaan Prasarana Proteksi Kebakaran",
      id: "7a",
    },
    {
      satuan: "Unit",
      aspek: "7",
      kriteria: "b. Ketidaktersediaan Sarana Proteksi Kebakaran",
      id: "7b",
    },
    { aspek: "7", ratarata: "Rata-rata Kondisi Proteksi Kebakaran", id: "7r" },
  ];
  const footerKriteria = {
    totalNilai: "TOTAL NILAI",
    tingkatKekumuhan: "TINGKAT KEKUMUHAN",
    ratarataKekumuhan: "RATA-RATA KEKUMUHAN SEKTORAL",
    kontribusiPenanganan: "KONTRIBUSI PENANGANAN",
  };

  return (
    <>
      <table className="table table-bordered">
        <thead className="text-center">
          <tr>
            <th rowSpan={2}>ASPEK</th>
            <th rowSpan={2}>KRITERIA</th>
            <th colSpan={4} className="rb-3">
              AWAL
            </th>
            <th colSpan={4}>AKHIR</th>
          </tr>
          <tr>
            <th>VOLUME</th>
            <th>SATUAN</th>
            <th>PROSEN</th>
            <th className="rb-3">NILAI</th>
            <th>VOLUME</th>
            <th>SATUAN</th>
            <th>PROSEN</th>
            <th>NILAI</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              {d.ratarata ? (
                <>
                  <th colSpan={4} style={{ backgroundColor: "#05fff3" }}>
                    {d.ratarata}
                  </th>
                  <td
                    className="text-center "
                    style={{ backgroundColor: "#ffbb05" }}
                  >
                    {decimaltoPercent(kumuhRTawal[d.id])}
                  </td>
                  <td colSpan={3} style={{ backgroundColor: "#05fff3" }}></td>
                  <td
                    className="text-center "
                    style={{ backgroundColor: "#ffbb05" }}
                  >
                    0
                  </td>
                  <td style={{ backgroundColor: "#05fff3" }}></td>
                </>
              ) : (
                <>
                  {d.aspekSpan ? (
                    <th rowSpan={d.aspekSpan}>{d.aspek}</th>
                  ) : null}
                  <th>{d.kriteria}</th>
                  <td className="text-center">
                    {pembulatanDesimal(kumuhRTawal[`${d.id}v`] || 0)}
                  </td>
                  <td>{d.satuan}</td>
                  <td className="text-center">
                    {decimaltoPercent(kumuhRTawal[`${d.id}p`] || 0)}
                  </td>
                  <td className="text-center rb-3">
                    {kumuhRTawal[`${d.id}n`]}
                  </td>
                  <td className="text-center">0</td>
                  <td>{d.satuan}</td>
                  <td className="text-center">0</td>
                  <td className="text-center">0</td>
                </>
              )}
            </tr>
          ))}
          {Object.keys(footerKriteria).map((k, i) => (
            <tr key={i}>
              <th colSpan={2}>{footerKriteria[k]}</th>
              <TdPercentFormatFooter kriteria={k} data={kumuhRTawal[k]} />
              <td colSpan={4} className="text-center">
                0
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function TdPercentFormatFooter({ kriteria, data }) {
  if (kriteria === "totalNilai") {
    return (
      <td
        colSpan={4}
        className={
          data >= 60
            ? "text-center bg-danger"
            : data >= 38
            ? "text-center bg-warning"
            : data >= 16
            ? "text-center "
            : "text-center bg-success"
        }
        style={data >= 16 && data < 38 ? { backgroundColor: "yellow" } : ""}
      >
        {data}
      </td>
    );
  }
  if (kriteria === "tingkatKekumuhan") {
    return (
      <td
        colSpan={4}
        className={
          data == "KB"
            ? "text-center bg-danger"
            : data == "KS"
            ? "text-center bg-warning"
            : data == "KR"
            ? "text-center "
            : "text-center bg-success"
        }
        style={data == "KR" ? { backgroundColor: "yellow" } : ""}
      >
        {data == "KB"
          ? "KUMUH BERAT"
          : data == "KS"
          ? "KUMUH SEDANG"
          : data == "KR"
          ? "KUMUH RINGAN"
          : data == "TK"
          ? "TIDAK KUMUH"
          : data}
      </td>
    );
  } else {
    return (
      <td colSpan={4} className="text-center">
        {decimaltoPercent(data)}
      </td>
    );
  }
}

export default TabelKumuhAwalAkhir;
