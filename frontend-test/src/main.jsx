import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import DetailPost from './components/pages/DetailPost';
import DetailUser from './components/pages/DetailUser';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      </Route>
      <Route path='/post/:id' element={<DetailPost />} />
      <Route path='/user/:id' element={<DetailUser />} />



    </Routes>
  </BrowserRouter>
)
