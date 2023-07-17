import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import FavoriteButton, { IFavoriteButton } from '../../atoms/FavoriteButton';

describe('components/atoms/FavoriteButton', () => {
  test('render FavoriteButton', () => {
    const component = render(<FavoriteButton />);
    expect(component).toBeVisible;
  });
  test('check if span tag exists', () => {
    const { container } = render(<FavoriteButton favorite={true} />);
    const span = container.querySelector('span');

    expect(span).toBeVisible;
  });

  test('check when favorite is false', () => {
    const { container } = render(<FavoriteButton favorite={false} />);
    const span = container.querySelector('span');

    expect(span?.getAttribute('class')).toMatch('ptz-favorite-button__icon');
  });

  test('check when favorite is true', () => {
    const { container } = render(<FavoriteButton favorite={true} />);
    const span = container.querySelector('span');

    expect(span?.getAttribute('class')).toMatch(
      'ptz-favorite-button__icon ptz-favorite-button__icon--red'
    );
  });

  test('clicking button', async () => {
    const mockHandler = jest.fn();
    const component = render(<FavoriteButton onClick={mockHandler} />);
    const button = await component.findByLabelText('favorite');
    fireEvent.click(button);

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
