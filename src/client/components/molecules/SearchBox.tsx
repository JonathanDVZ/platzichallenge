import React, { useState } from "react";
import Input from "../atoms/Input";
import ButtonWithIcon from "../atoms/ButtonWithIcon";
import { Search } from "iconoir-react";

type Props = {
  onSearch: (search: string) => void;
};

const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch(search.toLocaleLowerCase());
    setSearch("");
  };

  return (
    <div className="ptz-search-box">
      <form data-testid="form" onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search character"
          name="search"
          className="ptz-search-box__input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ButtonWithIcon
          className="ptz-search-box__btn"
          type="submit"
          aria-label="search"
          iconComponent={<Search height={20} width={20} />}
        />
      </form>
    </div>
  );
};

export default SearchBox;
