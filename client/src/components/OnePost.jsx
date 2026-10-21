import { useParams } from "react-router-dom";

function OnePost({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) return <p className="empty">Post not found.</p>;

  return (
    <article className="panel article">
      <h1>{post.title}</h1>
      <p className="byline">By <span>{post.author}</span></p>
      {post.image && <img className="article-image" src={post.image} alt={post.title} />}
      <p className="article-content">{post.content}</p>
    </article>
  );
}

export default OnePost;
