import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import blogData from "./data/exampleBlogData";
import Navbar from "./components/Navbar";
import AllPosts from "./components/AllPosts";
import OnePost from "./components/OnePost";
import CreatePost from "./components/CreatePost";

function App() {
  const [posts, setPosts] = useState(blogData);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Navigate to="/posts" />} />
        <Route path="/posts" element={<AllPosts posts={filteredPosts} />} />
        <Route path="/posts/:id" element={<OnePost posts={posts} />} />
        <Route
          path="/createPost"
          element={<CreatePost posts={posts} setPosts={setPosts} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;