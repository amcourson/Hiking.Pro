import React, { createContext, useReducer, useContext } from "react";
import {
    GET_LOCATIONS,
    SET_CURRENT_LOCATION,
    SET_SEARCH_LOCATION,
    CREATE_LOCATION,
    CURRENT_USER,
    LOADING,
    LOGIN,
    SET_NEARBY_SEARCH_RADIUS
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch (action.type) {

        case SET_SEARCH_LOCATION:
            return {
                ...state,
                searchLocation: action.region,
                loading: false
            };

        case SET_CURRENT_LOCATION:
            return {
                ...state,
                currentLocation: action.location,
                loading: false
            };

        case LOGIN:
            console.log("Action in login CASE", action)
            return {
                ...state,
                loginCred: action.cred,
                loading: false
            };

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
        
        case SET_NEARBY_SEARCH_RADIUS:
            return {
                ...state,
                nearbySearchRadius: action.nearbySearchRadius
            }

        default:
            return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        locations: [],
        searchLocation: {
            region: null,
            city: null,
            difficulty: null
        },
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
        loginCred: {
            _id: localStorage.getItem("userId"),
            authToken: "",
            loggedIn: localStorage.getItem("loggedIn")
        },
        currentUser: {
            _id: "",
            email: "",
            location: {},
            completedHikes: [],
            points: 0,

        },
        nearbySearchRadius: null,
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
    return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
