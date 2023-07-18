import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import { ICharacter } from '../../../types/CharactersContext';
import CharacterItem from '../../molecules/CharacterItem';

describe('components/molecules/CharacterItem', () => {
  const character: ICharacter = {
    id: 'Id',
    name: 'Name',
    image: 'Image',
    occupation: 'Occupation',
    status: 'Status',
    gender: 'Gender',
    favorite: false,
    history: 'History'
  };

  test('render CharacterItem', () => {
    const component = render(<CharacterItem character={character} dispatch={() => {}} />);
    expect(component).toBeVisible;
  });

  test('CharacterItem renders a <Image />', () => {
    const { container } = render(<CharacterItem character={character} dispatch={() => {}} />);
    const image = container.querySelector('image');
    expect(image).toBeVisible;
  });

  test('check <Image /> props', () => {
    const { container } = render(<CharacterItem character={character} dispatch={() => {}} />);
    const image = container.querySelector('image');

    expect(
      image?.getAttribute('class') === 'ptz-character-item__img' &&
        image?.getAttribute('src') === character.image &&
        image?.getAttribute('alt') === character.name
    ).toBeTruthy;
  });

  test('CharacterItem renders a <FavoriteButton />', () => {
    const { container } = render(<CharacterItem character={character} dispatch={() => {}} />);
    const button = container.querySelector('button');
    expect(button).toBeVisible;
  });

  test('CharacterItem renders a <p />', () => {
    const { container } = render(<CharacterItem character={character} dispatch={() => {}} />);
    const p = container.querySelectorAll('p');

    expect(p).toHaveLength(4);
  });

  test('check content of <p /> tags', () => {
    const { container } = render(<CharacterItem character={character} dispatch={() => {}} />);
    const p = container.querySelectorAll('p');

    expect(p[0].innerHTML).toBe(character.name);
    expect(p[1].innerHTML).toBe(`<strong>Gender: </strong>${character.gender}`);
    expect(p[2].innerHTML).toBe(`<strong>Occupation: </strong>${character.occupation}`);
    expect(p[3].innerHTML).toBe(`<strong>Status: </strong>${character.status}`);
  });
});
