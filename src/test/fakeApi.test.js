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
