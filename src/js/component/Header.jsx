import React from "react";

const Header = ({
  kota,
  kawasan,
  loadKawasanKumuh,
  loadRTKumuh,
  kawasanKumuh,
}) => {
  let luasVerifikasi = 0;
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
                <ol className="pl-3 mb-0">
                  {kawasan.map((kec, i) => (
                    <li
                      key={"kel" + i}
                      className="link "
                      onClick={() => loadKawasanKumuh(kec)}
                    >
                      <span
                        className={
                          kawasanKumuh.k && kawasanKumuh.k.id === kec.id
                            ? "selected"
                            : ""
                        }
                      >
                        {kec.kawasan}
                      </span>
                    </li>
                  ))}
                </ol>
              </td>
            </tr>
            <tr>
              <th>Wilayah RT/RW</th>
              <td>
                <ol className="pl-3 mb-0">
                  {kawasanKumuh.semuaRT &&
                    kawasanKumuh.semuaRT.map((r, i) => (
                      <li
                        key={"rtrw" + i}
                        className="link"
                        onClick={() => loadRTKumuh(r)}
                      >
                        <span
                          className={
                            kawasanKumuh.r && kawasanKumuh.r.id === r.id
                              ? "selected"
                              : ""
                          }
                        >
                          {r.rtrw}
                        </span>
                      </li>
                    ))}
                </ol>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="col-md-6">
        <table className="table table-bordered table-sm">
          <tbody>
            <tr>
              <td colSpan={3}>Luas Verifikasi (Ha)</td>
              <td colSpan={2}>{luasVerifikasi}</td>
            </tr>
            <tr>
              <td colSpan={3}>Jumlah Bangunan (Unit)</td>
              <td colSpan={2}>{jumlahBangunan}</td>
            </tr>
            <tr>
              <td colSpan={3}>Jumlah Penduduk (jiwa)</td>
              <td colSpan={2}>{jumlahPenduduk}</td>
            </tr>
            <tr>
              <td colSpan={3}>Jumlah KK (kk)</td>
              <td colSpan={2}>{jumlahKK}</td>
            </tr>
            <tr>
              <th colSpan={5} className="text-center">
                TAHUN
              </th>
            </tr>
            <tr className="text-center">
              <td className="link">2020</td>
              <td className="link">2021</td>
              <td className="link">2022</td>
              <td className="link">2023</td>
              <td className="link">2024</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Header;
