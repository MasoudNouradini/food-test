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
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2">Login</h1>
        <p className="text-center text-gray-600 mb-6">
          Welcome back! Please login to your account.
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div>
            <label className="mb-1 block font-medium">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 transition"
              placeholder="Enter your email"
            />
            {errors.email &&
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>}
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block font-medium">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 transition"
              placeholder="••••••"
            />
            {errors.password &&
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-secondary text-white p-3 rounded-md hover:bg-secondary/90 transition font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-secondary font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
