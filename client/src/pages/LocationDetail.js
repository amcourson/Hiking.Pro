
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_LOCATION, LOADING } from "../utils/actions";
import API from "../utils/API";
import Map from "../components/maps";

const LocationDetail = props => {
    const [state, dispatch] = useStoreContext();

    const getLocation = () => {
        dispatch({ type: LOADING });
        API.getLocation(props.match.params.id)
            .then(results => {
                dispatch({
                    type: SET_CURRENT_LOCATION,
                    location: results.data
                });
            })
            .catch(err => console.log(err));
    };


    useEffect(() => {
        getLocation();
    }, []);


    return (
        <div className="container">
            <div className="row">
                {state.currentLocation ? (


                    <div className="col-md-6">
                        <h2>{state.currentLocation.name} </h2>
                        <h3>{state.currentLocation.city}, {state.currentLocation.region} </h3>
                        <h3>Trail Stats:</h3>
                        <ul>
                            <li>Difficulty: {state.currentLocation.difficulty}</li>
                            <li>Distance:{state.currentLocation.distance}</li>
                            <li>Descent:{state.currentLocation.descent}</li>
                            <li>Climb:{state.currentLocation.climb}</li>
                            <li>Area:{state.currentLocation.area}</li>
                        </ul>
                        <Link to="/dashboard">← Back to Posts</Link>
                    </div>

                ) : (
                    <div>loading...</div>
                )}
                    <div className="col-md-6">
                        <Map
                            name={state.currentLocation.name}
                            lat={state.currentLocation.latitude}
                            lng={state.currentLocation.longitude}
                        />
                    </div>
                
            </div>
        </div>
    );
}

export default LocationDetail;