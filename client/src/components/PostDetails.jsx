import { Link } from "react-router-dom";

function PostDetails({ post }) {
  return (
    <div className="post">
      <Link to={`/posts/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.author}</p>
      {post.image && <img src={post.image} alt={post.title} width="100%" />}
      <p>{post.content.slice(0, 100)}...</p>
    </div>
  );
}

export default PostDetails;