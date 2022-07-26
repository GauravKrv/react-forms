import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    //TODO --- Store to database
    const flag = true;
    flag ? navigate("/") : console.log("incorrect pwd");
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("user")); // you can watch individual input by pass the name of the input

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input placeholder="username..." {...register("user")} />
      <input placeholder="email..." {...register("email")} />

      {/* include validation with required or other standard HTML validation rules */}
      <input placeholder="password..." type="password" {...register("pwd")} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <p>This field is required</p>}

      <input style={{ background: "black" }} type="submit" value="Register" />
    </form>
  );
}

export default Register;
