import { BookMarkPage, HomePage, ShowsPage } from 'pages';
import { Route, Routes } from "react-router-dom"

import React from 'react';
import Wrapper from 'components/Wrapper/Wrapper';

const App = () => {

  return (
    <Wrapper>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="bookmarks" element={<BookMarkPage />} />
        <Route path="/:category" element={<ShowsPage />} />
      </Routes>
    </Wrapper>
  );
}

export default App;
