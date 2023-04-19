import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
  const mockData = {
    id: 1,
    created: '2017-11-04T22:28:13.756Z',
    episode: ['https://rickandmortyapi.com/api/episode/1'],
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'human',
    gender: 'male',
    url: 'https://rickandmortyapi.com/api/character/19',
    location: { name: 'unknown', url: '' },
    type: 'Human with antennae',
    origin: { name: 'unknown', url: '' },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  };

  it('renders the card image with correct alt text', () => {
    const { getByAltText } = render(<Card data={mockData} />);
    const cardImage = getByAltText(mockData.name);
    expect(cardImage).toBeInTheDocument();
  });

  it('opens the modal when the card is clicked', () => {
    const { getByText, getByTestId } = render(<Card data={mockData} />);
    const card = getByText(mockData.name);
    fireEvent.click(card);
    const modal = getByTestId('modal');
    expect(modal).toBeInTheDocument();
  });

  it('closes the modal when the close button is clicked', () => {
    const { getByText, getByTestId } = render(<Card data={mockData} />);
    const card = getByText(mockData.name);
    fireEvent.click(card);
    const closeButton = getByTestId('closeModal');
    const modal = getByTestId('modal');
    fireEvent.click(closeButton);
    expect(modal).not.toBeInTheDocument();
  });
});
