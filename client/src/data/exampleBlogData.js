import exempleDonneesBlog from "./exampleData";

const blogData = exempleDonneesBlog.map((post, index) => ({
  ...post,
  id: index + 1,
  title: post.titre,
  author: post.auteur,
  content: post.contenu,
  image: post.imageUrl,
  category: post.categorie,
}));

export default blogData;
