// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ArticleList from './components/ArticleList';
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import CommentSection from './components/CommentSection';
import Home from './components/Home';
import './App.css'; // Import CSS file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/create" element={<CreateArticle />} />
          <Route path="/comment-section" element={<CommentSection />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;