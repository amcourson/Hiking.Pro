import React, { createContext, useReducer, useContext } from "react";
import {
GET_LOCATIONS,
CREATE_LOCATION,
CURRENT_USER,
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case CURRENT_USER:
    return {
      ...state,
      currentUser: action.user,
      loading: false
    };

  case GET_LOCATIONS:
    return {
      ...state,
      locations: [...action.locations],
      loading: false
    };

  case CREATE_LOCATION:
    return {
      ...state,
      locations: [action.location, ...state.locations],
      loading: false
    };


  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    locations: [],
    currentUser: {
      _id: 0,
      username: "",
      location: "",
      points: 0
    },
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
