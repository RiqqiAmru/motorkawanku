import { expect, test } from "vitest";
import { fakeFetch } from "../js/loadData";

test("expect return  kota", async () => {
  expect(await fakeFetch()).toHaveProperty("kota");
});
