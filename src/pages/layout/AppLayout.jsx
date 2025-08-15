import { Outlet, useNavigation } from "react-router";
import Header from "../../components/Layout/Header";
import LoaderPage from "./LoaderPage";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <LoaderPage />}
      <Header />
      <div className="overflow-scroll">
        <main className="mx-auto max-w-[85%]">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
