import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { CURRENT_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { ListItem, List } from "../List";

function UserInfo() {
  const [state, dispatch] = useStoreContext();

  //Going to get user data and display the completed hikes on the page
  const getUser = () => {
    // dispatch({ type: LOADING });
    
    API.getUser(state.loginCred._id)
      .then(results => {
        dispatch({
          type: CURRENT_USER,
          user: results.data
        });
        
      })
      .catch(err => console.log(err));
  };

  //Going to update component when it gets the user information
  useEffect(() => {
    getUser();
  }, []);



//This should return no hikes if a new account and should tell the user the number of hikes they have completed if they have completed hikes.
  return (
    <div>
      {state.currentUser.completedHikes.length ? (
        <h4 className="text-center">Congrats, you have {state.currentUser.completedHikes.length} completed Hikes!</h4>
      ) : (
        <h4 className="text-center">Oh No! You have no completed hikes</h4>

        
      )}
      {state.currentUser.completedHikes.length ? (
        <List>
          {state.currentUser.completedHikes.map(location => (
            <ListItem key={location._id}>
              <Link to={"/locations/" + location._id}>
                <strong>
                  {location.name}: {location.difficulty}
                </strong>
              </Link>
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>Get to steppin! </h3>
      )}
    </div>
  );
}

export default UserInfo;
