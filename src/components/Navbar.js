import React from "react";
import { Link } from "react-router-dom";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div>
      <nav className="p-2 bg-light">
        <img src={user} alt="user" className="userImg" />
        <Link to="/login" className="me-5 myLink">
          ورود
        </Link>
        <Link to="/users" className="me-5 myLink">
          لیست کاربرها
        </Link>
        <Link to="/posts" className="me-5 myLink">
          پست ها
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
