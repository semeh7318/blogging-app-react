import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ setPosts, categories }) {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState(categories[0] || "");

  const creationNewPost = (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("Please write a title and content");
      return;
    }

    let newPost = {
      id: Date.now(),
      author: "Moi",
      title: title.trim(),
      content: content.trim(),
      image: image.trim(),
      category: category,
    };

    setPosts((prevPosts) => [newPost, ...prevPosts]);

    navigate("/posts");
  };

  return (
    <div className="blog-list-item">
      <h1 className="New-Post-Title">New Post</h1>

      <form className="New-Post-Form" onSubmit={creationNewPost}>
        <input
          id="title"
          type="text"
          className="search"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          id="image"
          type="text"
          className="search"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <select
          id="category"
          className="search"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <textarea
          id="content"
          placeholder="Content"
          rows="6"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Add Post</button>
      </form>
    </div>
  );
}

export default CreatePost;