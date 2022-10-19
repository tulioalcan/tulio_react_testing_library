import { screen } from '@testing-library/react';
import React from 'react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './renderWithRouter';

describe('Testando o componente NotFound.js', () => {
  test('Verifica se é exibido to Page requested not found', async () => {
    renderWithRouter(<NotFound />);

    const aboutPokedex = await screen.findByRole('heading', { level: 2, name: /Page requested not found/i });
    expect(aboutPokedex).toBeInTheDocument();
  });
  test('Verifica atributo da imagem', () => {
    renderWithRouter(<NotFound />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
