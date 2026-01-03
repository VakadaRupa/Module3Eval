// src/pages/UpdateRestaurant.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateRestaurant = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const restaurantData = location.state?.restaurant;

  useEffect(() => {
    if (!restaurantData) navigate("/admin/dashboard");
  }, [restaurantData, navigate]);

  const [form, setForm] = useState({ ...restaurantData });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: name === "parkingLot" ? value === "true" : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.restaurantName || !form.address) {
      alert("Please fill all fields");
      return;
    }
    if (!window.confirm("Are you sure you want to update this restaurant?")) return;

    const storedData = JSON.parse(localStorage.getItem("evalData")) || [];
    const updatedData = storedData.map((r) =>
      r.restaurantID === form.restaurantID ? form : r
    );
    localStorage.setItem("evalData", JSON.stringify(updatedData));
    alert("Restaurant updated successfully!");
    navigate("/admin/dashboard");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Update Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input name="restaurantName" value={form.restaurantName} onChange={handleChange} required />
        <br />
        <input name="address" value={form.address} onChange={handleChange} required />
        <br />
        <select name="type" value={form.type} onChange={handleChange}>
          <option>Rajasthani</option>
          <option>Gujarati</option>
          <option>Mughlai</option>
          <option>Jain</option>
          <option>Thai</option>
          <option>North Indian</option>
          <option>South Indian</option>
        </select>
        <br />
        <select name="parkingLot" value={form.parkingLot} onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <input name="image" value={form.image} onChange={handleChange} />
        <br />
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
