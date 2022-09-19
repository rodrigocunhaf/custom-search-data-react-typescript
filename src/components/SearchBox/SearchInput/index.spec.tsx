import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchInput from '.';

const mockFunction = jest.fn();

test('Component --> SearchInput', () => {
  render(
    <SearchInput
      onChangeHandler={mockFunction}
      placeholder="__TEST__"
      value="TEST"
    />
  );

  const elementInput = screen.getAllByRole('textbox')[0];
  fireEvent.change(elementInput, { target: { value: 1 } });

  expect(elementInput).toBeInTheDocument();
  expect(mockFunction).toHaveBeenCalledTimes(1);
});
