import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AppContext } from "../context/appContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setData } = useContext(AppContext);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    //TODO --- Query user from database
    setData(data);
    console.log(data);
    //TODO --- if true
    navigate("home");
    //TODO --- else navigate to login and toast wrong pwd or user
  }; // your form submit function which will invoke after successful validation

  console.log(watch("user")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="username or email..." {...register("user")} />
      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="password..." type="password" {...register("pwd")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}
      <div style={{ color: "white" }}>
        Not registered yet?{" "}
        <Link style={{ color: "blue", textDecoration: "none" }} to="/register">
          {" "}
          Register now
        </Link>
      </div>
      <input style={{ background: "black" }} type="submit" value="Login" />
    </form>
  );
}

export default Login;
