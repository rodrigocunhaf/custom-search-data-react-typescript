import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchListItem from '.';

test('Component --> SearchListItem - Visible', () => {
  render(<SearchListItem isVisible={true}>TEST</SearchListItem>);

  const elementList = screen.getByText('TEST');

  expect(elementList).toBeInTheDocument();
});

test('Component --> SearchListItem - Invisible', () => {
  render(<SearchListItem isVisible={false}>TEST</SearchListItem>);

  const elementList = screen.getByText('TEST');

  expect(elementList).toBeInTheDocument();
});
