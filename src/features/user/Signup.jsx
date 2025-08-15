import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { signup } from "./userSlice";

function Signup() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = data => {
    dispatch(
      signup({
        name: data.name,
        email: data.email,
        password: data.password
      })
    );
    navigate("/login");
  };
  return (
    <div className="bg-background p-5 mx-auto w-[70%] ">
      <div className="flex items-center text-xl font-semibold justify-between">
        <h1>Food</h1>
        <p>welcome Back!</p>
      </div>
      <h1 className="font-semibold text-center text-3xl my-5 ">Signup</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center "
      >
        <div className="flex flex-col w-80 mb-4">
          <label className="text-left mb-1">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            type="text"
            className="p-2 border rounded"
            placeholder="Enter Your Name"
          />
          {errors.name &&
            <p className="text-error">
              {errors.name.message}
            </p>}
        </div>
        <div className="flex flex-col w-80 mb-4">
          <label className="text-left mb-1">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            type="email"
            className="p-2 border rounded"
            placeholder="Enter Your Email"
          />
          {errors.email &&
            <p className="text-error">
              {errors.email.message}
            </p>}
        </div>

        <div className="flex flex-col w-80 mb-6">
          <label className="text-left mb-1">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            type="password"
            placeholder="****"
            className="p-2 border rounded"
          />
          {errors.password &&
            <p className="text-error">
              {errors.password.message}
            </p>}
        </div>
        <div className="flex flex-col w-80 mb-3">
          <label className="text-left mb-1">Confirm Password</label>
          <input
            {...register("confirmPassword", {
              required: "Confirm your password",
              validate: value => value === password || "Passwords do not match"
            })}
            type="password"
            placeholder="****"
            className="p-2 border rounded"
          />
          {errors.confirmPassword &&
            <p className="text-error">
              {errors.confirmPassword.message}
            </p>}
        </div>

        <div className="flex justify-center items-center gap-4">
          <button type="submit" className="p-3 my-3 rounded bg-secondary">
            Signup
          </button>
          <p className="text-sm my-3">
            Have an account?{" "}
            <Link to="/login" className="p-2 bg-text rounded text-secondary">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Signup;
