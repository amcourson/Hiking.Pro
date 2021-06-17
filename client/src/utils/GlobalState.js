import React, { createContext, useReducer, useContext } from "react";
import {
    GET_LOCATIONS,
    SET_CURRENT_LOCATION,
    SET_SEARCH_LOCATION,
    CREATE_LOCATION,
    CURRENT_USER,
    LOADING,
    LOGIN
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;


//This is the reducer create location and loading will be used in future development.
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


        default:
            return state;
    }
};

//This storeProvider provides 6 stores for the developer to use all are in current use except for loading.
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
        loading: false
    });

    return <Provider value={[state, dispatch]} {...props} />;
};

//Will allow user to pull store context in other components or pages.
const useStoreContext = () => {
    return useContext(StoreContext);
};

//Pull store provider into app and useStoreContext into any page you would like to use the global state manager.
export { StoreProvider, useStoreContext };
