import PostDetails from "./PostDetails";

function AllPosts({ posts }) {
  if (posts.length === 0) return <p>No posts found.</p>;

  return (
    <div>
      {posts.map((post) => (
        <PostDetails key={post.id} post={post} />
      ))}
    </div>
  );
}

export default AllPosts;