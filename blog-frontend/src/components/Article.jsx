import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CommentSection from './CommentSection';
import './Article.css';

function Article({ match }) {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        axios.get(`/api/articles/${match.params.id}`)
            .then(response => setArticle(response.data))
            .catch(error => console.error(error));
    }, [match.params.id]);

    return (
        article ? (
            <div className="article">
                <h1>{article.title}</h1>
                <p>{article.content}</p>
                <CommentSection articleId={article._id} />
            </div>
        ) : (
            <p>Loading...</p>
        )
    );
}

export default Article;
