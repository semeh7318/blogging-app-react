import { Routes, Route, Navigate, Link } from "react-router-dom";
import AllPosts from "../components/AllPosts";
import OnePost from "../components/OnePost";
import CreatePost from "../components/CreatePost";
import CategoryPosts from "../components/CategoryPosts";
import About from "../components/About";

const AppRoutes = ({ posts, setPosts, filteredPosts, categories }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" />} />
      <Route path="/posts" element={<AllPosts posts={filteredPosts} />} />
      <Route path="/posts/:id" element={<OnePost posts={posts} />} />
      <Route path="/category/:name" element={<CategoryPosts posts={filteredPosts} />} />
      <Route
        path="/createPost"
        element={<CreatePost posts={posts} setPosts={setPosts} categories={categories} />}
      />
      <Route path="/about" element={<About />} />
      <Route
        path="*"
        element={
          <div className="empty">
            <p>Page not found.</p>
            <Link to="/posts" className="read-more">← Back to posts</Link>
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
