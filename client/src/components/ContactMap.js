import React from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const mapContainerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: 49.284061,
  lng: -123.112315,
};

const options = {
  disableDefaultUI: true,
};

const ContactMap = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps...";
  return (
    <div className="contact__map-container">
      <div className="contact__map">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={16}
          center={center}
          options={options}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </div>
  );
};

export default ContactMap;
