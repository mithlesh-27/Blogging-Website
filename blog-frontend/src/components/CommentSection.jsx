import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CommentSection.css';

const CommentSection = ({ articleId }) => {
    const [comments, setComments] = useState([]);
    const [content, setContent] = useState('');

    useEffect(() => {
        axios.get(`/api/articles/${articleId}/comments`)
            .then(response => setComments(response.data))
            .catch(error => console.error(error));
    }, [articleId]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`/api/articles/${articleId}/comments`, { content })
            .then(response => setComments([...comments, response.data]))
            .catch(error => console.error(error));
    };

    return (
        <div>
            <h3>Comments</h3>
            {comments.map(comment => (
                <p key={comment._id}>{comment.content}</p>
            ))}
            <form onSubmit={handleSubmit}>
                <textarea value={content} onChange={e => setContent(e.target.value)} />
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
};

export default CommentSection;
