import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import blogData from "./data/exampleBlogData";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/routes";

function App() {
  const [posts, setPosts] = useState(blogData);
  const [search, setSearch] = useState("");

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  const categories = [...new Set(blogData.map((post) => post.category))];

  return (
    <BrowserRouter>
      <Navbar search={search} setSearch={setSearch} categories={categories} />
      <AppRoutes
        posts={posts}
        setPosts={setPosts}
        filteredPosts={filteredPosts}
        categories={categories}
      />
    </BrowserRouter>
  );
}

export default App;
