import React, { useContext } from "react";
import { KumuhTerpilih } from "./App";
import { hapusDataInvestasi, bukaDatabase } from "../indexedDB";
import trash from "../../../public/trash.svg";
import $ from "jquery";
import { Modal } from "bootstrap";

const Investasi = ({ tahun, loadRTKumuh }) => {
  const kumuhTerpilih = useContext(KumuhTerpilih);
  const data = [
    {
      aspek: "1. Kondisi Bangunan Gedung",
      kriteria: "a. Ketidakteraturan Bangunan",
      kriteriaSpan: 1,
      aspekSpan: 3,
      satuan: "Unit",
      id: "1a",
    },
    {
      aspek: "1",
      satuan: "Ha",
      kriteriaSpan: 1,
      kriteria: "b. Kepadatan Bangunan",
      id: "1b",
    },
    {
      id: "1c",
      aspek: "1",
      kriteriaSpan: 1,
      satuan: "Unit",
      kriteria: "c. Ketidaksesuaian Dengan Persy Teknis Bangunan",
    },
    {
      aspek: "2. Kondisi Jalan Lingkungan",
      kriteria: "a. Cakupan Pelayanan Jalan Lingkungan",
      kriteriaSpan: 1,
      satuan: "Meter",
      aspekSpan: 2,
      id: "2a",
    },
    {
      kriteriaSpan: 1,
      aspek: "2",
      kriteria: "b. Kualitas Permukaan Jalan Lingkungan",
      satuan: "Meter",
      id: "2b",
    },
    {
      kriteriaSpan: 1,
      aspek: "3. Kondisi Penyediaan Air Minum",
      satuan: "KK",
      kriteria: "a. Ketersediaan Akses Aman Air Minum",
      aspekSpan: 2,
      id: "3a",
    },
    {
      kriteriaSpan: 1,
      aspek: "3",
      satuan: "KK",
      kriteria: "b. Tidak Terpenuhinya Kebutuhan Air Minum",
      id: "3b",
    },
    {
      kriteriaSpan: 1,
      satuan: "Ha",
      aspek: "4. Kondisi Drainase Lingkungan",
      kriteria: "a. Ketidakmampuan Mengalirkan Limpasan Air",
      aspekSpan: 3,
      id: "4a",
    },
    {
      kriteriaSpan: 1,
      aspek: "4",
      satuan: "Meter",
      kriteria: "b. Ketidaktersediaan Drainase",
      id: "4b",
    },
    {
      kriteriaSpan: 1,
      aspek: "4",
      satuan: "Meter",
      kriteria: "c. Kualitas Konstruksi Drainase",
      id: "4c",
    },
    {
      kriteriaSpan: 1,
      satuan: "KK",
      aspek: "5. Kondisi Pengelolaan Air Limbah",
      kriteria: "a. Sistem Pengelolaan Air Limbah Tidak Sesuai Standar Teknis",
      aspekSpan: 2,
      id: "5a",
    },
    {
      kriteriaSpan: 1,
      satuan: "KK",
      aspek: "5",
      kriteria:
        "b. Prasarana Dan Sarana Pengelolaan Air Limbah Tidak Sesuai Dengan Persyaratan Teknis",
      id: "5b",
    },
    {
      aspek: "6. Kondisi Pengelolaan Persampahan",
      satuan: "KK",
      kriteriaSpan: 1,
      aspekSpan: 2,
      kriteria:
        "a. Prasarana Dan Sarana Persampahan Tidak Sesuai Dengan Persyaratan Teknis",
      id: "6a",
    },
    {
      kriteriaSpan: 1,
      satuan: "KK",
      aspek: "6",
      kriteria:
        "b. Sistem Pengelolaan Persampahan Yang Tidak Sesuai Standar Teknis",
      id: "6b",
    },
    {
      kriteriaSpan: 1,
      aspekSpan: 2,
      satuan: "Unit",
      aspek: "7. Kondisi Proteksi Kebakaran",
      kriteria: "a. Ketidaktersediaan Prasarana Proteksi Kebakaran",
      id: "7a",
    },
    {
      kriteriaSpan: 1,
      satuan: "Unit",
      aspek: "7",
      kriteria: "b. Ketidaktersediaan Sarana Proteksi Kebakaran",
      id: "7b",
    },
  ];
  if (kumuhTerpilih.investasi) {
    // masukkan data investasi ke dalam data urut kriteria, jika data di satu kriteria lebih dari satu, maka tambah data baru setelahnya
    kumuhTerpilih.investasi.forEach((inv) => {
      const index = data.findIndex((d) => d.id === inv.idKriteria);
      if (index !== -1) {
        if (!data[index].kegiatan) {
          data[index] = { ...inv, ...data[index] };
        } else {
          // menambahkan rowspan di data sebelumnya
          if (!data[index].aspekSpan) {
            const indexAspek = data.findIndex(
              (d) => d.id[0] === inv.idKriteria[0]
            );
            data[indexAspek].aspekSpan = data[indexAspek].aspekSpan + 1;
          } else {
            data[index].aspekSpan = data[index].aspekSpan + 1;
          }
          data[index].kriteriaSpan = data[index].kriteriaSpan + 1;
          let satuan = data[index].satuan;
          data.splice(index + 1, 0, { ...inv, satuan });
        }
      }
    });
  }
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
                {tahun == new Date().getFullYear() && kumuhTerpilih.r ? (
                  <th>AKSI</th>
                ) : null}
              </tr>
            </thead>
            <tbody>
              {data.map((d, i) => (
                <tr key={i}>
                  <>
                    {d.aspekSpan ? (
                      <th rowSpan={d.aspekSpan}>{d.aspek}</th>
                    ) : null}
                    {d.kriteriaSpan ? (
                      <td rowSpan={d.kriteriaSpan}>
                        {d.kriteria}
                        {tahun == new Date().getFullYear() &&
                        kumuhTerpilih.r ? (
                          <ButtonTambahKegiatan kriteria={d.id} />
                        ) : null}
                      </td>
                    ) : null}
                    {d.kegiatan ? (
                      <>
                        <td>{d.kegiatan}</td>
                        <td>{d.volume}</td>
                        <td>{d.satuan}</td>
                        <td>{d.sumberAnggaran}</td>
                        <td>{d.anggaran}</td>
                        {tahun == new Date().getFullYear() &&
                        kumuhTerpilih.r ? (
                          <TdBtnEditHapus
                            id={d.id}
                            loadRTKumuh={loadRTKumuh}
                          ></TdBtnEditHapus>
                        ) : null}
                      </>
                    ) : (
                      <td
                        className="text-center fst-italic text-danger"
                        colSpan={7}
                      >
                        {tahun == new Date().getFullYear()
                          ? "Belum "
                          : "Tidak "}
                        ada penanganan
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

const ButtonTambahKegiatan = ({ kriteria }) => {
  return (
    <>
      <br />
      <button
        type="button"
        className="btn btn-outline-primary tambahInvestasiBtn"
        data-bs-toggle="modal"
        data-bs-target="#modalInvestasi"
        data-bs-type="Tambah"
        data-bs-kriteria={kriteria}
      >
        Tambah Investasi
      </button>
    </>
  );
};

const TdBtnEditHapus = ({ id, loadRTKumuh }) => {
  const kumuhTerpilih = useContext(KumuhTerpilih);
  function handleBtnHapus() {
    $("#hapusData")
      .find(".btn-danger")
      .on("click", async () => {
        const db = await bukaDatabase();
        hapusDataInvestasi(id, db);
        loadRTKumuh(kumuhTerpilih.r, kumuhTerpilih.tahun);
        Modal.getOrCreateInstance($("#hapusData")[0]).hide();
      });
    Modal.getOrCreateInstance($("#hapusData")[0]).show();
  }
  return (
    <td className="d-flex gap-1">
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleBtnHapus(id)}
      >
        <img
          src={trash}
          className="text-white"
          alt="delete"
          width={20}
          height={20}
        />
      </button>
    </td>
  );
};
