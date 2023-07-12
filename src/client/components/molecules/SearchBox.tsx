import React, { useState } from "react";
import Input from "../atom/Input";
import SearchButton from "../atom/SearchButton";

const SearchBox: React.FC = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert(`The name you entered was: ${search}`);
    setSearch("");
  };

  return (
    <div className="ptz-search-box">
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search character"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <SearchButton />
      </form>
    </div>
  );
};

export default SearchBox;
