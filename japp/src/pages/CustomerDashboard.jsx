// src/pages/CustomerDashboard.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";

const CustomerDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterParking, setFilterParking] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(data);
  }, []);

  const filteredData = restaurants.filter((r) => {
    const matchSearch =
      r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
      r.address.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType ? r.type === filterType : true;
    const matchParking = filterParking ? r.parkingLot.toString() === filterParking : true;
    return matchSearch && matchType && matchParking;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>Customer Dashboard</h2>
      <Navbar setSearch={setSearch} setFilterType={setFilterType} setFilterParking={setFilterParking} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredData.map((r) => (
          <RestaurantCard key={r.restaurantID} restaurant={r} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDashboard;
