import { useParams } from "react-router-dom";

function OnePost({ posts }) {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) return <p>Post not found.</p>;

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      {post.image && <img src={post.image} alt={post.title} width="100%" />}
      <p>{post.content}</p>
    </div>
  );
}

export default OnePost;