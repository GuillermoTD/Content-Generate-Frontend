import { Outlet } from "react-router";
import Sidebar from "../../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full h-[98vh] flex justify-center items-center ">
      {/* Sidebar section */}
      <Sidebar />

      {/* Main section */}
      <main className=" w-full h-full p-4">
        <Outlet />
      </main>
      {/* Header section */}
    </div>
  );
};

export default Dashboard;
