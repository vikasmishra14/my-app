import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapComponent.css";
import Navbar from "./Navbar";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -35],
});

// Component to update map center dynamically
const ChangeView = ({ coords }) => {
  const map = useMap();
  map.setView(coords, 13, { animate: true }); // Smooth movement to new location
  return null;
};

// Component to allow user to click anywhere on map and move marker
const LocationMarker = ({ setPosition, setPlaceName, markerRef }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);

      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await response.json();
        setPlaceName(data.display_name || "Unknown Location");

        // Open popup when user clicks on the map
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      } catch (error) {
        console.error("Error fetching place name:", error);
        setPlaceName("Unknown Location");
      }
    },
  });

  return null;
};

const MapComponent = () => {
  const [position, setPosition] = useState([51.505, -0.09]);
  const [placeName, setPlaceName] = useState("London, UK");
  const [searchQuery, setSearchQuery] = useState("");
  const markerRef = useRef(null);

  // Function to fetch location from OpenStreetMap API when searching
  const searchLocation = async () => {
    if (!searchQuery.trim()) return;

    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(searchQuery)}`
      );
      const data = await response.json();

      if (data.length > 0) {
        const { lat, lon, display_name } = data[0];
        const newPosition = [parseFloat(lat), parseFloat(lon)];

        setPosition(newPosition);
        setPlaceName(display_name);

        // Open popup when searched location is found
        if (markerRef.current) {
          markerRef.current.openPopup();
        }
      } else {
        alert("Location not found! Try a different search.");
      }
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="map-wrapper">
        <h2 className="map-title">🌍 Search & Locate</h2>

        {/* Search Box */}
        <div className="search-box">
          <input
            type="text"
            placeholder="Enter a location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="location-srch" onClick={searchLocation}>
            Search
          </button>
        </div>

        {/* Map */}
        <MapContainer
          center={position}
          zoom={13}
          minZoom={2} // Prevent excessive zoom-out
          maxBounds={[
            [-90, -180],
            [90, 180],
          ]} // Prevent dragging outside the world bounds
          dragging={true} // Allow free movement like Google Maps
          scrollWheelZoom={true} // Enable zooming with scroll wheel
          doubleClickZoom={true} // Enable double click zoom
          touchZoom={true} // Enable zooming on touch devices
          className="map-container"
        >
          <ChangeView coords={position} />
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

          {/* Marker with Popup */}
          <Marker position={position} icon={customIcon} ref={markerRef}>
            <Popup autoOpen>
              <h3>📍 {placeName}</h3>
              <p>Latitude: {position[0].toFixed(4)}</p>
              <p>Longitude: {position[1].toFixed(4)}</p>
            </Popup>
          </Marker>

          {/* Handle User Clicks to Move Marker */}
          <LocationMarker setPosition={setPosition} setPlaceName={setPlaceName} markerRef={markerRef} />
        </MapContainer>
      </div>
    </>
  );
};

export default MapComponent;
