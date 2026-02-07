import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import {
  Newspaper,
  Briefcase,
  Share2,
  Mail,
  Phone,
  ClipboardList,
  Users,
  LogOut,
} from "lucide-react";
import webdadaslogo1 from "../../../assets/webdadaslogo1.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/slice/authSlice";
import { Folder } from "lucide-react";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openOurWork, setOpenOurWork] = useState(false);

  const { accessToken } = useSelector((state) => state.auth);

  const baseLink =
    "flex items-center gap-3 px-3 py-2 text-sm rounded-md text-black hover:bg-gray-200";

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <aside className="h-screen w-64 bg-white text-black border-r border-gray-200 flex flex-col">
      <div className="h-15 justify-center flex items-center px-4 border-b border-gray-200">
        <img src={webdadaslogo1} alt="webdadaslogo" className="h-10" />
      </div>
      <nav className="p-3 space-y-1 flex-1">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <AiOutlineDashboard /> Dashboard
        </NavLink>

        <NavLink
          to="/open-positions"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Briefcase size={18} /> Open Positions
        </NavLink>

        <NavLink
          to="/apply-position"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Users size={18} /> Career
        </NavLink>

        <NavLink
          to="/social"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Share2 size={18} /> Social Updates
        </NavLink>

        <NavLink
          to="/enquiry"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Mail size={18} /> Project Enquiry
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Phone size={18} /> Contact
        </NavLink>

        <NavLink
          to="/hires"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <ClipboardList size={18} /> Project Hires
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
          }
        >
          <Newspaper size={18} /> Blog
        </NavLink>
        <NavLink
          to="/our-project"
          className={({ isActive }) =>
            ` px-3 py-2 text-sm rounded-md flex gap-2 ${
              isActive ? "bg-gray-300 font-semibold" : "hover:bg-gray-200"
            }`
          }
        >
          <Folder size={18} /> Our Project
        </NavLink>
      </nav>
      {accessToken && (
        <div className="p-3 border-t border-gray-300">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md text-red-600 hover:bg-red-50 cursor-pointer"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
