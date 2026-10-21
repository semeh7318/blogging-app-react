import PostDetails from "./PostDetails";

function AllPosts({ posts }) {
  if (posts.length === 0) return <p className="empty">No posts found.</p>;

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostDetails key={post.id} post={post} />
      ))}
    </div>
  );
}

export default AllPosts;
