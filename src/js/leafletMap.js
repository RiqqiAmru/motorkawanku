import "leaflet";

var map = L.map("map").setView([-6.8908, 109.6756], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function createPolygon(data) {
  deleteAllLayers();
  getAllPolygons();

  switch (data.tingkatKekumuhan) {
    case "KB":
      data.color = { color: "red" };
      data.description = "KUMUH BERAT";
      break;
    case "KS":
      data.color = { color: "ffbb05" };
      data.description = "KUMUH SEDANG";
      break;
    case "KR":
      data.color = { color: "yellow" };
      data.description = "KUMUH RINGAN";
      break;
    case "TK":
      data.description = "TIDAK KUMUH";
      data.color = { color: "green" };
      break;
    default:
      data.color = { color: "transparent" };
  }

  var polygon = L.polygon(data.coordinates, data.color).addTo(map);
  polygon.bindPopup(
    data.kelurahan +
      (data.kodeRTRW ? " - " + data.kodeRTRW : "") +
      (data.description ? " - " + data.description : "")
  );
  map.fitBounds(polygon.getBounds());
}

function deleteAllLayers() {
  map.eachLayer((l) => {
    // console.log(l);
  });
}

function getAllPolygons() {
  map.eachLayer(function (layer) {
    // Check if the layer is a polygon
    if (layer instanceof L.Polygon) {
      layer.remove();
    }
  });
}

// Usage

export { createPolygon };
