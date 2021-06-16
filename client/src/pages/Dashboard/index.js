import React, { useEffect } from "react";
import LocationList from "../../components/LocationList";
import CreateLocationForm from "../../components/SearchBar";
import UserInfo from "../../components/UserInfo";
import { useStoreContext } from "../../utils/GlobalState";
import { CURRENT_USER, LOADING } from "../../utils/actions";



const Dashboard = () => {
    // console.log(userId)
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        console.log("Dashboard state", state)
    }, []);
    
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <CreateLocationForm />
                    </div>
                    <div className="col-1"></div>
                </div>
                <div className="row">
                        <div className="col-md-6">
                        <UserInfo 
                        // userId={userId}
                        />
                    </div>
                    <div className="col-md-6">
                        <LocationList />
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </div>
    );
};

export default Dashboard;