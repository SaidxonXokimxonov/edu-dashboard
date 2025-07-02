import Sidebar from "./sidebar";
import Navbar from "./navbar";
import AppRoutes from "../../routes";


export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Navbar />
        <main className="p-4 h-[calc(100vh-70px)] bg-[#F9F9F9]">
          <AppRoutes />
        </main>
      </div>
    </div>
  );
}
