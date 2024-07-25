// Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Article from "./Article";
import CreateArticle from "./CreateArticle";
import CommentSection from "./CommentSection";
import ArticleList from "./ArticleList";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/create">Create Article</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/articlelist">Articles List</Link>
    </nav>
  );
}

export default Navbar;
