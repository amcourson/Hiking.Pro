import React from "react";
import LocationList from "../components/LocationList";
import Map from "../components/maps";
const Dashboard = () => {
    return (
        <div>
        <LocationList />
        <Map />
        </div>
    );
};

export default Dashboard;