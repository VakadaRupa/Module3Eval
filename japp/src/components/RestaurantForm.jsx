// src/components/RestaurantForm.jsx
import React, { useState } from "react";

const RestaurantForm = ({ handleAdd }) => {
  const [form, setForm] = useState({
    restaurantName: "",
    address: "",
    type: "Rajasthani",
    parkingLot: true,
    image:
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
    handleAdd({ ...form, restaurantID: Date.now() });
    setForm({
      restaurantName: "",
      address: "",
      type: "Rajasthani",
      parkingLot: true,
      image:
        "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg",
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        name="restaurantName"
        placeholder="Restaurant Name"
        value={form.restaurantName}
        onChange={handleChange}
        required
      />
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
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={form.image}
        onChange={handleChange}
      />
      <br />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default RestaurantForm;
