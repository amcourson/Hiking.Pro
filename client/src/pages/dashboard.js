import React from "react";
import LocationList from "../components/LocationList";
import CreateLocationForm from "../components/SearchBar";
import Map from "../components/maps";


const Dashboard = () => {

    return (
        <div>
        <CreateLocationForm />
        <LocationList />
        <Map />
        </div>
    );
};

export default Dashboard;