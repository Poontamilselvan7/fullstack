import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Categories from './pages/Categories'; // Categories page component
import CreateBook from './pages/CreateBooks'; // CreateBook page component
import Home from './pages/Home';
import Show from './pages/ShowBook';
import './App.css';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import CreateBooks from './pages/CreateBooks';
import DeleteBook from './pages/DeleteBook';
import Homecopy from './pages/Homecopy';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Categories />} />
        <Route path="/books/delete/:id" element={<DeleteBook />} />
        <Route path="/cre" element={<CreateBook />} />
        <Route path="/show" element={<Home />} />
        <Route path="/books/details/:id" element={<ShowBook />} />
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/books/create" element={<CreateBooks />} />
        <Route path="/sho" element={<Homecopy />} />
      </Routes>
    </div>
  );
};

export default App;
