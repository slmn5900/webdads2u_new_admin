import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "../component/Common/Sidebar/Sidebar";
import { useSelector } from "react-redux";

const ProtectedLayout = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!accessToken) {
    return <Navigate to="/login" replace />;
  }
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
