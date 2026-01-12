import {
  FileText,
  History,
  Image,
  LayoutTemplate,
  Settings,
} from "lucide-react";
import { ProgressBar } from "./pre-built-components/ProgressBar";
import { Link } from "react-router";
interface SidebarProps {
  open: Boolean;
  setOpen: (open: Boolean) => void;
}

const routes = [
  { name: "Dashboard", path: "#", label: "Dashboard" },
  { name: "Generate", path: "#", label: "Generate" },
];

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <>
      {/* Mobile backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}
      <aside className="w-[19rem] min-w-[15rem] h-full border-r border-gray-200 relative">
        {/* Logo */}
        <div className="text-2xl font-medium border-b border-gray-200 px-4 py-2 pb-2 flex justify-start items-center ">
          ContentAI
        </div>
        {/* links */}
        <nav className="flex justify-center flex-col justify-center gap-2 mt-2 p-4">
          <Link to="/dashboard" className="sidebar-link flex items-center gap-2" >
            <LayoutTemplate size={20} />
            Dashboard
          </Link>
          <Link to="/generate-content" className="sidebar-link flex items-center gap-2" >
            <FileText size={20} />
            Generate
          </Link>
          <Link to="/history" className="sidebar-link flex items-center gap-2" >
            <History size={20} />
            History
          </Link>
          <Link to="/settings" className="sidebar-link flex items-center gap-2" >
            <Settings size={20} />
            Settings
          </Link>
        </nav>

        {/* footer */}
        <div className="absolute bottom-0 w-full p-4 flex flex-col gap-2">
          {/* remainnig credits */}
          <div className="flex flex-col justify-between text-sm text-gray-500 w-full h-[5rem] bg-slate-200 rounded-lg p-2">
            Remaining Credits
            <span className="text-[1.5rem]">10</span>
            <ProgressBar value={45} />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
