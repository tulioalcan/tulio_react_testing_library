import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente Pokedex.js', () => {
  test('Verifica se os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);

    const button = screen.getAllByTestId('pokemon-type-button');
    expect(button[0]).toHaveAccessibleName('Electric');
    expect(button[1]).toHaveAccessibleName('Fire');
    expect(button[2]).toHaveAccessibleName('Bug');
    expect(button[3]).toHaveAccessibleName('Poison');
    expect(button[4]).toHaveAccessibleName('Psychic');
    expect(button[5]).toHaveAccessibleName('Normal');
    expect(button[6]).toHaveAccessibleName('Dragon');

    const buttonClick = screen.getByRole('button', { name: 'All' });
    userEvent.click(buttonClick);
  });
});
