import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import Trails from '../trails.json';

const filteredTrails = Trails.filter(trail => trail.city === "Belmont");
// console.log(filteredTrails);
const mapStyles = {
    width: '45%',
    height: '50%',
    position: 'relative'
};

export class MapContainer extends Component {
    // ...
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
    };
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };


    render() {
        return (
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                center={
                    {
                        lat:this.props.lat,
                        lng:this.props.lng
                    }
                }
            >
                {/* {filteredTrails.map(trail  => {
                    return (
                        <Marker
                        title={'The marker`s title will appear as a tooltip.'}
                        name={trail.name}
                        position={{ lat:trail.latitude, lng:trail.longitude }} /> 
                    )
                })}
                <Marker
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={{ lat: 37.778519, lng: -122.405640 }} />
                <Marker
                    name={'Dolores park'}
                    position={{ lat: 37.759703, lng: -122.428093 }} />
                <Marker /> */}
                <Marker
                    name={this.props.name}
                    position={{ lat:this.props.lat, lng:this.props.lng }} />
                <Marker />

                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBsSWVbZ3NKrsQoaWpdj3exjjGOwpCKmQg'
})(MapContainer);
// render ()
//     return (
//         <Map
//         google={this.props.google}
//         zoom={8}
//         style={mapStyles}
//         initialCenter={{ lat: 47.444, lng: -122.176}}
//       />
//   );
// export class Map extends Component {
//     state = {
//         data: [],
//         loc_x: 0,
//         loc_y: 0,
//         locRendered: false,
//         showingInfoWindow: false,
//         activeMarker: {},
//         selectedPlace: {},
//         redirect: false,
//         redirectId: 0
//     }

//     getUserLocation = () => {
//         if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(this.showPosition)
//         }
//     }

//     showPosition = position => {
//         this.setState({
//             loc_x: position.coords.latitude,
//             loc_y: position.coords.longitude,
//             locRendered: true
//         })
//     }

//     fetchRequestLocations = () => {
//         fetch(``, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'X-User-Email': localStorage.getItem('email'),
//                 'X-User-Token': localStorage.getItem('token')
//             }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 this.setState({ data: data.data })
//                 setTimeout(() => {
//                     this.fetchRequestLocations()
//                 }, 20000)
//             })
//     }

//     saveCoords = (mapProps, map, clickEven) => {
//         if (window.location.pathname === '/c/request') {
//             this.props.saveMapCoords(clickEven.latLng.lat(), clickEven.latLng.lng())
//             document.querySelector('.custom-modal').style.visibility = 'visible'
//             document.querySelector('.fader').style.visibility = 'visible'
//         }
//     }

//     openContribution = id => {
//         document.querySelector('.fader').style.visibility = 'visible'
//         this.setState({
//             redirect: true,
//             redirectId: id,
//             showingInfoWindow: false
//         })
//     }

//     renderRedirect = () => {
//         if (this.state.redirect) {
//             return <Redirect to={`/c/contribution/${this.state.redirectId}`} />
//         }
//     }

//     centerMoved = (mapProps, map) => {
//         this.setState({
//             loc_x: map.center.lat(),
//             loc_y: map.center.lng()
//         })
//     }

//     componentWillMount() {
//         this.getUserLocation()
//     }

//     componentDidMount() {
//         this.fetchRequestLocations()
//     }

//     render() {
//         return (
//             <div>
//                 {this.renderRedirect()}
//                 {this.state.locRendered ? (
//                     <Map
//                         google={this.props.google}
//                         zoom={14}
//                         styles={this.props.mapStyles}
//                         disableDefaultUI={true}
//                         onClick={this.saveCoords}
//                         onDragend={this.centerMoved}
//                         initialCenter={{
//                             lat: this.state.loc_x,
//                             lng: this.state.loc_y
//                         }}
//                     >
//                         {this.state.data.map(m => {
//                             if (m.status === 'open') {
//                                 if (m.request_type === 'normal') {
//                                     return (
//                                         <Marker
//                                             key={uuidv1()}
//                                             position={{ lat: m.x, lng: m.y }}
//                                             title={m.title}
//                                             data={m}
//                                             onClick={this.onMarkerClick}
//                                             icon={{
//                                                 url: '../../data/welfareroom.png',
//                                                 anchor: new this.props.google.maps.Point(48, 48),
//                                                 scaledSize: new this.props.google.maps.Size(48, 48)
//                                             }}
//                                         />
//                                     )
//                                 } else {
//                                     return (
//                                         <Marker
//                                             key={uuidv1()}
//                                             position={{ lat: m.x, lng: m.y }}
//                                             title={m.title}
//                                             data={m}
//                                             onClick={this.onMarkerClick}
//                                             icon={{
//                                                 url: '../../data/tortillas1.png',
//                                                 anchor: new this.props.google.maps.Point(48, 48),
//                                                 scaledSize: new this.props.google.maps.Size(48, 48)
//                                             }}
//                                         />
//                                     )
//                                 }
//                             }
//                         })}
//                         <InfoWindowEx marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
//                             <div>
//                                 <h1>{this.state.selectedPlace.title}</h1>
//                                 <div>{this.state.selectedPlace.description}</div>
//                                 <br />
//                                 <Button onClick={() => this.openContribution(this.state.selectedPlace.id)}>
//                                     Read more
//                                 </Button>
//                             </div>
//                         </InfoWindowEx>
//                     </Map>
//                 ) : null}
//             </div>
//         )
//     }

//     onMarkerClick = (props, marker) => {
//         this.setState({
//             selectedPlace: props.data,
//             activeMarker: marker,
//             showingInfoWindow: true,
//             redirect: false
//         })
//     }
// }


// function mapStateToProps(state) {
//     return {
//         x: state.x,
//         y: state.y
//     }
// };

// export default connect(
//     mapStateToProps,
//     { saveMapCoords }
// )(
//     GoogleApiWrapper({
//         apiKey: 'AIzaSyBsSWVbZ3NKrsQoaWpdj3exjjGOwpCKmQg'
//     })(Maps)
// );

