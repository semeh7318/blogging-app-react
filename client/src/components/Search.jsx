import { useLocation, useNavigate } from "react-router-dom";

function Search({ search, setSearch }) {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const goToResults = () => {
    if (pathname !== "/posts" && !pathname.startsWith("/category/")) {
      navigate("/posts");
    }
  };

  return (
    <form
      className="search-form"
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        goToResults();
      }}
    >
      <input
        className="search-input"
        type="text"
        placeholder="Search for..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          goToResults();
        }}
      />
      <button className="btn" type="submit">Search</button>
    </form>
  );
}

export default Search;
