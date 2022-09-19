import styled from 'styled-components';

interface SearchListItemProps {
  isVisible: boolean;
}

const SearchListItem = styled.li<SearchListItemProps>`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  padding-left: 1rem;
  height: 6.5885625rem;
  align-items: center;
`;

export default SearchListItem;
