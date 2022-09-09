import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <form onSubmit={handleSubmit(onSubmit)} className="w-25 myForm">
        <h3 className="text-center mb-5">فرم ورود به صفحه</h3>
        <div>
          <label className="form-label my-2" htmlFor="username">
            نام کاربری :
          </label>
          <input
            className="form-control mb-3"
            type="text"
            id="username"
            {...register("username", { required: true, maxLength: 5 })}
          />
          {errors.username?.type === "required" && (
            <small>نام کاربری الزامی میباشد</small>
          )}
          {errors.username?.type === "maxLength" && (
            <small>تعداد کاراکتر وارد شده بیش از حد مجاز میباشد</small>
          )}
        </div>
        <div>
          <label className="form-label my-2" htmlFor="password">
            رمز عبور :
          </label>
          <input
            className="form-control mb-5"
            type="password"
            id="password"
            {...register("password", { required: true, minLength: 5 })}
          />
          {errors.password?.type === "required" && (
            <small>رمز عبور الزامی میباشد</small>
          )}
          {errors.password?.type === "minLength" && (
            <small>تعداد کاراکتر وارد شده کمتر از حد مجاز میباشد</small>
          )}
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn btn-primary px-4">ورود</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
