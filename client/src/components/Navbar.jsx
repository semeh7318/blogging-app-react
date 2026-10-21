import { Link, NavLink } from "react-router-dom";
import Search from "./Search";

function Navbar({ search, setSearch, categories }) {
  return (
    <nav className="navbar">
      <Link to="/posts" className="logo">The Blog</Link>
      <div className="nav-links">
        <NavLink to="/posts" end className="nav-tab">All Posts</NavLink>
        <div className="dropdown">
          <NavLink to={`/category/${categories[0]}`} className="nav-tab dropdown-toggle">
            Categories ▾
          </NavLink>
          <div className="dropdown-menu">
            {categories.map((category) => (
              <NavLink key={category} to={`/category/${category}`} className="dropdown-item">
                {category}
              </NavLink>
            ))}
          </div>
        </div>
        <NavLink to="/createPost" className="nav-tab">New Post</NavLink>
        <NavLink to="/about" className="nav-tab">About</NavLink>
      </div>
      <Search search={search} setSearch={setSearch} />
    </nav>
  );
}

export default Navbar;
