import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import RecipeList from './RecipeList';
import { server } from '../mocks/server';
import { rest } from 'msw';

test('renders recipes', async () => {
  render(<RecipeList />);

  await waitFor(() => screen.getByText('Spaghetti Bolognese'));
  expect(screen.getByText('Spaghetti Bolognese')).toBeInTheDocument();
  expect(screen.getByText('Käsekuchen')).toBeInTheDocument();
});
