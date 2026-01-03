// src/pages/AdminDashboard.jsx
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import RestaurantForm from "../components/RestaurantForm";

const AdminDashboard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("");
  const [filterParking, setFilterParking] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(data);
  }, []);

  const handleAdd = (restaurant) => {
    const updated = [...restaurants, restaurant];
    localStorage.setItem("evalData", JSON.stringify(updated));
    setRestaurants(updated);
    alert("Restaurant added successfully!");
  };

  const handleDelete = (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;
    const updated = restaurants.filter((r) => r.restaurantID !== id);
    localStorage.setItem("evalData", JSON.stringify(updated));
    setRestaurants(updated);
    alert("Restaurant deleted successfully!");
  };

  const filteredData = restaurants.filter((r) => {
    const matchSearch = r.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
                        r.address.toLowerCase().includes(search.toLowerCase());
    const matchType = filterType ? r.type === filterType : true;
    const matchParking = filterParking ? r.parkingLot.toString() === filterParking : true;
    return matchSearch && matchType && matchParking;
  });

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <RestaurantForm handleAdd={handleAdd} />
      <Navbar setSearch={setSearch} setFilterType={setFilterType} setFilterParking={setFilterParking} />
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {filteredData.map((r) => (
          <RestaurantCard key={r.restaurantID} restaurant={r} isAdmin handleDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
