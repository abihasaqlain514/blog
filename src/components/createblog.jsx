import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CreateBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newBlog = { title, content };
    const existingBlogs = JSON.parse(localStorage.getItem('blogs')) || [];
    existingBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(existingBlogs));
    navigate('/blogs');
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2,3 ,4,false] }], [{ 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input style={{ fontSize: '40px' }}
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Blog Title"
      />
      <ReactQuill value={content} onChange={setContent} modules={modules} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default CreateBlog;
