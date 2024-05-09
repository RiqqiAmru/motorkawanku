import * as fs from "fs";
import { readFile, set_fs, utils, writeFile } from "xlsx";
set_fs(fs);
import { hitungKumuhRtAkhir, hitungProsenDanNilai } from "./src/js/rumus.js";
import { parse } from "path";

const workbook = readFile(
  "D:/RIQQI/SERVER/htdocs/motorKawanku/motorkawanku/data/pekalongan.xlsx"
);

let wsname = workbook.SheetNames[1];
let kecamatan = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[2];
let rtrw = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[3];
// let kumuhKawasan = utils.sheet_to_json(workbook.Sheets[wsname]);

// read data kumuhRT
wsname = workbook.SheetNames[4];
// let kumuhRT = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[5];
let investasi = utils.sheet_to_json(workbook.Sheets[wsname]);

wsname = workbook.SheetNames[7];
let volume = utils.sheet_to_json(workbook.Sheets[wsname]);

const headerKawasan = kecamatan.find((k) => k.kawasan === "Bendan Kergon");
const headerRT = rtrw.filter((r) => r.kawasan === headerKawasan.id);
let investasiKawasan = investasi.filter((i) => i.idKawasan === 5);

let kumuhKawasan = [];
let kumuhRT = [];

// baseline 2019
let kriteria = [
  "1a",
  "1b",
  "1b",
  "1c",
  "2a",
  "2b",
  "3a",
  "3b",
  "4a",
  "4b",
  "4c",
  "5a",
  "5b",
  "6a",
  "6b",
  "7a",
  "7b",
];
let totalVolume = [];
totalVolume["kawasan"] = 5;
volume.forEach((v) => {
  let satuRT = headerRT.find((r) => r.id === v.rt);
  let rtAkhir = hitungProsenDanNilai(v, satuRT, 2019);
  kumuhRT.push(rtAkhir);

  kriteria.forEach((k) => {
    if (!totalVolume[k]) {
      totalVolume[k] = parseFloat(v[k]) || 0;
    } else {
      totalVolume[k] += parseFloat(v[k]) || 0;
    }
  });
});

let kawasanAkhir = hitungProsenDanNilai(totalVolume, headerKawasan, 2019);
kumuhKawasan.push(kawasanAkhir);

// hitung kumuhRT 2020-2023
for (let i = 2020; i <= 2023; i++) {
  let rtAwal = kumuhRT.filter((k) => k.tahun === i - 1);
  let kawasanAwal = kumuhKawasan.find((k) => k.tahun === i - 1);

  rtAwal.forEach((rt) => {
    const investasiRt = investasiKawasan.filter(
      (inv) => inv.idRTRW === rt.rt && inv.tahun === i
    );
    let satuRT = headerRT.find((r) => r.id === rt.rt);
    let rtAkhir = hitungKumuhRtAkhir(investasiRt, rt, satuRT, i);
    kumuhRT.push(rtAkhir);
  });
  let investasiKawasanPerTahun = investasiKawasan.filter(
    (inv) => inv.tahun === i
  );
  kawasanAkhir = hitungKumuhRtAkhir(
    investasiKawasanPerTahun,
    kawasanAwal,
    headerKawasan,
    i
  );
  kumuhKawasan.push(kawasanAkhir);
}

// // save to new Sheet
// ubah urutan properti json

const ws = utils.json_to_sheet(kumuhKawasan);
const wa = utils.json_to_sheet(kumuhRT);
const newWB = utils.book_new();
utils.book_append_sheet(newWB, wa, "rtAkhir");
utils.book_append_sheet(newWB, ws, "KawasanAkhir");

writeFile(
  newWB,
  "D:/RIQQI/SERVER/htdocs/motorKawanku/motorkawanku/data/new.xlsx"
);
console.log("Done");
