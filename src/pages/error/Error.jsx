function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 text-center">
        <h1 className="text-6xl font-bold text-red-dark">Error</h1>
        <p className="mt-4 text-lg text-gray-600">
          Something went wrong. Please try again later.
        </p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-red-500  rounded-lg shadow hover:bg-red-600 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

export default Error;
