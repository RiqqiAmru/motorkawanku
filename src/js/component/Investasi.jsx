import React from "react";

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
];

const Investasi = () => {
  return (
    <div
      className="tab-pane fade "
      id="investasi-tab-pane"
      role="tabpanel"
      aria-labelledby="investasi-tab"
      tabIndex="0"
    >
      <div className="merged-tables d-flex">
        <div className="table-container">
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>ASPEK</th>
                <th>KRITERIA</th>
                <th>KEGIATAN</th>
                <th>VOLUME</th>
                <th>SATUAN</th>
                <th>SUMBER ANGGARAN</th>
                <th>ANGGARAN</th>
                <th>AKSI</th>
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <>
                    {d.aspekSpan ? (
                      <th rowSpan={d.aspekSpan}>{d.aspek}</th>
                    ) : null}
                    <td>{d.kriteria}</td>
                    {d.kegiatan ? (
                      <td>{d.kegiatan}</td>
                    ) : (
                      <td
                        className="text-center fst-italic text-danger"
                        colSpan={7}
                      >
                        belum ada penanganan
                      </td>
                    )}
                  </>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Investasi;
