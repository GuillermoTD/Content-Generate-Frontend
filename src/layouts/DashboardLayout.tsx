import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
