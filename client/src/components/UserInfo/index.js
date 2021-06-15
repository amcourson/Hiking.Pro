import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { CURRENT_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { ListItem, List } from "../List";

function UserInfo() {
  const [state, dispatch] = useStoreContext();

  
  const getUser = () => {
    // dispatch({ type: LOADING });
    console.log("login cred on dashboard: ", state.loginCred)
    API.getUser(localStorage.getItem("userId"))
      .then(results => {
        dispatch({
          type: CURRENT_USER,
          user: results.data
        });
        
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getUser();
  }, []);




  return (
    <div>
      {state.currentUser.completedHikes ? (
        <h4 className="">Congrats, you have completed Hikes!</h4>
      ) : (
        <h4 className="">Oh No!{state.currentUser.email} You have no completed hikes</h4>

        
      )}
      {state.currentUser.completedHikes ? (
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
