import { read, utils } from "xlsx";
import b64 from "../../data/pekalongan.xlsx?b64";
import aspek from "../../data/kriteria.json";

/* parse workbook and pull data from the first worksheet */
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

const kegiatanInvestasi = aspek.kegiatanInvestasi;
const aspekKumuh = aspek.aspek;

export {
  kota,
  kecamatan,
  rtrw,
  kumuhKawasan,
  kumuhRT,
  kegiatanInvestasi,
  aspekKumuh,
};
