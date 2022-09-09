import React, { useState } from "react";

const PostEdit = ({ setEditPostId, post, posts, setPosts }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const save = async (title, body) => {
    await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: title,
        body: body,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));

    setEditPostId(null);
  };

  const handleSubmit = (id) => {
    save(title, body);
    let editedPosts = posts.map((post) => {
      if (post.id === id) {
        post.title = title;
        post.body = body;
      }
      return post;
    });
    setPosts(editedPosts);
  };

  return (
    <>
      <div
        className="card m-2 shadow-sm"
        style={{ width: "16rem", background: "#fff3cd" }}
      >
        <div className="card-body">
          <label>عنوان:</label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3"
          />
          <label>محتوا:</label>
          <input
            type="text"
            onChange={(e) => setBody(e.target.value)}
            className="mb-4"
          />

          <button
            className="btn btn-sm btn-primary ms-3"
            onClick={() => handleSubmit(post.id)}
          >
            ذخیره
          </button>
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setEditPostId(null)}
          >
            لغو
          </button>
        </div>
      </div>
    </>
  );
};

export default PostEdit;
