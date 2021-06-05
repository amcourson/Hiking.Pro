  
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURRENT_LOCATION, LOADING } from "../utils/actions";
import API from "../utils/API";

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
        <div>{state.currentLocation ? (
            <div>
                <h1>{state.currentLocation.name} in {state.currentLocation.city}, {state.currentLocation.region} </h1>
                <h1>Trail Stats:</h1>
                <ul>
                    <li>Difficulty: {state.currentLocation.difficulty}</li>
                    <li>Distance:{state.currentLocation.distance}</li>
                    <li>Descent:{state.currentLocation.descent}</li>
                    <li>Climb:{state.currentLocation.climb}</li>
                    <li>Area:{state.currentLocation.area}</li>
                </ul>
                <Link to="/">← Back to Posts</Link>
            </div>
        ) : (
            <div>loading...</div>
        )}
        </div>
    );
}

export default LocationDetail;