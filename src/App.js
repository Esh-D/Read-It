import React from 'react';
import Home from './pages/Home/Home';
import PostPage from './pages/PostPage/PostPage';
import Community from './pages/Community/Community';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="post" element={<PostPage />} />
          <Route path="community" element={<Community />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
