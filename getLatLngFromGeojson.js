const geojson = [];
const latLng = [];

import { type } from "os";
//  coordinat, type, kelurahan kodertrw
// geojson.features.map((feature) => {
//   const kelurahan = feature.properties.Kelurahan;
//   const kodeRTRW = feature.properties.Kode_RTRW;
//   const type = feature.geometry.type;
//   const coordinates = feature.geometry.coordinates[0];

//   latLng.push({
//     kelurahan,
//     kodeRTRW,
//     type,
//     coordinates,
//   });
// });

// balik data latLng di latlngjson
import fs from "fs";
const latlng = JSON.parse(fs.readFileSync("./latlng.json", "utf8"));

latlng.map((item) => {
  const kelurahan = item.kelurahan;
  const kodeRTRW = item.kodeRTRW;
  const type = item.type;
  const coordinates = item.coordinates.map((c) => {
    return [c[1], c[0]];
  });

  geojson.push({
    kelurahan,
    kodeRTRW,
    type,
    coordinates,
  });
});

// save latlng jadi file json

fs.writeFileSync("latlng2.json", JSON.stringify(geojson, null, 2));
