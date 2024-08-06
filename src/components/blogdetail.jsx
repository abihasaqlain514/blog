// src/components/BlogDetail.jsx

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
  const blog = blogs[id];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-content">
      <h2>{blog.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetail;
