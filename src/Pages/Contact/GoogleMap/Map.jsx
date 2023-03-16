import m from "./Map.module.scss";

import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import Fade from "react-reveal/Fade";

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cords: [{ lat: 52.2297, lng: 21.0122 }],
    };
  }

  showMarkers = () => {
    return this.state.cords.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.lat,
            lng: store.lng,
          }}
          onClick={() => console.log("Clicked")}
        />
      );
    });
  };

  render() {
    return (
      <Fade left>
        <div className={m.map}>
          <Map
            google={this.props.google}
            zoom={11}
            initialCenter={{
              lat: 52.2297,
              lng: 21.0122,
            }}
          >
            {this.showMarkers()}
          </Map>
        </div>
      </Fade>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCPyLjCDAIMAxjT4JpzKRCuIoYc0_AD1Xo",
})(MapContainer);
