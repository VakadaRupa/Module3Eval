// src/pages/UpdateRestaurant.jsx
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateRestaurant = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Get the restaurant object from state passed via navigate
  const restaurantData = location.state?.restaurant;

  // If no restaurant data is provided, redirect back to admin dashboard
  useEffect(() => {
    if (!restaurantData) {
      navigate("/admin/dashboard");
    }
  }, [restaurantData, navigate]);

  const [form, setForm] = useState({
    restaurantID: restaurantData?.restaurantID || "",
    restaurantName: restaurantData?.restaurantName || "",
    address: restaurantData?.address || "",
    type: restaurantData?.type || "Rajasthani",
    parkingLot: restaurantData?.parkingLot ?? true,
    image:
      restaurantData?.image ||
      "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === "parkingLot" ? value === "true" : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.restaurantName || !form.address) {
      alert("Please fill all required fields");
      return;
    }

    if (!window.confirm("Are you sure you want to update this restaurant?")) return;

    // Update restaurant in localStorage
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
        <input
          type="text"
          name="restaurantName"
          placeholder="Restaurant Name"
          value={form.restaurantName}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <br />
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
        <br />
        <select name="parkingLot" value={form.parkingLot} onChange={handleChange}>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <br />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit">Update Restaurant</button>
      </form>
    </div>
  );
};

export default UpdateRestaurant;
