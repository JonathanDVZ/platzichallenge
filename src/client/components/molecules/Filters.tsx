import React, { useState, useEffect } from "react";
import Dropdown, { Option } from "../atoms/Dropdown";

export interface IFilters {
  sortOptions: Option[];
  sortValue: string;
  onSortChange: (value: string) => void;
  filterOptions: Option[];
  filterValue: string;
  onFilterChange: (value: string) => void;
}

const Filters: React.FC<IFilters> = ({
  filterOptions,
  filterValue,
  onFilterChange,
  sortOptions,
  sortValue,
  onSortChange,
}) => {
  const [selectedFilter, setSelectedFilter] = useState(filterValue);
  const [selectedSort, setSelectedSort] = useState(sortValue);

  useEffect(() => {
    setSelectedFilter(filterValue);
  }, [filterValue]);

  useEffect(() => {
    setSelectedSort(sortValue);
  }, [sortValue]);

  const handlefilter = (value: string) => {
    setSelectedFilter(value);
    onFilterChange(value);
  };

  const handleSort = (value: string) => {
    setSelectedSort(value);
    onSortChange(value);
  };

  return (
    <div className="ptz-filters">
      <Dropdown
        id="filter"
        labelTitle="Filtrar por:"
        name="filter"
        options={filterOptions}
        value={selectedFilter}
        onChange={(e) => handlefilter(e.target.value)}
      />
      <Dropdown
        id="sort"
        labelTitle="Ordernar por:"
        name="sort"
        options={sortOptions}
        value={selectedSort}
        onChange={(e) => handleSort(e.target.value)}
      />
    </div>
  );
};

export default Filters;
