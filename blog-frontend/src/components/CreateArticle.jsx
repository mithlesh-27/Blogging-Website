import React, { useState } from 'react';
import axios from 'axios';
import './CreateArticle.css';
import Footer from './Footer';

function CreateArticle({ history }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    formData.append('author', author);
    formData.append('category', category);
    if (image) {
      formData.append('image', image);
    }

    axios.post('/api/articles', formData)
      .then((response) => {
        setSuccess('Article created successfully!');
        history.push('/');
      })
      .catch((error) => {
        setError('Error creating article: ' + error.message);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Author</label>
        <input value={author} onChange={(e) => setAuthor(e.target.value)} />
      </div>
      <div>
        <label>Category</label>
        <input value={category} onChange={(e) => setCategory(e.target.value)} />
      </div>
      <div>
        <label>Image</label>
        <input type="file" onChange={handleImageChange} />
        {imagePreview && (
          <img src={imagePreview} alt="Preview" style={{ width: '100px', height: '100px' }} />
        )}
      </div>
      <button type="submit">Create Article</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );<div><Footer/></div>
}

export default CreateArticle;