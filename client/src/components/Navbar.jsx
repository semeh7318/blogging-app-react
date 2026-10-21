import { Link } from "react-router-dom";
import Search from "./Search";

function Navbar({ search, setSearch }) {
  return (
    <nav>
      <Link to="/posts">All Posts</Link>
      <Link to="/createPost">New Post</Link>
      <Search search={search} setSearch={setSearch} />
    </nav>
  );
}

export default Navbar;