import React, { createContext, useReducer, useContext } from "react";
import {
    GET_LOCATIONS,
<<<<<<< HEAD
    SET_CURRENT_LOCATION,
=======
>>>>>>> 623d40abe218c68874223be3a8368123a909255f
    CREATE_LOCATION,
    CURRENT_USER,
    LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {
<<<<<<< HEAD

        case SET_CURRENT_LOCATION:
            return {
              ...state,
              currentLocation: action.location,
              loading: false
            };

=======
>>>>>>> 623d40abe218c68874223be3a8368123a909255f
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

        case LOADING:
            return {
                ...state,
                loading: true
            };


        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        locations: [],
<<<<<<< HEAD
        currentLocation: {
            _id: 0,
            name: "",
            difficulty: "",
            distance: "",
            descent: "",
            climb: "",
            area: "",
            latitude: "",
            longitude: "",
            city: "",
            region: ""
        },
=======
>>>>>>> 623d40abe218c68874223be3a8368123a909255f
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
