import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, within, fireEvent } from '@testing-library/react';
import { ICharacter } from '../../../types/CharactersContext';
import Filters, { IFilters } from '../../molecules/Filters';
import { Option } from '../../atoms/Dropdown';

describe('components/molecules/CharacterItem', () => {
  const firstOption = {
    value: 'value 1',
    text: 'text 1'
  };
  const secondOption = {
    value: 'value 2',
    text: 'text 2'
  };
  const sortOptions: Option[] = [firstOption, secondOption];
  const filterOptions: Option[] = [firstOption, secondOption];
  const onSortChange = jest.fn();
  const onFilterChange = jest.fn();
  const props: IFilters = {
    sortOptions,
    sortValue: firstOption.value,
    onSortChange,
    filterOptions: filterOptions,
    filterValue: firstOption.value,
    onFilterChange
  };

  test('render Filters', () => {
    const component = render(<Filters {...props} />);
    expect(component).toBeVisible;
  });

  test('Filters renders a <Dropdown />', () => {
    const { container } = render(<Filters {...props} />);
    const dropdown = container.querySelector('div.ptz-dropdown');
    expect(dropdown).toBeVisible;
  });

  test('Filters renders a <Dropdown />', () => {
    const { container } = render(<Filters {...props} />);
    const dropdown = container.querySelectorAll('div.ptz-dropdown');
    expect(dropdown.length).toBe(2);
  });

  test('check when the user change the option in first dropdown', () => {
    const { container } = render(<Filters {...props} />);
    const dropdown = container.querySelectorAll('div.ptz-dropdown')[0];
    const selectElement = dropdown?.querySelector('select');
    const optionsElements = dropdown?.querySelectorAll('option');

    // Click second option
    if (selectElement) {
      fireEvent.change(selectElement, {
        target: { value: secondOption.value }
      });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeFalsy();
      expect(optionsElements[1].selected).toBeTruthy();
      expect(onFilterChange).toHaveBeenCalledTimes(1);
    }

    // Click first option
    if (selectElement) {
      fireEvent.change(selectElement, { target: { value: firstOption.value } });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeTruthy();
      expect(optionsElements[1].selected).toBeFalsy();
      expect(onFilterChange).toHaveBeenCalledTimes(2);
    }
  });

  test('check when the user change the option in second dropdown', () => {
    const { container } = render(<Filters {...props} />);
    const dropdown = container.querySelectorAll('div.ptz-dropdown')[1];
    const selectElement = dropdown?.querySelector('select');
    const optionsElements = dropdown?.querySelectorAll('option');

    // Click second option
    if (selectElement) {
      fireEvent.change(selectElement, {
        target: { value: secondOption.value }
      });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeFalsy();
      expect(optionsElements[1].selected).toBeTruthy();
      expect(onSortChange).toHaveBeenCalledTimes(1);
    }

    // Click first option
    if (selectElement) {
      fireEvent.change(selectElement, { target: { value: firstOption.value } });
    }

    if (optionsElements) {
      expect(optionsElements[0].selected).toBeTruthy();
      expect(optionsElements[1].selected).toBeFalsy();
      expect(onSortChange).toHaveBeenCalledTimes(2);
    }
  });
});
