import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import { useSidebarStore } from "../store/useSidebarStore";

const DashboardLayout = () => {
  const isOpen = useSidebarStore((state: any) => state.isOpen);
  
  // const [sidebarToggle, setSidebarOpen] = useState(false);
  return (
    <div className="w-full h-screen flex overflow-hidden transition-all duration-300 ease-in-out">
      {/* Sidebar */}
      <Sidebar open={isOpen}/>
      {/* Main */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
