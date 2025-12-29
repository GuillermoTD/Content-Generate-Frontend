const Sidebar = () => {
  return (
    <div className="w-70 h-full border-r border-gray-200 relative">
      {/* Logo */}
      <div className="text-2xl font-medium border-b border-gray-200 p-4 pb-2 flex justify-start items-center ">
        ContentAI
      </div>
      {/* links */}
      <div className="flex justify-center flex-col gap-6 mt-2 p-4">
        <a href="#">Dashboard</a>
        <a href="#">Generate</a>
        <a href="#">My Content</a>
        <a href="#">History</a>
        <a href="#">Settings</a>
      </div>

      {/* footer */}
      <div className="absolute bottom-0 w-full p-4">
        {/* remainnig credits */}
        <div className="text-sm text-gray-500 w-full h-[4rem] bg-slate-400 rounded-lg p-2">
          Remaining Credits: 10
        </div>
        {/* toogle button */}
        <div className="border-t border-gray-200 flex items-center w-full h-12 bg-red-400 justify-center">
          <div className="cursor-pointer">{"<"}</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
