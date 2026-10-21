import { Link } from "react-router-dom";

function PostDetails({ post }) {
  return (
    <article className="card">
      {post.image && <img className="card-image" src={post.image} alt={post.title} />}
      <div className="card-body">
        {post.category && (
          <Link to={`/category/${post.category}`} className="badge">{post.category}</Link>
        )}
        <Link to={`/posts/${post.id}`} className="card-title">
          <h2>{post.title}</h2>
        </Link>
        <p className="byline">By <span>{post.author}</span></p>
        <p className="card-excerpt">{post.content.slice(0, 100)}...</p>
        <Link to={`/posts/${post.id}`} className="read-more">Read more →</Link>
      </div>
    </article>
  );
}

export default PostDetails;
