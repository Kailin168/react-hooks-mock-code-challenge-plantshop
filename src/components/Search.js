import React from "react";

function Search({searchInput, setSearchInput}) {

  function handleOnChangeSearch (event) {
    setSearchInput(event.target.value)
  }

  return (

    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        value={searchInput}
        placeholder="Type a name to search..."
        onChange={handleOnChangeSearch}
      />
    </div>
  );
}

export default Search;
