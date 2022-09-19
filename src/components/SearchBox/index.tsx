import React, { useEffect, useState } from 'react';
import SearchInput from './SearchInput';
import SearchList from './SearchList';
import SearchListItem from './SearchListItem';
import SearchListItemContent from './SearchListItemContent';
import _ from 'lodash';

interface StatesI {
  name: string;
  initials: string;
}

interface SearchBoxProps {
  content: StatesI[];
}

interface VisibleStateI {
  isVisible: boolean;
}

type DataStatesList = Array<StatesI & VisibleStateI>;

const createDataList = (dataStates: StatesI[]): DataStatesList => {
  const dataStateList: DataStatesList = _.map(dataStates, (state) => {
    return { ...state, isVisible: false };
  });
  return dataStateList;
};

const SearchBox = ({ content }: SearchBoxProps): JSX.Element => {
  const [statesFinded, setStatesFinded] = useState<string>('');

  const [stateDataList, setStateDataList] = useState<DataStatesList>([]);

  const onChangeInputState = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setStatesFinded(event.currentTarget.value);

    const regexState = new RegExp(event.currentTarget.value);
    const cloneListState = _.clone(stateDataList);
    _.map(cloneListState, (state) => {
      if (regexState.test(state.name)) {
        state.isVisible = true;
      } else {
        state.isVisible = false;
      }
    });
    setStateDataList(cloneListState);
  };

  useEffect(() => {
    const x = createDataList(content);
    setStateDataList(x);
  }, []);

  return (
    <>
      <SearchInput
        onChangeHandler={onChangeInputState}
        value={statesFinded}
        placeholder="City Name"
      />
      <SearchList>
        {_.map(stateDataList, (state) => {
          return (
            <SearchListItem isVisible={state.isVisible}>
              <SearchListItemContent isVisible={state.isVisible}>
                {state.name} - {state.initials}
              </SearchListItemContent>
            </SearchListItem>
          );
        })}
      </SearchList>
    </>
  );
};

export default SearchBox;
