import React from "react";
import LocationList from "../components/LocationList";
import CreateLocationForm from "../components/SearchBar";
import UserInfo from "../components/UserInfo";



const Dashboard = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <UserInfo />
                    </div>
                    <div className="col-md-6">
                        <CreateLocationForm />
                        <LocationList />
                    </div>
                </div>
                <div className="row"></div>
            </div>
        </div>
    );
};

export default Dashboard;