import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import SwitchIcon from '../../molecules/SwitchIcon';
import { Theme } from './../../../types/ThemeContext';

describe('components/molecules/SwitchIcon', () => {
  test('render SwitchIcon', () => {
    const component = render(<SwitchIcon themeSelected={Theme.LIGHT} />);
    expect(component).toBeVisible;
  });

  test('SwitchIcon renders <div class="ptz-switch-icon__option" />', () => {
    const { container } = render(<SwitchIcon themeSelected={Theme.LIGHT} />);
    const divs = container.querySelectorAll('div.ptz-switch-icon__option');

    expect(divs.length).toBe(2);
  });

  test(`when themeSelected is ${Theme.LIGHT}`, () => {
    const { container } = render(<SwitchIcon themeSelected={Theme.LIGHT} />);
    const divs = container.querySelectorAll('div.ptz-switch-icon__option');

    expect(divs[0]?.getAttribute('class')).toBe(
      'ptz-switch-icon__option ptz-switch-icon__option--light'
    );

    expect(divs[1]?.getAttribute('class')).toBe('ptz-switch-icon__option');
  });

  test(`when themeSelected is ${Theme.DARK}`, () => {
    const { container } = render(<SwitchIcon themeSelected={Theme.DARK} />);
    const divs = container.querySelectorAll('div.ptz-switch-icon__option');

    expect(divs[0]?.getAttribute('class')).toBe('ptz-switch-icon__option');

    expect(divs[1]?.getAttribute('class')).toBe(
      'ptz-switch-icon__option ptz-switch-icon__option--dark'
    );
  });
});
