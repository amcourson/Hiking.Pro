import React from "react";
import LocationList from "../components/LocationList";
import CreateLocationForm from "../components/SearchBar";
import UserInfo from "../components/UserInfo";



const Dashboard = () => {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <CreateLocationForm />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <UserInfo />
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