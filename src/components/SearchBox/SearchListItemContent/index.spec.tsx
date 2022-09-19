import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SearchListItemContent from '.';

test('Component --> SearchListItemContent - animation-visible', () => {
  render(<SearchListItemContent isVisible={true}>TEST</SearchListItemContent>);

  const elementList = screen.getByText('TEST');

  expect(elementList).toBeInTheDocument();
});

test('Component --> SearchListItemContent - animation-invisible', () => {
  render(<SearchListItemContent isVisible={false}>TEST</SearchListItemContent>);

  const elementList = screen.getByText('TEST');

  expect(elementList).toBeInTheDocument();
});
