import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
const apiMaps = "AIzaSyDtoJY201bwUUCXn3bN6GR5EerkqeveFcs";

const style = {
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "relative",
  width: "100%",
  height: "100%",
};
class Maps extends Component {
  render() {
    return (
      <div style={{ height: "60vh", marginTop:'30px' }}>
        <Map
          containerStyle={containerStyle}
          style={style}   
          google={this.props.google}
          zoom={18}
          initialCenter={{
            lat: 47.097814,
            lng: 37.526949,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={"Current location"} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: apiMaps,
})(Maps);
