import { Link } from "react-router";

function Signup() {
  return (
    <div className="bg-background p-5 mx-auto w-[70%] ">
      <div className="flex items-center text-xl font-semibold justify-between">
        <h1>Food</h1>
        <p>welcome Back!</p>
      </div>
      <h1 className="font-semibold text-center text-3xl my-5 ">Signup</h1>
      <form className="flex flex-col items-center ">
        <div className="flex flex-col w-80 mb-4">
          <label className="text-left mb-1">Name</label>
          <input
            type="text"
            className="p-2 border rounded"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="flex flex-col w-80 mb-4">
          <label className="text-left mb-1">Email</label>
          <input
            type="email"
            className="p-2 border rounded"
            placeholder="Enter Your Email"
          />
        </div>

        <div className="flex flex-col w-80 mb-6">
          <label className="text-left mb-1">Password</label>
          <input
            type="password"
            placeholder="****"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-80 mb-3">
          <label className="text-left mb-1">Confirm Password</label>
          <input
            type="password"
            placeholder="****"
            className="p-2 border rounded"
          />
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
