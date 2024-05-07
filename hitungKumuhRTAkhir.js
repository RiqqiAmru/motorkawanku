import * as fs from "fs";
import { readFile, set_fs, utils, writeFile } from "xlsx";
set_fs(fs);
import { hitungKumuhRtAkhir } from "./src/js/rumus.js";

const workbook = readFile(
  "D:/RIQQI/SERVER/htdocs/motorKawanku/motorkawanku/data/pekalongan.xlsx"
);
let wsname = workbook.SheetNames[0];
let kota = utils.sheet_to_json(workbook.Sheets[wsname]);
kota = kota[0];

wsname = workbook.SheetNames[1];
let kecamatan = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[2];
let rtrw = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[3];
let kumuhKawasan = utils.sheet_to_json(workbook.Sheets[wsname]);

// read data kumuhRT
wsname = workbook.SheetNames[4];
let kumuhRT = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[5];
let investasi = utils.sheet_to_json(workbook.Sheets[wsname]);

// kumuh akhir podosugih 2021
// ambil kumuh awal, investasi, dan header rt
const headerKawasan = kecamatan.find((k) => k.kawasan === "Podosugih");
const kumuhKawasanAwal = kumuhKawasan.find(
  (k) => k.kawasan === headerKawasan.id && k.tahun === 2022
);
const headerRT = rtrw.filter((r) => r.kawasan === headerKawasan.id);
const kumuhRTAwal = kumuhRT.filter(
  (k) => k.kawasan === headerKawasan.id && k.tahun === 2022
);

const semuaKumuhRTAkhir = [];
kumuhRTAwal.forEach((rt) => {
  const investasiPodosugih = investasi.filter(
    (i) => i.idRTRW === rt.rt && i.tahun === 2023
  );
  let satuRT = headerRT.find((r) => r.id === rt.rt);
  let rtAkhir = hitungKumuhRtAkhir(investasiPodosugih, rt, satuRT);
  semuaKumuhRTAkhir.push(rtAkhir);
});

const kumuhKawasanAkhir = hitungKumuhRtAkhir(
  investasi,
  kumuhKawasanAwal,
  headerKawasan
);

// // save to new Sheet
// ubah urutan properti json

const ws = utils.json_to_sheet([kumuhKawasanAkhir]);
const wa = utils.json_to_sheet(semuaKumuhRTAkhir);
const newWB = utils.book_new();
utils.book_append_sheet(newWB, wa, "KumuhRTAkhir23");
utils.book_append_sheet(newWB, ws, "KumuhKawasanAkhir23");

writeFile(
  newWB,
  "D:/RIQQI/SERVER/htdocs/motorKawanku/motorkawanku/data/new.xlsx"
);
console.log("Done");
