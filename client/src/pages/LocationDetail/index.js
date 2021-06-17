
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { SET_CURRENT_LOCATION, LOADING, CURRENT_USER } from "../../utils/actions";
import API from "../../utils/API";
import Map from "../../components/maps";
import { useState } from 'react'

const LocationDetail = props => {
    const [state, dispatch] = useStoreContext();
    
    //This state is going to update the complete hike button on the page so the user can't click it more than once.
    const [hikeState, setHikeStatus] = useState({
        completed: false
    });
    
    // Get location data to display on the page using the param
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
    //Get User data to verify login information on this page and tell the page if the hike has been completed.
    const getUser = () => {
        dispatch({ type: LOADING });
    
        API.getUser(state.loginCred._id)
            .then(results => {
                dispatch({
                    type: CURRENT_USER,
                    user: results.data
                });
            })
            .catch(err => console.log(err));
    };

    //This will update the completed hikes on the user if the user clicks the completed hike button.
    const updateUser = () => {
        dispatch({ type: LOADING });
        API.updateUser(
            state.loginCred._id,
            {
                points: state.currentUser.points + 10,
                completedHikes: [...state.currentUser.completedHikes,
                {
                    _id: state.currentLocation._id,
                    name: state.currentLocation.name,
                    difficulty: state.currentLocation.difficulty
                }
                ]
            }
        )
            .then(results => {
                dispatch({
                    type: CURRENT_USER,
                    user: results.data
                });
            })

            .then(()=>{
                setHikeStatus({
                    completed: true
                })
            })

            .catch(err => console.log(err));
    };

    //Updates user when complete hike button is clicked.
    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser()
    };
    //Updates the page on load.
    useEffect(() => {
        getLocation();
        getUser();
    }, []);
    // Updates the page if location is changed. This is a backup for the map component in case it loads too quickly.
    useEffect(() => {
    
    }, [state.currentLocation]);
    //Updates the complete hike button if the user clicks it.
    useEffect(() => {
    }, [hikeState]);

    //Displays Location information on the page and will check whether the user has completed the hike to update the button on the page.
    return (
        <div className="container">
            <div className="row mt-3">
                {state.currentLocation ? (


                    <div className="col-md-6">
                        <h3>{state.currentLocation.name}: {state.currentLocation.city}, {state.currentLocation.region} </h3>
                        <Link to="/dashboard">← Back to Dashboard</Link>
                        <ul>
                            <li>Area: {state.currentLocation.area}</li>
                            <li>Difficulty: {state.currentLocation.difficulty}</li>
                            <li>Distance: {state.currentLocation.distance}</li>
                            <li>Descent: {state.currentLocation.descent}</li>
                            <li>Climb: {state.currentLocation.climb}</li>
                        </ul>
                        {state.currentUser.completedHikes.some(e => e._id === state.currentLocation._id) || hikeState.completed ? (
                            <button
                                className="btn btn-success mt-3 mb-5"
                                disabled
                            >
                                Completed!
                            </button>
                        ) : (

                            <button
                                className="btn btn-success mt-3 mb-5"
                                // disabled={state.loading}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Complete Hike!
                            </button>

                        )}

                    </div>

                ) : (
                    <div>loading..</div>
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