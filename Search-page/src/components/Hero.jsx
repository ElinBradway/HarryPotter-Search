import React, { useState, useEffect } from "react";
import axios from "axios";
import './hero.css';

import { HeroImage } from "../assets/images.js";

const Hero = () => {
  const [items, setItems] = useState([]); // Full data from API
  const [filteredItems, setFilteredItems] = useState([]); // Filtered data for display
  const [searchTerm, setSearchTerm] = useState(""); // Search input
  const [error, setError] = useState(null); // Error state
  const [loading, setLoading] = useState(true); // Loading state
  const [searched, setSearched] = useState(false); // Tracks if a search has been conducted

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://hp-api.onrender.com/api/characters"
        );
        setItems(response.data); 
        setLoading(false); 
      } catch (err) {
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle Search
  const handleSearch = () => {
    setSearched(true); // Mark that a search has been performed

    const results = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredItems(results); // Update filtered list
  };

  return (
    <div className="hero">
      <div className="hero-container">
        <h1>Welcome to the Wizarding World, <br /> type in a character <br />from Harry Potter!</h1>
        <img src={HeroImage} alt="Little Bunny" />
      </div>

         <div className="search-container">
       <div className="search-wrapper">
        <input
          type="text"
          placeholder="Search for a character..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
         />
         <button onClick={handleSearch} className="search-button">
         Search
         </button>
        </div>
     </div>


      {/* Display Loading or Error */}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {/* Conditionally Render Results */}
      {searched && (
        <div className="items-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <div key={index} className="item">
                <h3>{item.name}</h3>
                <p>House: {item.house || "Unknown"}</p>
              </div>
            ))
          ) : (
            <p>No results found. Try searching for another character!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;


