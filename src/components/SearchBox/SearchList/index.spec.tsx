import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchList from '.';

test('Component --> SearchList', () => {
  render(<SearchList>TEST</SearchList>);

  const elementList = screen.getByText('TEST');

  expect(elementList).toBeInTheDocument();
});
