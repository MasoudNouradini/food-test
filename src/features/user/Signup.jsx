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
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-white p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center mb-2">Create Account</h1>
        <p className="text-center text-gray-600 mb-6">Sign up to get started</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1 block font-medium">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              type="text"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 transition"
              placeholder="Enter your name"
            />
            {errors.name &&
              <p className="text-red-500 text-sm mt-1">
                {errors.name.message}
              </p>}
          </div>

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

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block font-medium">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm your password",
                validate: value =>
                  value === password || "Passwords do not match"
              })}
              type="password"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-secondary/60 focus:border-secondary/60 transition"
              placeholder="••••••"
            />
            {errors.confirmPassword &&
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-secondary text-white p-3 rounded-md hover:bg-secondary/90 transition font-medium"
          >
            Signup
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-secondary font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
