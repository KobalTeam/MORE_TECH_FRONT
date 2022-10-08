import React from "react";

const Search = (): JSX.Element => (
  <div className="search">
    <input
      className="search__field font-nunito rounded-md"
      name="search_header"
      placeholder="Search..."
      type="search"
    />
  </div>
);

export default Search;
