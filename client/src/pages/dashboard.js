import React from "react";
import LocationList from "../components/LocationList";
import CreateLocationForm from "../components/SearchBar";
import UserInfo from "../components/UserInfo";



const Dashboard = () => {

    return (
        <div>
        <UserInfo />
        <CreateLocationForm />
        <LocationList />
        </div>
    );
};

export default Dashboard;