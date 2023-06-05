import React from "react";

export default function SearchForm() {
  return (
    <div className="SearchForm">
      <form id="form-city">
        <input type="submit" id="search-button" value="search" />
        <input type="search" id="search-engine" placeholder="Enter the city" />
      </form>
    </div>
  );
}
