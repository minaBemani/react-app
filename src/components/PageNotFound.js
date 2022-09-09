import React from "react";
import { Link } from "react-router-dom";
import sad from "../assets/sad.png";

const PageNotFound = () => {
  return (
    <div className="text-center mt-5">
      <img src={sad} alt="sad" style={{ width: "200px", height: "200px" }} />
      <h3 className="my-5">صفحه ای که دنبال آن بودید پیدا نشد!</h3>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </div>
  );
};

export default PageNotFound;
