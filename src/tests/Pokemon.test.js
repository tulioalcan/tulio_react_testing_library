import { screen } from '@testing-library/react';
import Pokemon from '../components/Pokemon';
import renderWithRouter from './renderWithRouter';

const caterpie = {
  id: 10,
  name: 'Caterpie',
  type: 'Bug',
  averageWeight: {
    value: '2.9',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/8/83/Spr_5b_010.png',
};

describe('Testando o componente Pokemon.js', () => {
  test('Verifica dados de imagem caterpie', () => {
    renderWithRouter(<Pokemon pokemon={ caterpie } isFavorite />);

    const imgCaterpie = screen.getAllByRole('img');
    expect(imgCaterpie[0]).toHaveAttribute('src', caterpie.image);
    expect(imgCaterpie[0]).toHaveAttribute('alt', `${caterpie.name} sprite`);
  });

  test('Verifica dados de favoritos', () => {
    renderWithRouter(<Pokemon pokemon={ caterpie } isFavorite />);

    const imgStar = screen.getAllByRole('img');
    expect(imgStar[1]).toHaveAttribute('src', '/star-icon.svg');
    expect(imgStar[1]).toHaveAttribute('alt', `${caterpie.name} is marked as favorite`);
  });

  test('verifica se é renderizado name e link', () => {
    renderWithRouter(<Pokemon pokemon={ caterpie } isFavorite />);
    const name = screen.getByText(caterpie.name);
    expect(name).toBeInTheDocument();
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', `/pokemons/${caterpie.id}`);
    const type = screen.getByText(caterpie.type);
    expect(type).toBeInTheDocument();
  });
});
