import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '500px'
};

const position = {
  lat: 25.621890,
  lng: 88.638490
};

const onLoad = marker => {
    console.log('marker: ', marker)
}
  
function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBRI-wX9sOTM_qMUhg2ICMx13NUgJ4UpwI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position}
        zoom={10}
      >
        <Marker
      onLoad={onLoad}
      position={position}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default Map
