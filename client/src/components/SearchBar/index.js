import React, { useRef } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import { SET_SEARCH_LOCATION, GET_LOCATIONS, LOADING } from '../../utils/actions';
// import API from '../../utils/API';

function CreateLocationForm() {
  const locationRef = useRef();
  const difficultyRef = useRef();
  const cityRef = useRef();
  const [state, dispatch] = useStoreContext();

  // const getLocationByState = (state) => {
  //   dispatch({ type: LOADING });
  //   API.getLocationByState(state)
  //     .then(results => {
  //       dispatch({
  //         type: GET_LOCATIONS,
  //         posts: results.data
  //       });
  //     })
  //     .catch(err => console.log(err));
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    //going to turn the abbreviation to uppercase

    const cityConversion = (city) => {
      return city.toLowerCase().split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join('-');
    }
    const stateAbbreviation = locationRef.current.value.toUpperCase()
    //This is going to push the location to the global state currently should be in state abbreviation format
    dispatch({
      type: SET_SEARCH_LOCATION,
      region: {
        "region": stateAbbreviation,
        "city": cityConversion(cityRef.current.value),
        "difficulty": difficultyRef.current.value,
      },
    })
    //Going to reset the search value
    // locationRef.current.value = '';
    // difficultyRef.current.value = '';
  };

  return (
    <div className="text-center d-grid gap-2">
      <h1>Filter your Results</h1>
      <form className="form-group mx-auto" onSubmit={handleSubmit}>
        <div className="row mb-2">
          <div className="col-auto">
            <label htmlFor="city" className="form-label">City</label>
            <input
              className="form-control mx-auto"
              ref={cityRef}
              id="city"
              placeholder="City"
            />
          </div>
          <div className="col-auto">
            {/* Dropdown menu for states */}
            <label htmlFor="location" className="form-label">State</label>
            <select
              className="form-select mx-auto"
              id="location"
              name="location"
              ref={locationRef}
              required
            >
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">DC</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div className="col-auto">
            <label htmlFor="difficulty" className="form-label">Difficulty</label>
            <select
              className="form-select mx-auto"
              id="difficulty"
              name="difficulty"
              ref={difficultyRef}
              required
            >
              <option value="ExtremelyDifficult">Extremely Difficult / Dbl Black Diamond</option>
              <option value="VeryDifficult">Very Difficult / Black Diamond</option>
              <option value="Intermediate">Intermediate / Blue Square</option>
              <option value="Easy">Easy / Green Circle</option>
              <option value="Easiest">Easiest / White Circle</option>

            </select>
          </div>
          <div className="col-auto mx-auto">
            <br></br>
            <button
              className="btn btn-success mt-2"
              // disabled={state.loading}
              type="submit"
            >
              Search
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreateLocationForm;
