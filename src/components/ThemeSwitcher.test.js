import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

test('switches theme from light to dark', () => {
  render(
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );

  const button = screen.getByText(/Switch to dark mode/i);
  fireEvent.click(button);
  expect(button).toHaveTextContent(/Switch to light mode/i);
});