import React from "react";
import LocationList from "../components/LocationList";
import CreateLocationForm from "../components/SearchBar";



const Dashboard = () => {

    return (
        <div>
        <CreateLocationForm />
        <LocationList />
        
        </div>
    );
};

export default Dashboard;