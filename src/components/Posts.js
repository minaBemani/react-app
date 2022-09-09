import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [editmode, setEditmode] = useState(false);

  const fetchPosts = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  return (
    <div>
      <div className="mt-3 mb-3 d-flex justify-content-center flex-wrap">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="card m-2 shadow-sm myCard"
            onClick={() => setEditmode(true)}
          >
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Posts;
