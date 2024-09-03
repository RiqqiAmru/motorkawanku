import { expect, test } from "vitest";
import { fakeFetch } from "../js/loadData";

test("expect return  kota", async () => {
  expect(await fakeFetch()).toHaveProperty("kota");
  expect(await fakeFetch()).toHaveProperty("provinsi");
  expect(await fakeFetch()).toHaveProperty("kec");
  expect(await fakeFetch()).toHaveProperty("kec[0].kawasan");
  expect(await fakeFetch()).toHaveProperty("kec[0].wilayah");
  expect(await fakeFetch()).toHaveProperty("kec[0].id");
});

test("api for header kawasan", async () => {
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("id");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("kawasan");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("wilayah");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("rt-rw");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("luasFlag");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("luasVerifikasi");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("jumlahBangunan");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("jumlahPenduduk");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("jumlahKK");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("panjangJalanIdeal");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("panjangDrainaseIdeal");

  expect(await fakeFetch("kawasan", 1)).toHaveProperty("rt[0].id");
  expect(await fakeFetch("kawasan", 1)).toHaveProperty("rt[0].rtrw");
});

test("api for header rt", async () => {
  expect(await fakeFetch("rt", 1)).toHaveProperty("id");
  expect(await fakeFetch("rt", 1)).toHaveProperty("kawasan");
  expect(await fakeFetch("rt", 1)).toHaveProperty("rtrw");
  expect(await fakeFetch("rt", 1)).toHaveProperty("luasFlag");
  expect(await fakeFetch("rt", 1)).toHaveProperty("luasVerifikasi");
  expect(await fakeFetch("rt", 1)).toHaveProperty("jumlahBangunan");
  expect(await fakeFetch("rt", 1)).toHaveProperty("jumlahPenduduk");
  expect(await fakeFetch("rt", 1)).toHaveProperty("jumlahKK");
  expect(await fakeFetch("rt", 1)).toHaveProperty("panjangJalanIdeal");
  expect(await fakeFetch("rt", 1)).toHaveProperty("panjangDrainaseIdeal");
});

test("api for kumuh kawasan", async () => {
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("id");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("kawasan");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("tahun");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("totalNilai");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "tingkatKekumuhan"
  );
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "ratarataKekumuhan"
  );
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "kontribusiPenanganan"
  );
});

test("api for kumuh rt", async () => {
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("id");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("kawasan");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("tahun");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("tahun");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1cn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("1r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("2r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("3r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4cn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("4r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("5r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("6r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7av");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7ap");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7an");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bv");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bp");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7bn");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("7r");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty("totalNilai");
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "tingkatKekumuhan"
  );
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "ratarataKekumuhan"
  );
  expect(await fakeFetch("kawasan", 1, 2023)).toHaveProperty(
    "kontribusiPenanganan"
  );
});

test("api investasi kawasan", async () => {
  expect(await fakeFetch("investasiKawasan", 1, 2024)).toHaveProperty("id");
});
