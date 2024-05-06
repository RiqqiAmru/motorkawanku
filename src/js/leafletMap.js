var map = L.map("map").setView([-6.8908, 109.6756], 13);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

function createPolygon(data) {
  if (!data.kodeRTRW) {
    data.color = { color: "yellow" };
  }
  var polygon = L.polygon(data.coordinates, data.color).addTo(map);
  polygon.bindPopup(
    data.kelurahan + (data.kodeRTRW ? " - " + data.kodeRTRW : "")
  );
  map.fitBounds(polygon.getBounds());
}
