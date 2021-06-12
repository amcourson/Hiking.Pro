import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useStoreContext } from "../../utils/GlobalState";
import { CURRENT_USER, LOADING } from "../../utils/actions";
import API from "../../utils/API";
import { ListItem, List } from "../List";

function UserInfo() {
  const [state, dispatch] = useStoreContext();


  const getUser = () => {
    dispatch({ type: LOADING });

    API.getUser(state.currentUser._id)
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
  }, [state.currentUser]);


  return (
    <div>
      {state.currentUser.completedHikes.length ? (
        <h4 className="">Congrats {state.currentUser.email}, you have {state.currentUser.completedHikes.length} completed Hikes!</h4>
      ) : (
        <h4 className="">Oh No! {state.currentUser.email}, you have no completed hikes</h4>

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
