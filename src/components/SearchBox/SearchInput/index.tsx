import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  height: 6.5885625rem;
  width: 100%;
  border: 0;
  outline: 0;
  font-size: 3rem;
  padding-left: 1rem;
`;

interface SearchInputI {
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}
const SearchInput = ({
  onChangeHandler,
  placeholder,
  value,
}: SearchInputI): JSX.Element => {
  return (
    <Input
      type="text"
      onChange={(event) => onChangeHandler(event)}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default SearchInput;
