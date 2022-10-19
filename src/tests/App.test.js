import { screen } from '@testing-library/react';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente App.js', () => {
  test('Verifica se a aplicação tem um conjunto fixo de links', () => {
    renderWithRouter(<App />);

    const link = screen.getAllByRole('link', { name: /Home/i });
    expect(link[0]).toBeInTheDocument();

    const link2 = screen.getAllByRole('link', { name: /About/i });
    expect(link2[0]).toBeInTheDocument();

    const link3 = screen.getAllByRole('link', { name: /Favorite Pokémons/i });
    expect(link3[0]).toBeInTheDocument();
  });
});
