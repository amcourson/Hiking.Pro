import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { SET_SEARCH_LOCATION, GET_LOCATIONS, LOADING } from '../../utils/actions';
import API from '../../utils/API';

function CreateLocationForm() {
  const locationRef = useRef();
  const [state, dispatch] = useStoreContext();

  const getLocationByState = () => {
    dispatch({ type: LOADING });
    API.getLocationByState(state.searchLocation.region)
      .then(results => {
        dispatch({
          type: GET_LOCATIONS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
        type: SET_SEARCH_LOCATION,
        region: locationRef.current.value,
      })
      .then(() => {
        getLocationByState()
      })
      .catch((err) => console.log(err));

    locationRef.current.value = '';
  };

  return (
    <div>
      <div className="jumbotron">
        <img
          className="img-fluid img-thumbnail"
          src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        />
      </div>
      <h1>Enter your State</h1>
      <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
        <label htmlFor="location">Location:</label>
        <input
          className="form-control mb-5"
          required
          ref={locationRef}
          id="location"
          placeholder="Location"
        />

        <button
          className="btn btn-success mt-3 mb-5"
          disabled={state.loading}
          type="submit"
        >
          Save Post
        </button>
      </form>
    </div>
  );
}

export default CreateLocationForm;
