// src/components/Navbar.jsx
import React, { useRef, useEffect } from "react";

const Navbar = ({ setSearch, setFilterType, setFilterParking }) => {
  const searchRef = useRef();

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search by name or address"
        onChange={(e) => setSearch(e.target.value)}
      />
      <select onChange={(e) => setFilterType(e.target.value)}>
        <option value="">All Types</option>
        <option>Rajasthani</option>
        <option>Gujarati</option>
        <option>Mughlai</option>
        <option>Jain</option>
        <option>Thai</option>
        <option>North Indian</option>
        <option>South Indian</option>
      </select>
      <select onChange={(e) => setFilterParking(e.target.value)}>
        <option value="">Parking?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
    </div>
  );
};

export default Navbar;
