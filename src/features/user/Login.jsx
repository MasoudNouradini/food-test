import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "./userSlice";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = data => {
    const saveUser = JSON.parse(localStorage.getItem("user"));
    if (
      saveUser &&
      saveUser.email === data.email &&
      saveUser.password === data.password
    ) {
      dispatch(login(saveUser));
      navigate("/");
    } else {
      alert("Invali email or password");
    }
  };

  return (
    <div className="bg-background p-5 mx-auto w-[70%] ">
      <div className="flex items-center text-xl font-semibold justify-between">
        <h1>Food</h1>
        <p>welcome Back!</p>
      </div>
      <h1 className="font-semibold text-center text-3xl my-5 ">Login</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center "
      >
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

        <div className="flex justify-center items-center gap-4">
          <button type="submit" className="p-3 my-3 rounded bg-secondary">
            Login
          </button>
          <Link
            to="/signup"
            className="p-3 my-3 bg-text rounded   text-secondary"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
