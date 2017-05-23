import React from 'react';
import _ from 'lodash';
import {withGoogleMap,GoogleMap, Marker} from 'react-google-maps';

// {lat: 52.52, lng: 13.4050}
const BerlinMapItem = withGoogleMap(props => (
  <GoogleMap
    defaultZoom= {11}
    defaultCenter= {{ lat: 52.52, lng: 13.4050 }}
  />
));

class BerlinMaps extends React.Component {

    render() {
        return (
            <BerlinMapItem
                containerElement= {
                  <div style={{ height: `100%` }} />
                }

                mapElement= {
                  <div style={{ height: `100%` }} />
                }
            />
        );
    }
}

export default BerlinMaps;
