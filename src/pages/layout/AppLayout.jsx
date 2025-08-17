import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Layout/Header";
import LoaderPage from "./LoaderPage";
import { Toaster } from "react-hot-toast";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="min-h-screen grid grid-rows-[auto_1fr]">
      {isLoading && <LoaderPage />}
      <Toaster
        position="top-right"
        toastOptions={{
          style: { background: "#ffa505", color: "#1F2937" }
        }}
      />
      <Header />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
