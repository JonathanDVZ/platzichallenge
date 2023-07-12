import React from "react";
import { Search } from "iconoir-react";

const SearchButton: React.FC = () => (
  <button className="ptz-search-button" type="submit" aria-label="search">
    <Search height={20} width={20} />
  </button>
);

export default SearchButton;
