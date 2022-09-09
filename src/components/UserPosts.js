import React, { useState, useEffect } from "react";
import PostEdit from "./PostEdit";
import Spinner from "./Spinner";

const UserPosts = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editPostId, setEditPostId] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  };

  const changeUser = async (e) => {
    const userId = e.target.value;
    setLoading(true);
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="row mt-5">
        <div className="d-flex justify-content-between mb-4">
          <div>
            <p>برای مشاهده پست ها ابتدا کاربر مورد نظر را انتخاب نمایید.</p>
            <p>سپس برای ویرایش هر یک از پست ها روی پست مورد نظر کلیک نمایید.</p>
          </div>
          <p>
            <span className="badge bg-primary ms-1">{posts.length}</span>نتایج
            جستجو
          </p>
        </div>

        <form className="w-25">
          <label>کاربر مورد نظر:</label>
          <select onChange={(e) => changeUser(e)} className="mt-1 form-control">
            <option>انتخاب کنید</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </form>

        <div className="mt-3 d-flex justify-content-center flex-wrap">
          {loading ? (
            <Spinner />
          ) : (
            <>
              {posts.map((post) => (
                <>
                  {editPostId === post.id ? (
                    <PostEdit
                      setEditPostId={setEditPostId}
                      post={post}
                      posts={posts}
                      setPosts={setPosts}
                    />
                  ) : (
                    <div
                      key={post.id}
                      className="card m-2 shadow-sm myCard"
                      onClick={() => setEditPostId(post.id)}
                    >
                      <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        <p className="card-text">{post.body}</p>
                      </div>
                    </div>
                  )}
                </>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
