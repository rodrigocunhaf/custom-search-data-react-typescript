import styled from 'styled-components';

interface SearchListItemContentProps {
  isVisible: boolean;
}

const SearchListItemContent = styled.p<SearchListItemContentProps>`
  transition-duration: 2000ms;
  display: flex;
  font-size: 3rem;
  animation-name: ${(props) => (props.isVisible ? 'isVisible' : 'invisible')};
  animation-duration: 1.2s;
  animation-fill-mode: forwards;
  color: snow;

  @keyframes isVisible {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes invisible {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export default SearchListItemContent;
