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
