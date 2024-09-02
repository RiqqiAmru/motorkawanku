import React from "react";
import Proptypes from "prop-types";
const Header = ({
  status,
  statusHeaderKawasan,
  statusHeaderRT,
  kota,
  headerKawasan,
  headerRT,
  loadKawasanKumuh,
  loadRTKumuh,
  handleTahun,
  tahun,
}) => {
  let luasVerifikasi = 0;
  let jumlahBangunan = 0;
  let jumlahPenduduk = 0;
  let jumlahKK = 0;
  // if (kawasanKumuh.kumuh === "k") {
  //   luasVerifikasi = kawasanKumuh.k.luasVerifikasi.toFixed(2);
  //   jumlahBangunan = kawasanKumuh.k.jumlahBangunan;
  //   jumlahPenduduk = kawasanKumuh.k.jumlahPenduduk;
  //   jumlahKK = kawasanKumuh.k.jumlahKK;
  // } else if (kawasanKumuh.kumuh === "r") {
  //   luasVerifikasi = kawasanKumuh.r.luasVerifikasi.toFixed(2);
  //   jumlahBangunan = kawasanKumuh.r.jumlahBangunan;
  //   jumlahPenduduk = kawasanKumuh.r.jumlahPenduduk;
  //   jumlahKK = kawasanKumuh.r.jumlahKK;
  // }

  function handleOnChangeKawasan(e) {
    let k = { id: parseInt(e.target.value) };
    loadKawasanKumuh(k, tahun);
  }
  function handleOnChangeRT(e) {
    let r = { id: parseInt(e.target.value) };
    loadRTKumuh(r, tahun);
  }
  let provinsi = "loading ...";
  let kabupaten = "loading ...";
  let kelurahan = "loading ...";
  if (status == "error") {
    provinsi = "error fetching data ";
    kabupaten = "error fetching data ";
    kelurahan = "error fetching data ";
  } else if (status == "success") {
    provinsi = kota.provinsi;
    kabupaten = kota.kota;
    kelurahan = (
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleOnChangeKawasan}
      >
        <option value="0">Pilih Kawasan</option>
        {kota.kec.map((kec, i) => (
          <option key={"kel" + i} value={kec.id}>
            {kec.kawasan}
          </option>
        ))}
      </select>
    );
  }

  let wilayah = "";
  let rt = "";
  if (statusHeaderKawasan == "error") {
    wilayah = "error fetching data ";
    rt = "error fetching data";
  } else if (statusHeaderKawasan == "success") {
    wilayah = headerKawasan.wilayah;
    rt = (
      <select className="form-select" onChange={handleOnChangeRT}>
        <option value={0}>Pilih RT/RW</option>
        {headerKawasan.rt.map((r, i) => (
          <option key={"rtrw" + i} value={r.id}>
            {r.rtrw}
          </option>
        ))}
      </select>
    );
    if (statusHeaderRT == "success") {
      luasVerifikasi = headerRT.luasVerifikasi.toFixed(2);
      jumlahBangunan = headerRT.jumlahBangunan;
      jumlahKK = headerRT.jumlahKK;
      jumlahPenduduk = headerRT.jumlahPenduduk;
    } else {
      luasVerifikasi = headerKawasan.luasVerifikasi.toFixed(2);
      jumlahBangunan = headerKawasan.jumlahBangunan;
      jumlahKK = headerKawasan.jumlahKK;
      jumlahPenduduk = headerKawasan.jumlahPenduduk;
    }
  }

  return (
    <>
      {/* header */}
      <div className="col-md-6">
        <table className="table table-bordered table-sm">
          <tbody>
            <tr>
              <th>Provinsi</th>
              <td>{provinsi}</td>
            </tr>
            <tr>
              <th>Kabupaten/Kota</th>
              <td>{kabupaten}</td>
            </tr>
            <tr>
              <th>Kecamatan</th>
              <td>{wilayah}</td>
            </tr>
            <tr>
              <th>Kelurahan</th>
              <td>{kelurahan}</td>
            </tr>
            <tr>
              <th>Wilayah RT/RW</th>
              <td>{rt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <table className="table table-bordered table-sm ">
          <tbody>
            <tr>
              <td>Luas Verifikasi (Ha)</td>
              <td>{luasVerifikasi}</td>
            </tr>
            <tr>
              <td>Jumlah Bangunan (Unit)</td>
              <td>{jumlahBangunan}</td>
            </tr>
            <tr>
              <td>Jumlah Penduduk (jiwa)</td>
              <td>{jumlahPenduduk}</td>
            </tr>
            <tr>
              <td>Jumlah KK (kk)</td>
              <td>{jumlahKK}</td>
            </tr>
          </tbody>
        </table>
        <table className="table table-bordered table-sm">
          <thead>
            <tr className="text-center">
              <th colSpan={5}>TAHUN</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <SemuaTahun handleTahun={handleTahun} tahun={tahun}></SemuaTahun>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

function SemuaTahun({ handleTahun, tahun }) {
  const tahunIni = new Date().getFullYear();
  const tahunArray = [];
  for (let i = tahunIni; i >= 2020; i--) {
    tahunArray.push(i);
  }
  return tahunArray.map((t, i) => (
    <td key={i}>
      <span
        className={tahun === t ? " selected link " : "link"}
        onClick={() => handleTahun(t)}
      >
        {t}
      </span>
    </td>
  ));
}

Header.propTypes = {
  kota: Proptypes.object.isRequired,
  headerKawasan: Proptypes.object,
  headerRT: Proptypes.object,
  kawasanKumuh: Proptypes.object.isRequired,
  status: Proptypes.string.isRequired,
  statusHeaderKawasan: Proptypes.string,
  statusHeaderRT: Proptypes.string,
  loadKawasanKumuh: Proptypes.func,
  loadRTKumuh: Proptypes.func,
  handleTahun: Proptypes.func,
  tahun: Proptypes.number,
};
export default Header;
