import { createRoot } from "react-dom/client";
import React from "react";
import "../scss/style.scss";
import { bukaDatabase } from "./indexedDB";

// import { createPolygon } from "./leafletMap";
import App from "./component/App";

// document.addEventListener("DOMContentLoaded", load);
const domNode = document.getElementById("kumuh-akhir-tab-pane");
// const tabKumuhAkhir = createRoot(domNode);

const app = document.getElementById("app");
const root = createRoot(app);
bukaDatabase()
  .then((db) => {
    root.render(<App />);
  })
  .catch((e) => console.error("error : ", e));

// function load() {
//   dataToElement("provinsi", kota.provinsi);
//   dataToElement("kota", kota.kota);
//   dataToElement("kecamatan", kecamatan[0].wilayah);
//   let elKelurahan = document.getElementById("kelurahan");
//   kecamatan.forEach((k) => {
//     let el = document.createElement("li");
//     el.innerHTML = k.kawasan;
//     el.classList.add("link");
//     el.addEventListener("click", () => loadKumuhKawasan(k, el));
//     elKelurahan.appendChild(el);
//   });
// }

// function loadKumuhKawasan(kawasanKumuh, element) {
//   // get latlngs
//   const dataCoordinate = latlng.find(
//     (l) => (l.kelurahan === kawasanKumuh.kawasan) & (l.kodeRTRW === undefined)
//   );
//   let aspekKumuh = kumuhKawasan.find((k) => k.kawasan === kawasanKumuh.id);
//   dataCoordinate["tingkatKekumuhan"] = aspekKumuh.tingkatKekumuhan;

//   createPolygon(dataCoordinate);

//   styleSelected(element);
//   $("#myTab").attr("hidden", true);

//   let rtrwKumuh = rtrw.filter((r) => r.kawasan === kawasanKumuh.id);

//   let elRtRw = document.getElementById("rtrw");
//   elRtRw.innerHTML = "";
//   rtrwKumuh.forEach((r) => {
//     let el = document.createElement("li");
//     el.innerHTML = r.rtrw;
//     el.classList.add("link");
//     el.addEventListener("click", () => loadKumuhRT(r, el, kawasanKumuh));
//     elRtRw.appendChild(el);
//   });

//   loadHeaderKumuh(kawasanKumuh);

//   // get aspek kumuh kawasan
//   loadAspekKumuh(aspekKumuh);
// }

// function loadKumuhRT(rtKumuh, element, kawasanKumuh) {
//   let aspekKumuh = kumuhRT.find((k) => k.rt === rtKumuh.id);

//   const dataCoordinate = latlng.find(
//     (l) =>
//       (l.kelurahan === kawasanKumuh.kawasan) & (l.kodeRTRW === rtKumuh.rtrw)
//   );
//   dataCoordinate["tingkatKekumuhan"] = aspekKumuh.tingkatKekumuhan;
//   createPolygon(dataCoordinate);

//   styleSelected(element);
//   loadHeaderKumuh(rtKumuh);
//   loadAspekKumuh(aspekKumuh);
//   $("#myTab").removeAttr("hidden");
//   loadPageInvestasi(2024, aspekKumuh.id);

//   // tabKumuhAkhir.render(
//   //   <TabelKumuhAwalAkhir kumuhRTawal={aspekKumuh} headerRT={rtKumuh} />
//   // );
// }

// /**
//  *
//  * @param {*} lokasi kawasan / rt rw
//  *
//  * @description load data to Header
//  */
// function loadHeaderKumuh(lokasi) {
//   dataToElement("luasVerifikasi", lokasi.luasVerifikasi.toFixed(2));
//   dataToElement("jumlahBangunan", lokasi.jumlahBangunan);
//   dataToElement("jumlahPenduduk", lokasi.jumlahPenduduk);
//   dataToElement("jumlahKK", lokasi.jumlahKK);

//   // panjang jalan & drainase
// }
// /**
//  *
//  * @param {*} aspekKumuh data aspek kumuh
//  * @description load data to tabel aspek kumuh
//  */
// function loadAspekKumuh(aspekKumuh) {
//   dataToElement("1av", aspekKumuh["1av"]);
//   dataToElement("1ap", decimaltoPercent(aspekKumuh["1ap"]));
//   dataToElement("1an", aspekKumuh["1an"]);
//   dataToElement("1bv", aspekKumuh["1bv"]);
//   dataToElement("1bp", decimaltoPercent(aspekKumuh["1bp"]));
//   dataToElement("1bn", aspekKumuh["1bn"]);
//   dataToElement("1cv", aspekKumuh["1cv"]);
//   dataToElement("1cp", decimaltoPercent(aspekKumuh["1cp"]));
//   dataToElement("1cn", aspekKumuh["1cn"]);
//   dataToElement("1r", decimaltoPercent(aspekKumuh["1r"]));

//   dataToElement("2av", aspekKumuh["2av"]);
//   dataToElement("2ap", decimaltoPercent(aspekKumuh["2ap"]));
//   dataToElement("2an", aspekKumuh["2an"]);
//   dataToElement("2bv", aspekKumuh["2bv"]);
//   dataToElement("2bp", decimaltoPercent(aspekKumuh["2bp"]));
//   dataToElement("2bn", aspekKumuh["2bn"]);
//   dataToElement("2r", decimaltoPercent(aspekKumuh["2r"]));

//   dataToElement("3av", aspekKumuh["3av"]);
//   dataToElement("3ap", decimaltoPercent(aspekKumuh["3ap"]));
//   dataToElement("3an", aspekKumuh["3an"]);
//   dataToElement("3bv", aspekKumuh["3bv"]);
//   dataToElement("3bp", decimaltoPercent(aspekKumuh["3bp"]));
//   dataToElement("3bn", aspekKumuh["3bn"]);
//   dataToElement("3r", decimaltoPercent(aspekKumuh["3r"]));

//   dataToElement("4av", aspekKumuh["4av"].toFixed(2));
//   dataToElement("4ap", decimaltoPercent(aspekKumuh["4ap"]));
//   dataToElement("4an", aspekKumuh["4an"]);
//   dataToElement("4bv", aspekKumuh["4bv"]);
//   dataToElement("4bp", decimaltoPercent(aspekKumuh["4bp"]));
//   dataToElement("4bn", aspekKumuh["4bn"]);
//   dataToElement("4cv", aspekKumuh["4cv"]);
//   dataToElement("4cp", decimaltoPercent(aspekKumuh["4cp"]));
//   dataToElement("4cn", aspekKumuh["4cn"]);
//   dataToElement("4r", decimaltoPercent(aspekKumuh["4r"]));

//   dataToElement("5av", aspekKumuh["5av"]);
//   dataToElement("5ap", decimaltoPercent(aspekKumuh["5ap"]));
//   dataToElement("5an", aspekKumuh["5an"]);
//   dataToElement("5bv", aspekKumuh["5bv"]);
//   dataToElement("5bp", decimaltoPercent(aspekKumuh["5bp"]));
//   dataToElement("5bn", aspekKumuh["5bn"]);
//   dataToElement("5r", decimaltoPercent(aspekKumuh["5r"]));

//   dataToElement("6av", aspekKumuh["6av"]);
//   dataToElement("6ap", decimaltoPercent(aspekKumuh["6ap"]));
//   dataToElement("6an", aspekKumuh["6an"]);
//   dataToElement("6bv", aspekKumuh["6bv"]);
//   dataToElement("6bp", decimaltoPercent(aspekKumuh["6bp"]));
//   dataToElement("6bn", aspekKumuh["6bn"]);
//   dataToElement("6r", decimaltoPercent(aspekKumuh["6r"]));

//   dataToElement("7av", aspekKumuh["7av"]);
//   dataToElement("7ap", decimaltoPercent(aspekKumuh["7ap"]));
//   dataToElement("7an", aspekKumuh["7an"]);
//   dataToElement("7bv", aspekKumuh["7bv"]);
//   dataToElement("7bp", decimaltoPercent(aspekKumuh["7bp"]));
//   dataToElement("7bn", aspekKumuh["7bn"]);
//   dataToElement("7r", decimaltoPercent(aspekKumuh["7r"]));

//   dataToElement("totalNilai", aspekKumuh["totalNilai"]);
//   dataToElement("tingkatKekumuhan", aspekKumuh["tingkatKekumuhan"]);
//   dataToElement(
//     "ratarataKekumuhan",
//     decimaltoPercent(aspekKumuh["ratarataKekumuhan"])
//   );
//   dataToElement(
//     "kontribusiPenanganan",
//     decimaltoPercent(aspekKumuh["kontribusiPenanganan"])
//   );
// }
// /**
//  * @description load tab investasi penanganan kumuh
//  * @param {*} investasi data investasi
//  * @param {int} tahun tahun data investasi
//  */
// function loadPageInvestasi(tahun = 0, idRT) {
//   let tableInvestasi = document.getElementById("tabelPenanganan");
//   tableInvestasi.setAttribute("data-id-kumuh-rt", idRT);
//   loadTabelInvestasi(idRT);
//   if (tahun == new Date().getFullYear()) {
//     const modalInvestasi = document.getElementById("modalInvestasi");
//     if (modalInvestasi) {
//       modalInvestasi.addEventListener("show.bs.modal", (event) => {
//         // Button that triggered the modal
//         const button = event.relatedTarget;
//         // Extract info from data-bs-* attributes
//         const title = button.getAttribute("data-bs-type");
//         const kriteria = button.getAttribute("data-bs-kriteria");

//         // get data from aspek.kriteria.json
//         const kegiatan = kegiatanInvestasi.find((a) =>
//           a.kriteria.find((k) => k === kriteria)
//         );

//         // if edit, get data from button
//         if (title === "Edit") {
//           const id = button.getAttribute("data-bs-id");
//           const kegiatan = button.getAttribute("data-bs-kegiatan");
//           const volume = button.getAttribute("data-bs-volume");
//           const satuan = button.getAttribute("data-bs-satuan");
//           const sumberAnggaran = button.getAttribute("data-bs-sumberAnggaran");
//           const anggaran = button.getAttribute("data-bs-anggaran");

//           const formInvestasi = modalInvestasi.querySelector("form");
//           formInvestasi.querySelector("#id").value = id;
//           formInvestasi.querySelector("#kegiatan").value = kegiatan;
//           formInvestasi.querySelector("#volume").value = volume;
//           formInvestasi.querySelector("#satuan").value = satuan;
//           formInvestasi.querySelector("#sumberAnggaran").value = sumberAnggaran;
//           formInvestasi.querySelector("#anggaran").value = anggaran;
//         }

//         // update modal content
//         const inputKriteria = modalInvestasi.querySelector("#kriteria");
//         inputKriteria.value = kriteria;
//         const modalTitle = modalInvestasi.querySelector(".modal-title");
//         modalTitle.textContent = `${title} Data`;
//         let elKegiatan = modalInvestasi.querySelector("#kegiatan");
//         elKegiatan.innerHTML = "<option  disabled>Pilih Kegiatan</option>";
//         kegiatan.kegiatan.forEach((k) => {
//           let el = document.createElement("option");
//           el.value = k;
//           el.innerHTML = k;
//           elKegiatan.appendChild(el);
//         });
//         const satuan = modalInvestasi.querySelector("#satuan");
//         satuan.value = kegiatan.satuan;
//       });

//       modalInvestasi.addEventListener("hide.bs.modal", (event) => {
//         const formInvestasi = modalInvestasi.querySelector("form");
//         formInvestasi.reset();
//         formInvestasi.querySelector("#id").value = "";
//       });

//       // tambah data
//       const formInvestasi = modalInvestasi.querySelector("form");
//       formInvestasi.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const formData = new FormData(formInvestasi);
//         let data = {};
//         formData.forEach((value, key) => {
//           data[key] = value;
//         });
//         data["idKumuhRT"] = tableInvestasi.getAttribute("data-id-kumuh-rt");
//         data["anggaran"] = data["anggaran"] * 1000;
//         // save data to indexed db
//         saveDataInvestasi(data);
//         formInvestasi.reset();
//         modalInvestasi.querySelector(".btn-close").click();
//         loadTabelInvestasi(idRT);
//       });
//     }

//     // hapus data investasi
//     async function hapusInvestasi(id) {
//       // tampilkan modal hapusData
//       $("#hapusData")
//         .find(".btn-danger")
//         .on("click", async () => {
//           hapusDataInvestasi(id);
//           loadTabelInvestasi(idRT);
//           Modal.getOrCreateInstance($("#hapusData")[0]).hide();
//         });
//       Modal.getOrCreateInstance($("#hapusData")[0]).show();
//     }
//     // define hapusData
//     document.hapusInvestasi = hapusInvestasi;
//   }
// }
