import { useEffect, useState } from "react";

export default function CustomerDashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("evalData")) || [];
    setRestaurants(data);
  }, []);

  return (
    <div>
      <h2>Customer Dashboard</h2>

      {restaurants.length === 0 ? (
        <p>No restaurants available</p>
      ) : (
        restaurants.map(r => (
          <div key={r.restaurantID} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <img src={r.image} alt={r.restaurantName} width="200" />
            <h3>{r.restaurantName}</h3>
            <p>{r.address}</p>
            <p>Type: {r.type}</p>
            <p>Parking: {r.parkingLot ? "Yes" : "No"}</p>
          </div>
        ))
      )}
    </div>
  );
}
