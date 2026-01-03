// src/components/Navbar.jsx
import React, { useState, useEffect, useRef } from "react";

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
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
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
