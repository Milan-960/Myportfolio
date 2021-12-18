import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
// import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import m from "./Map.module.scss";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className={m.map}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCPyLjCDAIMAxjT4JpzKRCuIoYc0_AD1Xo" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/* <Marker onClick={this.onMarkerClick} name={"Poland"} /> */}
          {/* <AnyReactComponent lat={52.2297} lng={21.0122} text="My Marker" /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
