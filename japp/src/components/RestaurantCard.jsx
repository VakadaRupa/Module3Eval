// src/components/RestaurantCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant, isAdmin, handleDelete }) => {
  const navigate = useNavigate();
  return (
    <div style={{ border: "1px solid gray", padding: "10px", margin: "10px", width: "250px" }}>
      <img src={restaurant.image} alt={restaurant.restaurantName} width="200" />
      <h3>{restaurant.restaurantName}</h3>
      <p>{restaurant.address}</p>
      <p>{restaurant.type}</p>
      <p>{restaurant.parkingLot ? "Parking Available" : "No Parking"}</p>
      {isAdmin && (
        <div>
          <button onClick={() => navigate("/admin/restaurants/update", { state: { restaurant } })}>Update</button>
          <button onClick={() => handleDelete(restaurant.restaurantID)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
