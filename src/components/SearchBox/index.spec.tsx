import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import SearchBox from '.';

const mockContent = [
  { name: 'Acre', initials: 'AC' },
  { name: 'Alagoas', initials: 'AL' },
];

test('Component --> SearchBox', () => {
  render(<SearchBox content={mockContent} />);

  const elementInput = screen.getByRole('textbox');

  fireEvent.change(elementInput, { target: { value: 'Acre' } });
  fireEvent.change(elementInput, { target: { value: 'Alagoas' } });
});
