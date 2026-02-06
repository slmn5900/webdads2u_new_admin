import { Outlet } from "react-router-dom";
import Sidebar from "../component/Common/Sidebar/Sidebar";

const ProtectedLayout = () => {
  return (
    <div className="h-screen flex overflow-hidden">
      <div className="h-full">
        <Sidebar />
      </div>
      <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayout;
