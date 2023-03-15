import React from 'react';
import { render } from '@testing-library/react';
import Card from '../Card';

describe('Card component', () => {
  it('renders Card component without crashing', () => {
    render(
      <Card
        img="https://example.com/image.jpg"
        title="Example title"
        brand="Example brand"
        description="Example description"
        price={9.99}
        rating={4}
      />
    );
  });

  it('renders image correctly', () => {
    const { getByAltText } = render(
      <Card
        img="https://example.com/image.jpg"
        title="Example title"
        brand="Example brand"
        description="Example description"
        price={9.99}
        rating={4}
      />
    );
    const image = getByAltText('Example title');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  test('renders title correctly', () => {
    const { getByText } = render(
      <Card
        img="https://example.com/image.jpg"
        title="Example title"
        brand="Example brand"
        description="Example description"
        price={9.99}
        rating={4}
      />
    );
    const title = getByText('Example title');
    expect(title).toBeInTheDocument();
  });

  test('renders price and rating correctly', () => {
    const { getByText } = render(
      <Card
        img="https://example.com/image.jpg"
        title="Example title"
        brand="Example brand"
        description="Example description"
        price={9.99}
        rating={4}
      />
    );
    const price = getByText('9.99$');
    expect(price).toBeInTheDocument();

    const rating = getByText('4');
    expect(rating).toBeInTheDocument();
  });
});
