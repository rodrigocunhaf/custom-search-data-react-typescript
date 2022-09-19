import React from 'react';
import content from './content/default.json';

import PageGlobalConfig from './global/page-global-config';
import SearchBox from './components/SearchBox';

const App = (): JSX.Element => {
  return (
    <>
      <PageGlobalConfig />
      <SearchBox content={content} />
    </>
  );
};

export default App;
