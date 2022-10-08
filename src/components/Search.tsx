import React from "react";
import search from "@images/Search.svg";

const Search = (): JSX.Element => (
  <div className="search inline-flex bg-gray-300 pl-1 rounded-md">
    <img
      alt="Search"
      className="search"
      src={search}
    />
    <input
      className="search__field font-nunito bg-gray-300"
      name="search_header"
      placeholder="Search..."
      type="search"
    />
  </div>
);

export default Search;
