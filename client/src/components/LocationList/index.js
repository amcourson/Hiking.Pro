import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { GET_LOCATIONS, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { ListItem, List } from "../List";

function LocationList() {
  const [state, dispatch] = useStoreContext();


  const getLocations = () => {
    dispatch({ type: LOADING });
      API.getLocationByState(state.searchLocation.region, state.searchLocation.city, state.searchLocation.difficulty)
        .then(results => {
          dispatch({
            type: GET_LOCATIONS,
            locations: results.data
          });
        })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getLocations();
  }, [state.searchLocation]);


  return (
    <div>
      <h4 className="mb-2 mt-0">Explore New Trails</h4>
      {state.locations.length ? (
        <List>
          {state.locations.map(location => (
            <ListItem key={location._id}>
              <Link to={"/locations/" + location._id}>
                <strong>
                  {location.name} in {location.city}
                </strong>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>There are no locations to display!</h3>
      )}
    </div>
  );
}

export default LocationList;
