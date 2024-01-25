import { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Posts from "./components/Posts";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const postsPerpage = 10;

  useEffect(() => {
    const fetchPosta = async () => {
      setLoading(true);

      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(res);
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosta();
  }, []);

  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <div className="container">
      <h1>My Blog</h1>
      <Posts posts={currentPosts} loading={loading} text="Featching data..." />
      <Pagination
        paginate={paginate}
        postsPerpage={postsPerpage}
        totalPosta={posts.length}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
