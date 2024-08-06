// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CreateBlog from './components/createblog.jsx';
import BlogList from './components/bloglist.jsx';
import BlogDetail from './components/blogdetail.jsx';
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/create">Create Blog</Link>
            </li>
            <li>
              <Link to="/blogs">View Blogs</Link>
            </li>
          </ul>
        </nav>
        <div className="container">
          <Routes>
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;



