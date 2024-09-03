import { read, utils } from "xlsx";
import b64 from "../../data/pekalongan.xlsx?b64";

// /* parse workbook and pull data from the first worksheet */
let wb = read(b64, { type: "base64" });
let wsname = wb.SheetNames[0];
let kota = utils.sheet_to_json(wb.Sheets[wsname]);
kota = kota[0];

wb = read(b64, { type: "base64" });
wsname = wb.SheetNames[1];
let kecamatan = utils.sheet_to_json(wb.Sheets[wsname]);

wb = read(b64, { type: "base64" });
wsname = wb.SheetNames[2];
let rtrw = utils.sheet_to_json(wb.Sheets[wsname]);

wb = read(b64, { type: "base64" });
wsname = wb.SheetNames[3];
let kumuhKawasan = utils.sheet_to_json(wb.Sheets[wsname]);

// read data kumuhRT
wb = read(b64, { type: "base64" });
wsname = wb.SheetNames[4];
let kumuhRT = utils.sheet_to_json(wb.Sheets[wsname]);

wb = read(b64, { type: "base64" });
wsname = wb.SheetNames[5];
let semuaInvestasi = utils.sheet_to_json(wb.Sheets[wsname]);

// const kegiatanInvestasi = aspek.kegiatanInvestasi;
// const aspekKumuh = aspek.aspek;

// export {
//   kota,
//   kecamatan,
//   rtrw,
//   kumuhKawasan,
//   kumuhRT,
//   kegiatanInvestasi,
//   aspekKumuh,
//   latlng,
//   semuaInvestasi,
// };

// buat fake api untuk memudahkan development 1 1
async function fakeFetch(param = false, id = 0, tahun = 0) {
  if (!param) {
    const kec = kecamatan.map(({ id, wilayah, kawasan }) => {
      return { wilayah, kawasan, id };
    });
    return Promise.resolve({ ...kota, kec });
  } else {
    // url/kawasan/id_kawasan/tahun
    if (tahun == 0 && param == "kawasan" && id) {
      // header kawasan
      const kec = kecamatan.find((k) => k.id == id);
      const rt = rtrw
        .filter((rt) => rt.kawasan == id)
        .map(({ id, rtrw }) => {
          return { id, rtrw };
        });
      return { ...kec, rt };
    } else if (tahun == 0 && id && param == "rt") {
      // header rt
      const rt = rtrw.find((r) => r.id == id);
      return rt;
    } else if (id && (param == "kawasan") & (tahun != 0)) {
      // fetch tabel kawasan
      const kumuhK = kumuhKawasan.find((k) => k.id == id);
      return kumuhK;
    } else if (id && param == "rt" && tahun != 0) {
      // fetch tabel rt
      const kumuhK = kumuhRT.find((k) => k.id == id);
      return kumuhK;
    } else if (id && (param == "investasiKawasan") & (tahun != 0)) {
      // investasi kawasan
      const inv = semuaInvestasi.filter(
        (sin) => sin.idKawasan == id && sin.tahun == tahun
      );
      return inv;
    }

    // investasi rt
  }
  return Promise.reject("undefined");
}
export { fakeFetch };
