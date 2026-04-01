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
  Folder,
  ChevronRight,
} from "lucide-react";
import webdadaslogo1 from "../../../assets/webdadaslogo1.svg";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../store/slice/authSlice";
import { useState } from "react";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  const baseLink =
    "flex items-center gap-3 px-3 py-2 text-sm rounded-md text-black hover:bg-gray-200 transition-all duration-300 relative group";

  return (
    <aside
      className={`h-screen ${
        isOpen ? "w-64" : "w-16"
      } bg-white border-r border-gray-200 flex flex-col transition-all duration-300`}
    >
      <div className="flex items-center justify-between px-3 h-20">
        {isOpen && <img src={webdadaslogo1} alt="logo" className="h-8" />}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded hover:bg-gray-200"
        >
          <ChevronRight
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <nav className="p-2 space-y-2 flex-1 font-semibold">
        {[
          { to: "/", icon: <AiOutlineDashboard />, label: "Dashboard" },
          {
            to: "/open-positions",
            icon: <Briefcase size={18} />,
            label: "Open Positions",
          },
          { to: "/apply-position", icon: <Users size={18} />, label: "Career" },
          {
            to: "/social",
            icon: <Share2 size={18} />,
            label: "Social Updates",
          },
          {
            to: "/enquiry",
            icon: <Mail size={18} />,
            label: "Project Enquiry",
          },
          { to: "/contact", icon: <Phone size={18} />, label: "Contact" },
          {
            to: "/hires",
            icon: <ClipboardList size={18} />,
            label: "Project Hires",
          },
          { to: "/blog", icon: <Newspaper size={18} />, label: "Blog" },
          {
            to: "/our-project",
            icon: <Folder size={18} />,
            label: "Our Project",
          },
        ].map((item, index) => (
          <NavLink
            key={index}
            to={item.to}
            className={({ isActive }) =>
              `${baseLink} ${isActive ? "bg-gray-300 font-semibold" : ""}`
            }
          >
            {item.icon}
            {isOpen && <span>{item.label}</span>}
            {!isOpen && (
              <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                {item.label}
              </span>
            )}
          </NavLink>
        ))}
      </nav>
      {accessToken && (
        <div className="p-2 border-t border-gray-300">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md text-red-600 hover:bg-red-50 relative group cursor-pointer"
          >
            <LogOut size={18} />

            {isOpen && <span>Logout</span>}

            {!isOpen && (
              <span className="absolute left-14 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">
                Logout
              </span>
            )}
          </button>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
