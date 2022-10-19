import { screen } from '@testing-library/react';
import React from 'react';
import FavoritePokemons from '../pages/FavoritePokemons';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente FavoritePokemons.js', () => {
  test('Verifica se é exibido na tela a mensagem No favorite pokemon', () => {
    renderWithRouter(<FavoritePokemons />);

    const favorite = screen.getByText(/No favorite pokemon found/i);
    expect(favorite).toBeInTheDocument();
  });
});
