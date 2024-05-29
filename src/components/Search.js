import React, { useState } from "react";

function Search({searchText, handleSearchChange}) {
  
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchText}
        onChange={handleSearchChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
