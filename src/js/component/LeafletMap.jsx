import {
  MapContainer,
  TileLayer,
  useMap,
  Marker,
  Popup,
  Polygon,
} from "react-leaflet";
import React, { useRef, useEffect } from "react";

function LeafletMap({ coordinate }) {
  const mapRef = useRef(null);

  useEffect(() => {
    // Fokuskan tampilan pada polygon saat komponen dimuat
    if (mapRef.current) {
      const bounds = coordinate.coordinates;
      mapRef.current.fitBounds(bounds);
    }
  }, [coordinate]);

  const onPolygonClick = (event) => {
    event.target.openPopup();
  };

  return (
    <div className="card mb-2 p-0">
      <div className="card-body p-1">
        <MapContainer
          center={[-6.8908, 109.6756]}
          zoom={14}
          scrollWheelZoom={false}
          style={{ height: "20rem" }}
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {coordinate.coordinates && (
            <Polygon
              positions={coordinate.coordinates}
              pathOptions={coordinate.color}
              eventHandlers={{ click: onPolygonClick }}
            >
              <Popup>{coordinate.description}</Popup>
            </Polygon>
          )}
        </MapContainer>
      </div>
    </div>
  );
}

export default LeafletMap;
