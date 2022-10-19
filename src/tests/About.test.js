import { screen } from '@testing-library/react';
import React from 'react';
import About from '../pages/About';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente About.js', () => {
  test('Verifica se é exibido to About Pokedex', async () => {
    renderWithRouter(<About />);

    const aboutPokedex = await screen.findByRole('heading', { level: 2, name: /About Pokédex/i });
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('Verifica atributo da imagem', () => {
    renderWithRouter(<About />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
