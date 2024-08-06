import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];

  const clearBlogs = () => {
    localStorage.removeItem('blogs');
    window.location.reload(); // Reload the page to update the list
  };

  return (
    <div className="container">
      <h2>Blog List</h2>
      <button onClick={clearBlogs} className="clear-button" style={{marginBottom:'30px'}}>Clear All Blogs</button>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index}>
            <Link to={`/blogs/${index}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;


