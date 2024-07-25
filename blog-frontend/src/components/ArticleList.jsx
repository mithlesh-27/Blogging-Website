import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/api/articles');
        setArticles(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="article-list">
      <h1>Articles</h1>
      {articles.map((article) => (
        <div key={article._id} className="article-preview">
          <h2>
            <Link to={`/article/${article._id}`}>{article.title}</Link>
          </h2>
          <p>{article.content.substring(0, 100)}...</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;