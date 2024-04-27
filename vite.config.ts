import { defineConfig } from "vite";
import { readFileSync } from "fs";
import { read, utils } from "xlsx";
import { resolve } from "path";

export default defineConfig({
  root: resolve(__dirname, "src"),
  assetsInclude: ["**/*.xlsx"], // xlsx file should be treated as assets
  plugins: [
    {
      // this plugin handles ?sheetjs tags
      name: "vite-sheet",
      transform(code, id) {
        if (!id.match(/\?sheetjs$/)) return;
        var wb = read(readFileSync(id.replace(/\?sheetjs$/, "")));
        var data = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]]);
        return `export default JSON.parse('${JSON.stringify(data)}')`;
      },
    },
    {
      // this plugin handles ?b64 tags
      name: "vite-b64-plugin",
      transform(code, id) {
        if (!id.match(/\?b64$/)) return;
        var path = id.replace(/\?b64/, "");
        var data = readFileSync(path, "base64");
        return `export default '${data}'`;
      },
    },
  ],
});
