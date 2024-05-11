import React, { useEffect, useContext } from "react";
import { kegiatanInvestasi } from "../loadData";
import {
  bukaDatabase,
  hapusDataInvestasi,
  saveDataInvestasi,
} from "../indexedDB";
import { KumuhTerpilih } from "./App";
const ModalTambahKegiatan = () => {
  const kumuhTerpilih = useContext(KumuhTerpilih);
  // cek button mana yang trigger modal
  useEffect(() => {
    const modalInvestasi = document.getElementById("modalInvestasi");
    if (modalInvestasi) {
      modalInvestasi.addEventListener("show.bs.modal", (event) => {
        // Button that triggered the modal
        const button = event.relatedTarget;
        // Extract info from data-bs-* attributes
        const title = button.getAttribute("data-bs-type");
        const kriteria = button.getAttribute("data-bs-kriteria");

        // get data from aspek.kriteria.json
        const kegiatan = kegiatanInvestasi.find((a) =>
          a.kriteria.find((k) => k === kriteria)
        );

        // if edit, get data from button
        if (title === "Edit") {
          const id = button.getAttribute("data-bs-id");
          const kegiatan = button.getAttribute("data-bs-kegiatan");
          const volume = button.getAttribute("data-bs-volume");
          const satuan = button.getAttribute("data-bs-satuan");
          const sumberAnggaran = button.getAttribute("data-bs-sumberAnggaran");
          const anggaran = button.getAttribute("data-bs-anggaran");

          const formInvestasi = modalInvestasi.querySelector("form");
          formInvestasi.querySelector("#id").value = id;
          formInvestasi.querySelector("#kegiatan").value = kegiatan;
          formInvestasi.querySelector("#volume").value = volume;
          formInvestasi.querySelector("#satuan").value = satuan;
          formInvestasi.querySelector("#sumberAnggaran").value = sumberAnggaran;
          formInvestasi.querySelector("#anggaran").value = anggaran;
        }

        // update modal content
        const inputKriteria = modalInvestasi.querySelector("#kriteria");
        inputKriteria.value = kriteria;
        const modalTitle = modalInvestasi.querySelector(".modal-title");
        modalTitle.textContent = `${title} Data`;
        let elKegiatan = modalInvestasi.querySelector("#kegiatan");
        elKegiatan.innerHTML = "<option  disabled>Pilih Kegiatan</option>";
        kegiatan.kegiatan.forEach((k) => {
          let el = document.createElement("option");
          el.value = k;
          el.innerHTML = k;
          elKegiatan.appendChild(el);
        });
        const satuan = modalInvestasi.querySelector("#satuan");
        satuan.value = kegiatan.satuan;
      });

      modalInvestasi.addEventListener("hide.bs.modal", (event) => {
        const formInvestasi = modalInvestasi.querySelector("form");
        formInvestasi.reset();
        formInvestasi.querySelector("#id").value = "";
      });

      // tambah data
      // const formInvestasi = modalInvestasi.querySelector("form");
      // formInvestasi.addEventListener("submit", (event) => {
      //   event.preventDefault();
      //   const formData = new FormData(formInvestasi);
      //   let data = {};
      //   formData.forEach((value, key) => {
      //     data[key] = value;
      //   });
      //   data["idKumuhRT"] = kumuhTerpilih.r.id;
      //   data["anggaran"] = data["anggaran"] * 1000;
      //   // save data to indexed db
      //   saveDataInvestasi(data);
      //   formInvestasi.reset();
      //   modalInvestasi.querySelector(".btn-close").click();
      // });
    }

    // hapus data investasi
    async function hapusInvestasi(id) {
      // tampilkan modal hapusData
      $("#hapusData")
        .find(".btn-danger")
        .on("click", async () => {
          hapusDataInvestasi(id);
          Modal.getOrCreateInstance($("#hapusData")[0]).hide();
        });
      Modal.getOrCreateInstance($("#hapusData")[0]).show();
    }
    // define hapusData
    document.hapusInvestasi = hapusInvestasi;
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    data["anggaran"] = data["anggaran"] * 1000;
    data["idRT"] = kumuhTerpilih.r.id;
    // save data to indexed db
    const db = await bukaDatabase();
    saveDataInvestasi(data, db);
    event.target.reset();
    document
      .getElementById("modalInvestasi")
      .querySelector(".btn-close")
      .click();
  }

  return (
    <div
      className="modal fade"
      id="modalInvestasi"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="labelModalInvestasi"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="labelModalInvestasi"></h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form onSubmit={handleSubmit} action="POST">
            <input type="hidden" name="kriteria" id="kriteria" />
            <input type="hidden" name="id" id="id" />
            <div className="modal-body" id="modalInvestasiBody">
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="kegiatan">
                  Kegiatan
                </label>
                <select
                  className="form-select"
                  id="kegiatan"
                  required
                  name="kegiatan"
                >
                  <option disabled>Pilih Kegiatan</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="sumberAnggaran">
                  Sumber Anggaran
                </label>
                <select
                  className="form-select"
                  id="sumberAnggaran"
                  required
                  name="sumberAnggaran"
                >
                  <option disabled aria-readonly="true">
                    Pilih Sumber Anggaran
                  </option>
                  <option value="APBD">APBD</option>
                  <option value="DAK">DAK</option>
                  <option value="APBD Provinsi">APBD Provinsi</option>
                  <option value="APBN">APBN</option>
                  <option value="CSR">CSR</option>
                  <option value="Dana Desa">Dana Desa</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="volume">
                  Volume Kegiatan
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="volume"
                  required
                  name="volume"
                />
                <input
                  type="text"
                  readOnly
                  className="input-group-text"
                  id="satuan"
                  value="Unit"
                  name="satuan"
                />
              </div>
              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="anggaran">
                  Anggaran{" "}
                </label>
                <span className="input-group-text">Rp.</span>
                <input
                  type="number"
                  className="form-control"
                  id="anggaran"
                  required
                  name="anggaran"
                />
                <span className="input-group-text">.000,--</span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-primary">
                Simpan Data
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ModalTambahKegiatan;