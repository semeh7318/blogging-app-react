import { useParams } from "react-router-dom";
import AllPosts from "./AllPosts";

function CategoryPosts({ posts }) {
  const { name } = useParams();
  const categoryPosts = posts.filter((post) => post.category === name);

  return (
    <>
      <h1 className="page-title">{name}</h1>
      <AllPosts posts={categoryPosts} />
    </>
  );
}

export default CategoryPosts;
