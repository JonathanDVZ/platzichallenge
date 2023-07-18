import React, { useState, useEffect, Dispatch, useMemo, memo } from 'react';
import SearchBox from '../molecules/SearchBox';
import CharacterItem from '../molecules/CharacterItem';
import Filters from '../molecules/Filters';
import { ICharacter, SortType, FilterType, IAction } from '../../types/CharactersContext';
import { isEqual } from 'lodash';

type Props = {
  characters: ICharacter[];
  dispatch: Dispatch<IAction>;
};

const sortOptions = [
  { value: SortType.DEFAULT, text: 'Default' },
  { value: SortType.NAME, text: 'Name' },
  { value: SortType.GENDER, text: 'Gender' },
  { value: SortType.STATUS, text: 'Status' },
  { value: SortType.OCCUPATION, text: 'Occupation' }
];

const filterOptions = [
  { value: FilterType.DEFAULT, text: 'Default' },
  { value: FilterType.MAN, text: 'Man' },
  { value: FilterType.WOMAN, text: 'Woman' },
  { value: FilterType.PET, text: 'Pet' },
  { value: FilterType.DIED, text: 'Died' },
  { value: FilterType.ALIVE, text: 'Alive' },
  { value: FilterType.FICTIONAL, text: 'Ficticio' },
  { value: FilterType.ROBOT, text: 'Robot' }
];

const CharactersSection: React.FC<Props> = ({ characters, dispatch }) => {
  const [search, setSearch] = useState('');
  // This state is to keep the result of the search
  const [searchedCharacters, setSearchedCharacters] = useState<ICharacter[]>([]);
  // This state is to keep the filtered results
  const [filteredCharacters, setFilteredCharacters] = useState<ICharacter[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<FilterType>(FilterType.DEFAULT);
  const [selectedSort, setSelectedSort] = useState<SortType>(SortType.DEFAULT);

  useEffect(() => {
    if (characters) {
      handleSearch(characters, setSearchedCharacters, search);
    }
  }, [characters]);

  useEffect(() => {
    if (characters) {
      handleSearch(characters, setSearchedCharacters, search);
      setSelectedFilter(FilterType.DEFAULT);
      setSelectedSort(SortType.DEFAULT);
    }
  }, [search]);

  useEffect(() => {
    /* 
      After searchedCharacters is updated, it's necessary to update filteredCharacters.
      So we can manipulate this array without affecting the search result
    */
    if (searchedCharacters) {
      if (selectedFilter === FilterType.DEFAULT) setFilteredCharacters(searchedCharacters);
      else if (selectedFilter === FilterType.MAN)
        handleSearch(searchedCharacters, setFilteredCharacters, 'masculino');
      if (selectedFilter === FilterType.WOMAN)
        handleSearch(searchedCharacters, setFilteredCharacters, 'femenino');
      if (selectedFilter === FilterType.PET)
        handleSearch(searchedCharacters, setFilteredCharacters, 'mascota');
      if (selectedFilter === FilterType.DIED)
        handleSearch(searchedCharacters, setFilteredCharacters, 'fallecido');
      if (selectedFilter === FilterType.ALIVE)
        handleSearch(searchedCharacters, setFilteredCharacters, 'vivo');
      if (selectedFilter === FilterType.FICTIONAL)
        handleSearch(searchedCharacters, setFilteredCharacters, 'ficticio');
      if (selectedFilter === FilterType.ROBOT)
        handleSearch(searchedCharacters, setFilteredCharacters, 'robot');
    }
  }, [searchedCharacters, selectedFilter]);

  /* 
    In this case, useMemo is used to calculate the final result to show. 
    It depends on filteredCharacters and selectedSort changes.
  */
  const sortedCharacters = useMemo(() => {
    if (selectedSort === SortType.GENDER)
      return [...filteredCharacters].sort((c1, c2) => {
        if (c1.gender < c2.gender) {
          return -1;
        }
        if (c1.gender > c2.gender) {
          return 1;
        }
        return 0;
      });
    else if (selectedSort === SortType.NAME)
      return [...filteredCharacters].sort((c1, c2) => {
        if (c1.name < c2.name) {
          return -1;
        }
        if (c1.name > c2.name) {
          return 1;
        }
        return 0;
      });
    else if (selectedSort === SortType.STATUS)
      return [...filteredCharacters].sort((c1, c2) => {
        if (c1.status < c2.status) {
          return -1;
        }
        if (c1.status > c2.status) {
          return 1;
        }
        return 0;
      });
    else if (selectedSort === SortType.OCCUPATION)
      return [...filteredCharacters].sort((c1, c2) => {
        if (c1.occupation < c2.occupation) {
          return -1;
        }
        if (c1.occupation > c2.occupation) {
          return 1;
        }
        return 0;
      });
    return filteredCharacters;
  }, [filteredCharacters, selectedSort]);

  const handleSearch = (
    characters: ICharacter[],
    setCharecters: Dispatch<React.SetStateAction<ICharacter[]>>,
    value: string
  ) => {
    if (value) {
      const filterResult = characters.filter(
        ({ name, gender, occupation, status }) =>
          name?.toLocaleLowerCase().includes(value) ||
          gender?.toLocaleLowerCase().includes(value) ||
          occupation?.toLocaleLowerCase().includes(value) ||
          status?.toLocaleLowerCase().includes(value)
      );
      setCharecters(filterResult);
    } else setCharecters(characters);
  };

  const handleFilter = (value: string) => {
    setSelectedFilter(value as FilterType);
  };

  const handleSort = (value: string) => {
    setSelectedSort(value as SortType);
  };

  return (
    <section className="ptz-characters-section">
      <SearchBox onSearch={setSearch} />
      <Filters
        sortOptions={sortOptions}
        sortValue={selectedSort}
        onSortChange={handleSort}
        filterOptions={filterOptions}
        filterValue={selectedFilter}
        onFilterChange={handleFilter}
      />
      <div className="ptz-characters-section__result">
        {sortedCharacters.map((character) => (
          <CharacterItem key={character.id} character={character} dispatch={dispatch} />
        ))}
      </div>
    </section>
  );
};

const compareProps = (
  { characters: prevCharacters }: Props,
  { characters: nextCharacters }: Props
) => isEqual(prevCharacters, nextCharacters);

export default memo(CharactersSection, compareProps);
