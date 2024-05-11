import React from "react";

const Header = ({
  kota,
  kawasan,
  loadKawasanKumuh,
  loadRTKumuh,
  kawasanKumuh,
  handleTahun,
  tahun,
}) => {
  let luasVerifikasi = null;
  let jumlahBangunan = 0;
  let jumlahPenduduk = 0;
  let jumlahKK = 0;
  if (kawasanKumuh.kumuh === "k") {
    luasVerifikasi = kawasanKumuh.k.luasVerifikasi.toFixed(2);
    jumlahBangunan = kawasanKumuh.k.jumlahBangunan;
    jumlahPenduduk = kawasanKumuh.k.jumlahPenduduk;
    jumlahKK = kawasanKumuh.k.jumlahKK;
  } else if (kawasanKumuh.kumuh === "r") {
    luasVerifikasi = kawasanKumuh.r.luasVerifikasi.toFixed(2);
    jumlahBangunan = kawasanKumuh.r.jumlahBangunan;
    jumlahPenduduk = kawasanKumuh.r.jumlahPenduduk;
    jumlahKK = kawasanKumuh.r.jumlahKK;
  }

  function handleOnChangeKawasan(e) {
    if (parseInt(e.target.value) === 0) {
      return;
    }
    const k = kawasan.find((k) => k.id === parseInt(e.target.value));
    loadKawasanKumuh(k, tahun);
  }
  function handleOnChangeRT(e) {
    if (parseInt(e.target.value) === 0) return;
    const r = kawasanKumuh.semuaRT.find(
      (r) => r.id === parseInt(e.target.value)
    );
    loadRTKumuh(r, tahun);
  }

  return (
    <>
      {/* header */}
      <div className="col-md-6">
        <table className="table table-bordered table-sm">
          <tbody>
            <tr>
              <th>Provinsi</th>
              <td>{kota.provinsi}</td>
            </tr>
            <tr>
              <th>Kabupaten/Kota</th>
              <td>{kota.kota}</td>
            </tr>
            <tr>
              <th>Kecamatan</th>
              <td>{kawasanKumuh.k && kawasanKumuh.k.wilayah}</td>
            </tr>
            <tr>
              <th>Kelurahan</th>
              <td>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={handleOnChangeKawasan}
                >
                  <option value="0">Pilih Kawasan</option>
                  {kawasan.map((kec, i) => (
                    <option key={"kel" + i} value={kec.id}>
                      {kec.kawasan}
                    </option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <th>Wilayah RT/RW</th>
              <td>
                <select className="form-select" onChange={handleOnChangeRT}>
                  <option value={0}>Pilih RT/RW</option>
                  {kawasanKumuh.semuaRT &&
                    kawasanKumuh.semuaRT.map((r, i) => (
                      <option key={"rtrw" + i} value={r.id}>
                        {r.rtrw}
                      </option>
                    ))}
                </select>
              </td>
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

export default Header;
