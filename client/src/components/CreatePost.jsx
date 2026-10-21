import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreatePost({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.length < 3) {
      setError("Title must have at least 3 characters");
      return;
    }
    if (content.length < 20) {
      setError("Content must have at least 20 characters");
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      author: "Me",
      content: content,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
    setError("");
    navigate("/posts");
  };

  return (
    <div className="post">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Publish</button>
      </form>
    </div>
  );
}

export default CreatePost;