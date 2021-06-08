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
      <h1>Welcome {state.currentUser.username}!</h1>
      <h3 className="mb-5 mt-5">Completed Hikes</h3>
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
        <h3>You do not have any completed Hikes yet</h3>
      )}
    </div>
  );
}

export default UserInfo;
