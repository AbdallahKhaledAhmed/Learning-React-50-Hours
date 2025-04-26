const SideBar = () => {
  return (
    <div className="flex flex-col gap-7 border-r border-neutral-700 w-15 h-full min-h-[100vh] items-center py-4">
      <button className="border-b pb-5 w-full border-neutral-700">Logo</button>
      <button>📁</button>
      <button>👤</button>
      <button>⚙️</button>
    </div>
  );
};

export default SideBar;
