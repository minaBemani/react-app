import React, { useState, useEffect } from "react";
import Spinner from "./Spinner";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <form
        onSubmit={handleSubmit}
        className="input-group my-4 w-25 mx-auto"
        style={{ direction: "ltr" }}
      >
        <input
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="نام کاربر را جستجو کنید"
          className="form-control text-end"
        />
        <button className="input-group-text">
          <i className="bi bi-search"></i>
        </button>
      </form>
      {loading ? (
        <Spinner />
      ) : (
        <table className="table table-hover mt-5 shadow-sm myTable">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users
              .filter((user) => {
                if (searchTerm == "") {
                  return user;
                } else if (
                  user.name.toLowerCase().includes(searchTerm.toLowerCase())
                ) {
                  return user;
                }
              })
              .map((user) => (
                <tr key={user.id}>
                  <th>{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
